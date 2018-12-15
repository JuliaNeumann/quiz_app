<template>
    <section>
        Play!!
    </section>
</template>

<script>
    import { getQuestions } from '../services/apiService';

    export default {
        name: "PlayQuiz",
        async mounted() {
            const quiz = await getQuestions(this.$route.params.category, this.$route.params.number);
            console.log(quiz);
        }
    }
</script>

<style scoped>

</style>
