<template>
  <section>
    <h2>That's it</h2>
    <p>Your score: You answered {{ score }} out of {{ number }} questions correctly.</p>
    <p>
      <router-link tag="button" to="/" class="button">Play again!</router-link>
      <button type="button" class="button" @click="submit">Submit result</button>
    </p>
  </section>
</template>

<script>
  import { postSubmission } from '../services/submissionService';
  
  export default {
    name: 'EndQuiz',
    props: {
      score: {
        type: Number,
        required: true
      },
      number: {
        type: Number,
        required: true
      }
    },
    methods: {
      async submit() {
        const name = prompt("Enter your name:", "");
        if (name) {
          const submissionSuccessful = await postSubmission(name, this.score, this.number);
          if (submissionSuccessful) {
            alert("Submission saved!");
            this.$router.push("submissions");
          } else {
            alert("Oops, something went wrong during submission.");
          }
        } else {
          alert("Result cannot be saved without providing a name.");
        }
      }
    }
  }
</script>

<style scoped>
    @import '../assets/button.css';
</style>