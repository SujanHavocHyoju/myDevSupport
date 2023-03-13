<template>
  <span>
    <span class="badge" :class="type">
      {{ text }}
    </span>
  </span>
</template>
<script>
export default {
  props: ['type', 'title', 'index'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>
<style scoped>
.badge {
  background-color: #e6dfdf;
  color: #252525;
  border-radius: 5px;
  padding: 1.5px;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', Courier, monospace;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>