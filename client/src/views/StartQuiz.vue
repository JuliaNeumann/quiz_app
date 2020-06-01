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
    import { getCategories } from '../services/apiService';

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
                this.$router.push({
                    name: 'play',
                    params: {
                        category: this.selectedCategory,
                        number: this.numQuestions
                    }
                });
            }
        },
        async created() {
            this.categories = await getCategories();
        }
    }
</script>

<style>
    @import '../assets/button.css';

    .inline_wrapper {
        display: inline-block;
        margin-right: 20px;
    }
</style>
