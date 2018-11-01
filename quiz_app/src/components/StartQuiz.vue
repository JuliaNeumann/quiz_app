<template>
    <section>
        <h2>Let's get started ...</h2>
        <form>
            <p>Please select your quiz category and tell me how many questions you would like to be asked.</p>
            <p class="inline_wrapper">
                <label for="select_category">Category: </label>
                <select id="select_category" name="select_category" v-model="selectedCategory">
                    <option value="0">Any</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}        
                    </option>
                </select>
            </p>
            <p class="inline_wrapper">
                <label for="select_number_questions">Number of Questions: </label>
                <select id="select_number_questions" name="select_number_questions" v-model="numQuestions">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </p>
            <p>
                <input class="submit_prepare button" id="submit_prepare" name="submit_prepare" type="submit" value="Go!" @click.prevent="submit" />
            </p>
        </form>
    </section>
</template>

<script>
    import { getCategories, getQuestions } from '../services/apiService';

    export default {
        name: 'StartQuiz',
        data() {
            return {
                numQuestions: 5,
                categories: [],
                selectedCategory: 0
            }
        },
        methods: {
            async submit() {
                const quiz = await getQuestions(this.selectedCategory, this.numQuestions);
                console.log(quiz);     
            }
        },
        async mounted() {
            this.categories = await getCategories();
        }
    }
</script>

<style>
    .inline_wrapper {
        display: inline-block;
        margin-right: 20px;
    }

    .button {
        font-family: 'Amatic SC', cursive;
        font-size: 24px;
        font-weight: bold;
        background: none;
        background-color: #052929;
        border: 0;
        color: inherit;
        line-height: normal;
        overflow: visible;
        padding: 5px 10px;
        -webkit-appearance: button; /* for input */
        -webkit-user-select: none; /* for button */
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
    }

    .button:hover,
    .button:active,
    .button:focus {
        background-color: #0D4D4D;
    }
</style>
