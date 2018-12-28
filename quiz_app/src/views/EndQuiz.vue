<template>
  <section>
    <h2>That's it</h2>
    <p>Your score: You answered {{ score }} out of {{ number }} questions correctly.</p>
    <p>
      <router-link tag="button" to="/" class="button">Play again!</router-link>
    </p>
  </section>
</template>
<script>
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
    }
  }
</script>
