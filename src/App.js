import React from "react";
import Intro from "./Intro/Intro";
import AskQuestion from "./AskQuestion/AskQuestion";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "intro",
      questions: [],
      currentQuestion: 0,
    };
    this.startQuiz = this.startQuiz.bind(this);
  }

  startQuiz(questions) {
    this.setState({ questions, status: "askQuestion" });
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
                return <Intro handleQuestions={this.startQuiz} />;
              case "askQuestion":
                return (
                  <AskQuestion
                    index={this.state.currentQuestion + 1}
                    question={this.state.questions[this.state.currentQuestion]}
                  />
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
