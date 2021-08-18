<template>
  <img v-if="img" :src="img" alt="bg">
  <div class="bg--dark"></div>

  <div class="indecition__container">
    <input
      type="text"
      placeholder="Hazme una pregunta"
      v-model="question"
    >
    <p>Recuerda terminar tu pregunta con un signo de Interrogación (?)</p>

    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Indecision',
  data(){
    return{
      question: null,
      answer: null,
      img: null,
      isValidQuestion: false
    }
  },
  methods:{
    async getAnswer(){
      const respuestas = {
        yes: 'Si!',
        no: 'No!',
        maybe: 'Tal vez!'
      }
      this.answer = 'Pensando...'

      const {answer, image} = await fetch('https://yesno.wtf/api')
                                    .then(response => response.json())

      this.img = image
      this.answer = respuestas[answer]
      this.isValidQuestion = true
    }
  },
  watch:{
    question(value, oldValue){
      this.isValidQuestion = false
      console.log({value})
      if (!value.includes('?')) return
      this.getAnswer()
    }
  }
}
</script>

<style scoped>
  img, .bg--dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 0;
  }

  .bg--dark {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .indecition__container {
    position: relative;
    z-index: 99;
  }
  
  input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
  }
  input:focus {
    outline: none;
  }

  p {
    color: white;
    font-size: 20px;
    margin-top: 0px;
  }

  h1, h2 {
    color: white;
  }
  
  h2 {
    margin-top: 150px;
  }
</style>