import React from "react";
import "./Intro.css";
import { fetchQuestions } from "../../services/api";
import config from "../../services/config";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 0,
      selectedNumQuestions: config.optionsNumQuestions[0],
    };

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleNumQuestionsChange = this.handleNumQuestionsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({ selectedCategory: parseInt(event.target.value) });
  }

  handleNumQuestionsChange(event) {
    this.setState({ selectedNumQuestions: parseInt(event.target.value) });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const questions = await fetchQuestions(
      this.state.selectedCategory,
      this.state.selectedNumQuestions
    );
    if (Array.isArray(questions) && questions.length) {
      this.props.handleQuestions(questions);
    } else {
      alert("Something went wrong during requesting questions.");
    }
  }

  render() {
    return (
      <section className="intro">
        <h2>Let's get started ...</h2>
        <form>
          <p>
            Please select your quiz category and tell me how many questions you
            would like to be asked.
          </p>
          <p className="intro__inline-wrapper">
            <label htmlFor="select_category">Category:&nbsp;</label>
            <select
              id="select_category"
              name="select_category"
              value={this.state.selectedCategory}
              onChange={this.handleCategoryChange}
            >
              <option value="0">Any</option>
              {this.props.categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </p>
          <p className="intro__inline-wrapper">
            <label htmlFor="select_number_questions">
              Number of Questions:&nbsp;
            </label>
            <select
              id="select_number_questions"
              name="select_number_questions"
              value={this.state.selectedNumQuestions}
              onChange={this.handleNumQuestionsChange}
            >
              {config.optionsNumQuestions.map((numOption) => (
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
              onClick={this.handleSubmit}
            />
          </p>
        </form>
      </section>
    );
  }
}

export default Intro;
