<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        },
        mode: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>
<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.7rem 1rem;
  font: inherit;
  background-color: #23296f; 
  border: 1px solid #23296f;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #414bc3;
  border-color: #414bc3;
}

.flat {
  background-color: transparent;
  color: #23296f;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #414bc3;
  color: #414bc3;
}

.smlBtn {
  background-color: transparent;
  border-color: #414bc3;
  color: #535ed1;
  padding: 0.5rem 1rem !important;
  margin-top: 5px !important;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active,
.smlBtn:hover,
.smlBtn:active {
  background-color: #edd2ff;
}

button.selected {
  background-color: #5454bd;
  color: white;
}
</style>