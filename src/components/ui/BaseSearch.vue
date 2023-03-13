<template>
  <form>
    <input type="search" @input="search" :value="searchTerm" placeholder="Search By Name" />
  </form>
</template>

<script>
export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    },
  },
};
</script>

<style scoped>

form {
  float: left;
}

input {
  font: inherit;
  width: 150%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
  margin-top: 10px;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>