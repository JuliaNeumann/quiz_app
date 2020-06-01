<template>
  <section>
    <h2>Quiz Scores:</h2>
    <ul>
        <li v-for="submission in submissions" :key="submission.id">
            {{ `${submission.username}: ${submission.score} / ${submission.numQuestions}` }}
        </li>
    </ul>
    <p>
      <router-link tag="button" to="/" class="button">Play again!</router-link>
    </p>
  </section>
</template>

<script>
  import { getSubmissions } from '../services/submissionService';
  
  export default {
    name: 'SubmissionsOverview',
    data() {
        return {
            submissions: []
        }
    },
    async created() {
        this.submissions = await getSubmissions();
    }
  }
</script>

<style scoped>
    @import '../assets/button.css';
</style>