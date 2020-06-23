import React from "react";
import "./Question.css";

const initialState = {
  isAnswered: false,
  isCorrect: false,
  selectedAnswer: "",
};

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.getAnswerClass = this.getAnswerClass.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.continue = this.continue.bind(this);
  }

  getAnswerClass(option) {
    let className = "question__answer";
    if (this.state.isAnswered) {
      className += " question__answer--disabled";
      if (this.props.question.checkAnswer(option)) {
        className += " question__answer--correct";
      } else if (this.state.selectedAnswer === option) {
        className += " question__answer--incorrect";
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

  continue(event) {
    event.preventDefault();
    this.props.handleAnswer(this.state.isCorrect);
    this.setState(initialState);
  }

  render() {
    let button;
    if (this.state.isAnswered) {
      button = (
        <input
          name="next_question"
          type="submit"
          value="Continue"
          onClick={this.continue}
        />
      );
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
            <p className="question__feedback">
              {this.state.isCorrect ? "Correct!!" : "Incorrect :("}
            </p>
          )}
          <p>{this.props.question.text}</p>
          <ul className="question__answers">
            {this.props.question.options.map((option) => {
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

export default Question;
