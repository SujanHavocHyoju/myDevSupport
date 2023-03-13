<template>
    <li @click="getSupporItemId">
        <h4 id="name" class="noGap">{{ fullName }} - [ {{ support.position }} ]</h4>
        <h4 id="rate" class="noGap">${{ rate }}/hour</h4>
        <p class="noGap"></p>
        <br class="noGap">
        <div class="areas">
            <base-badge v-for="area in support.areas" :key="area" :title="area"></base-badge>
        </div>
    </li>
</template>
<script>
export default {
    props: ['support'],
    computed: {
        fullName() {
            return this.support.firstName + " " + this.support.lastName;
        },
        rate() {
            return this.support.hourlyRate;
        },
    },
    methods: {
        getSupporItemId() {
            this.$emit('getSupport', this.support.id);
        }
    }
}
</script>
<style scoped>
li {
    margin: 5px;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
    cursor: pointer;
    padding-bottom: 0rem;
}

h3 {
    font-size: 1.5rem;
}

h4#name {
    float: left;
}

h4#rate {
    float: right;
    color: rgb(109, 100, 238);
}

.noGap {
    margin: 0px;
}

div {
    margin: 0.5rem 0;
}

.areas {
    text-align: left;
}
</style>