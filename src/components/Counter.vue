<template>
  <h2>{{ title }}</h2>
  <p data-testid="counter"> {{ counter }} </p>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <div class="buttons__container">
    <button @click="decreaseCounter()" data-testid="decreaseBtn">-1</button>
    <button @click="increaseCounter()" data-testid="increaseBtn">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Counter"
    },
    start: {
      type: Number,
      default: 100,
      //required: true,
      validator(value){
        return value >=0 ? true : false 
      }
    }
  },
  name: "Counter",
  data(){
    return {
      counter: this.start
    }
  },
  methods: {
    getSquareValue(){
      return this.counter * this.counter
    },
    //increase the counter by one
    increaseCounter(){
      return this.counter += 1;
    },
    //decrease the counter by one
    decreaseCounter(){
      return this.counter -= 1;
    }
  },
  computed: {
    squareCounter(){
      return this.counter * this.counter;
    }
  }
}
</script>

<style>
  button{
    background-color: #64bb87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
  }

  button:hover{
    background-color: #5aa67b;
  }
</style>