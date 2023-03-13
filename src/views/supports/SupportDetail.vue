<template>
    <div>
        <section class="supportDetail">
            <base-card>
                <h3>Meet your support</h3>
                <h2>{{ fullName }}</h2>
                <h4>{{ position }} </h4>
                <h4>Experience: {{ years }} years</h4>
                <h4>Rate: ${{ rate }}/Hour</h4>
                <p v-text="description"></p>
                <div v-if="areas.length > 0">
                    <p><strong>Skills:</strong></p>
                    <base-badge v-for="area in areas" :key="area" :title="area"></base-badge>
                </div>
                <div v-if="portfolio.length > 0">
                    <p><strong>Projects:</strong></p>
                    <span v-for="proj in portfolio" :key="proj.title">
                        <i><strong>{{ proj.title }}</strong></i> :
                        <a :href="'//' + proj.url" target="_blank"> {{ proj.url }}</a>
                        <p>{{ proj.description }}</p>
                    </span>
                </div>
                <base-button link :to="contactLink">Contact</base-button>
            </base-card>
        </section>
        <section class="supportContact">
            <base-card>
                <router-view></router-view>
            </base-card>
        </section>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedSupport: null
        }
    },
    created() {
        this.selectedSupport = this.$store.getters['supports/supports'].find(support => support.id === this.id);
    },
    computed: {
        fullName() {
            return this.selectedSupport.firstName + " " + this.selectedSupport.lastName;
        },
        contactLink() {
            return this.$route.path + "/contact";
        },
        rate() {
            return this.selectedSupport.hourlyRate;
        },
        years() {
            return this.selectedSupport.yearsOfExperience;
        },
        areas() {
            return this.selectedSupport.areas;
        },
        description() {
            return this.selectedSupport.description;
        },
        position() {
            return this.selectedSupport.position;
        },
        portfolio() {
            return this.selectedSupport.portfolio;
        }

    }
}
</script>
<style scoped>
.supportDetail {
    text-align: justify !important;
}

.supportContact {
    height: 150px;
    max-height: 300px;
}
</style>