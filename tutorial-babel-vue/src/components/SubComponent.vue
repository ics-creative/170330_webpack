<template>
  <div>
    <h2>{{message}}</h2>
    <p>{{count}}</p>
    <p>
      <button @click="onClick">Add +1</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'sub-component',

    data(){
      return {
        count: 0
      }
    },
    props: ['message'],

    methods: {
      onClick() {
        console.log('クリックされました');
        this.count = this.count + 1;
      }
    }
  };
</script>

<style scoped>
  h2 {
    font-weight: normal;
    font-size: 1.25rem;
  }
</style>