import React from "react";

class Result extends React.Component {
  render() {
    return (
      <section>
        <h2>That's it</h2>
        <p>
          Your score: You answered {this.props.score} out of {this.props.total}{" "}
          questions correctly.
        </p>
        <form>
          <p>
            <input
              name="play_again"
              type="submit"
              value="Play again!"
              onClick={this.props.restart}
            />
          </p>
        </form>
      </section>
    );
  }
}

export default Result;
