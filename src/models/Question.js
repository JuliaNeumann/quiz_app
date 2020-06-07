export default class Question {
    constructor(text, correct, incorrect) {
        this.text = text;
        this.correct = correct;
        this.incorrect = incorrect;
    }

    getOptions() {
        let options = [this.correct, ...this.incorrect];
        const numOptions = options.length;
        let randomOptions = [];
        for (let i = numOptions - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            randomOptions = randomOptions.concat(options.splice(randomIndex, 1));
        }
        return randomOptions;
    }
}