import React from "react";

class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.question.getOptions());
        this.state = {
            
        };
    }

    render() {
        return (
            <section>
                <h2>Question {this.props.index}</h2>
                <form>
                    <p className="feedback hidden"></p>
                    <p>
                        {this.props.question.text}
                    </p>
                    <p>
            
                    </p>
                    <p>
                        <input className="button" name="submit_question" type="submit" value="Check" />
                        <input className="button hidden" name="next_question" type="submit" value="Continue" />
                    </p>
                </form>
            </section>
        )
    }
}

export default AskQuestion;