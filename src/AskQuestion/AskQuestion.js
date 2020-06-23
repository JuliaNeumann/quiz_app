import React from "react";
import "./AskQuestion.css";

class AskQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.question.getOptions(),
      isAnswered: false,
      selectedAnswer: "",
      isCorrect: false,
    };
    this.getAnswerClass = this.getAnswerClass.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  getAnswerClass(option) {
    let className = "answer";
    if (this.state.isAnswered) {
      if (this.props.question.checkAnswer(option)) {
        className += " correct";
      } else if (this.state.selectedAnswer === option) {
        className += " incorrect";
      }
    }
    return className;
  }

  handleAnswerChange(event) {
    this.setState({
      selectedAnswer: event.target.value,
    });
  }

  checkAnswer(event) {
    event.preventDefault();
    if (!this.state.selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
    this.setState({
      isAnswered: true,
      isCorrect: this.props.question.checkAnswer(this.state.selectedAnswer),
    });
  }

  render() {
    let button;
    if (this.state.isAnswered) {
      button = <input name="next_question" type="submit" value="Continue" />;
    } else {
      button = (
        <input
          name="submit_question"
          type="submit"
          value="Check"
          onClick={this.checkAnswer}
        />
      );
    }

    return (
      <section>
        <h2>Question {this.props.index}</h2>
        <form>
          {this.state.isAnswered && (
            <p className="feedback">
              {this.state.isCorrect ? "Correct!!" : "Incorrect :("}
            </p>
          )}
          <p>{this.props.question.text}</p>
          <ul className="answers">
            {this.state.options.map((option) => {
              return (
                <li key={option}>
                  <label className={this.getAnswerClass(option)}>
                    <input
                      type="radio"
                      name="answers"
                      value={option}
                      onChange={this.handleAnswerChange}
                      checked={this.state.selectedAnswer === option}
                      disabled={this.state.isAnswered}
                    />
                    {option}
                  </label>
                </li>
              );
            })}
          </ul>
          <p>{button}</p>
        </form>
      </section>
    );
  }
}

export default AskQuestion;
