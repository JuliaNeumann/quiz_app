import React from "react";
import Intro from "./components/Intro/Intro";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";
import { fetchCategories } from "./services/api";
import "./App.css";

const defaultState = {
  status: "intro",
  questions: [],
  currentQuestion: 0,
  score: 0,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], ...defaultState };
    this.startQuiz = this.startQuiz.bind(this);
    this.handleAnsweredQuestion = this.handleAnsweredQuestion.bind(this);
    this.restart = this.restart.bind(this);
  }

  async componentDidMount() {
    this.setState({ categories: await fetchCategories() });
  }

  startQuiz(questions) {
    this.setState({ questions, status: "question" });
  }

  handleAnsweredQuestion(answeredCorrectly) {
    if (answeredCorrectly) {
      this.setState({ score: this.state.score + 1 });
    }
    if (this.state.currentQuestion >= this.state.questions.length - 1) {
      this.setState({ status: "result" });
    } else {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
  }

  restart(event) {
    event.preventDefault();
    this.setState(defaultState);
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1>Welcome to my quiz app!</h1>
          <p>
            The main purpose of this app is to try out different technologies
            and thus help me learn them.
          </p>
          <p>Secondly, this is also a quiz which can be played :-)</p>
        </header>
        <main>
          {(() => {
            switch (this.state.status) {
              case "intro":
                return (
                  <Intro
                    categories={this.state.categories}
                    handleQuestions={this.startQuiz}
                  />
                );
              case "question":
                return (
                  <Question
                    index={this.state.currentQuestion + 1}
                    question={this.state.questions[this.state.currentQuestion]}
                    handleAnswer={this.handleAnsweredQuestion}
                  />
                );
              case "result":
                return (
                  <Result
                    score={this.state.score}
                    total={this.state.questions.length}
                    restart={this.restart}
                  ></Result>
                );
              default:
                return null;
            }
          })()}
        </main>
        <footer className="app__footer">&copy; Julia Neumann, 2020</footer>
      </div>
    );
  }
}

export default App;
