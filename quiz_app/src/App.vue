<template>
  <div id="app">
    <div class="wrapper">
        <header>
            <h1>Welcome to my quiz app!</h1>
            <p>The main purpose of this app is to try out different frontend technologies and thus help me learn them.</p>
            <p>Secondly, this is also a quiz which can be played :-)</p>
        </header>
        <main>
            <router-view/>
        </main>
        <footer>
            &copy; Julia Neumann, 2018
        </footer>
    </div>
  </div>
</template>

<style>
  /*colors: http://paletton.com/#uid=13i0u0kbRt14+E48dwffUpTkImm*/
  body {
      font-family: 'Raleway', sans-serif;
      color: white;
      font-size: 18px;
  }

  .wrapper {
      max-width: 1200px;
      margin: 20px auto;
      padding: 40px;
      background-color: #669999;
  }

  h1, h2 {
      font-family: 'Amatic SC', cursive;
      color: #052929;
  }

  h1 {
      margin-top: 0;
  }

  section {
      margin-top: 40px;
  }

  footer {
      text-align: right;
      font-size: 16px;
      color: #052929;
  }
</style>
