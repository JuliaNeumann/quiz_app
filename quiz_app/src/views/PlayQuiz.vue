<template>
    <section>
        <h2>Question {{ currentQuestion + 1}}</h2>
        <form>
            <p v-if="feedback"
               class="feedback">
                {{ feedback }}
            </p>
            <p v-if="questions[currentQuestion]"
               v-html="questions[currentQuestion].question">
            </p>
            <p>
                <span v-for="(option, index) in currentOptions"
                      :key="option"
                      class="answer_wrapper">
                    <input type="radio"
                           name="answers"
                           :id="`answer_${index}`"
                           v-model="selectedAnswer"
                           :value="option"/>
                    &nbsp;
                    <label :for="`answer_${index}`"
                           :class="getLabelClass(option)"
                           v-html="option">
                    </label>
                </span>
            </p>
            <p>
                <input v-if="asking"
                       class="button"
                       name="submit_question"
                       type="submit"
                       value="Check"
                       @click.prevent="evaluate"/>
                <input v-else
                       class="button"
                       name="continue_question"
                       type="submit"
                       value="Continue"
                       @click.prevent="goOn"/>
            </p>
        </form>
    </section>
</template>

<script>
    import { getQuestions } from '../services/apiService';
    import { shuffle } from "../utils/utils";

    export default {
        name: "PlayQuiz",
        data() {
            return {
                questions: [],
                currentQuestion: 0,
                feedback: '',
                asking: true,
                selectedAnswer: '',
                score: 0
            }
        },
        computed: {
            currentOptions() {
                if (this.questions[this.currentQuestion]) {
                    let options = this.questions[this.currentQuestion].incorrect_answers.slice(0);
                    options.push(this.questions[this.currentQuestion].correct_answer);
                    shuffle(options);
                    return options;
                }
                return [];
            }
        },
        methods: {
            evaluate() {
                if (this.selectedAnswer === '' || this.selectedAnswer === undefined) {
                    this.feedback = 'Please select an answer!';
                    return;
                }
                this.asking = false;
                if (this.selectedAnswer === this.questions[this.currentQuestion].correct_answer) {
                    this.feedback = 'Correct!!';
                    this.score++;
                    return;
                } 
                this.feedback = 'Incorrect :-('; 
            },
            goOn() {
                this.feedback = '';
                this.asking = true;
                if (this.currentQuestion < (this.questions.length - 1)) {
                    this.currentQuestion++;
                    return;
                }
                this.$router.push({
                    name: 'end',
                    params: {
                        score: this.score,
                        number: this.questions.length
                    }
                });
            },
            getLabelClass(option) {
                if (!this.asking) {
                    if (option === this.questions[this.currentQuestion].correct_answer) {
                        return 'correct';
                    }
                    if (option === this.selectedAnswer) {
                        return 'incorrect';
                    }
                }
                return '';
            }
        },
        async mounted() {
            this.questions = await getQuestions(this.$route.params.category, this.$route.params.number);
        }
    }
</script>

<style scoped>
    @import '../assets/button.css';

    .answer_wrapper {
        display: block;
        margin: 10px;
    }

    .answer_wrapper:last-child {
        margin-bottom: 30px;
    }

    .feedback {
        border: 2px solid #052929;
        padding: 5px;
    }

    .correct {
        color: #052929;
    }

    .incorrect {
        color: darkred;
    }
</style>
