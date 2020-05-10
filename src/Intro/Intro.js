import React from "react";
import "./Intro.css";

class Intro extends React.Component {
  render() {
    const optionsNumQuestions = [5, 10, 15, 20];

    return (
      <section className="intro">
        <h2>Let's get started ...</h2>
        <form>
          <p>
            Please select your quiz category and tell me how many questions you
            would like to be asked.
          </p>
          <p className="intro__inline-wrapper">
            <label htmlFor="select_category">Category: </label>
            <select id="select_category" name="select_category">
              <option value="0">Any</option>
            </select>
          </p>
          <p className="intro__inline-wrapper">
            <label htmlFor="select_number_questions">Number of Questions: </label>
            <select id="select_number_questions" name="select_number_questions">
              {optionsNumQuestions.map((numOption) => (
                <option key={numOption} value={numOption}>
                  {numOption}
                </option>
              ))}
            </select>
          </p>
          <p>
            <input
              className="submit_prepare button"
              id="submit_prepare"
              name="submit_prepare"
              type="submit"
              value="Go!"
            />
          </p>
        </form>
      </section>
    );
  }
}

export default Intro;
