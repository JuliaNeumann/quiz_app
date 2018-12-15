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
                           :value="option" />
                    &nbsp;
                    <label :for="`answer_${index}`"
                           v-html="option">
                    </label>
                </span>
            </p>
            <p>
                <input class="button"
                       name="submit_question"
                       type="submit"
                       :value="asking ? 'Check' : 'Continue'" />
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
                asking: true
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
