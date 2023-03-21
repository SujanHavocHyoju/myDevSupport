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
                    <p><strong>Ares of Expertise:</strong></p>
                    <base-badge v-for="area in areas" :key="area" :title="area"></base-badge>
                </div>
                <div v-if="skills.length>0">
                    <p><strong>Skills:</strong></p>
                    <base-badge v-for="skill in skills" :key="skill"
                            :title="skill"></base-badge>
                </div>
                <div v-if="social && social.length>0">
                    <p><strong>Social Profiles:</strong></p>
                    <span v-for="soc in social" :key="soc">
                        <a :href="'//'+soc" target="_blank"> {{ soc }}</a>
                    </span>
                </div>
                <div v-if="portfolio && portfolio.length > 0">
                    <p><strong>Projects:</strong></p>
                    <span v-for="proj in portfolio" :key="proj.title">
                        <span v-if="proj.title"><i><strong>{{ proj.title }}</strong></i> : </span>
                        <a v-if="proj.url" :href="'//'+proj.url" target="_blank"> {{ proj.url }}</a>
                        <a v-else :href="'//'+proj" target="_blank"> {{ proj }}</a>
                        <p v-if="proj.description">{{ proj.description }}</p>
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
            selectedSupport: null,
        }
    },
    created() {
        this.selectedSupport = this.$store.getters['supports/supports'].find(support => support.id === this.id);
    },
    computed: {
        fullName() {
            console.log('SelecteSuport in SupportDetail.vue', this.selectedSupport);
            return this.selectedSupport.firstName + " " + this.selectedSupport.lastName;
        },
        contactLink() {
            if(this.$route.path.includes("/contact")){
                return this.$route.path;
            }
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
        skills(){
            return this.selectedSupport.skills;
        },
        description() {
            return this.selectedSupport.description;
        },
        position() {
            return this.selectedSupport.position;
        },
        portfolio() {
            return this.selectedSupport.portfolio;
        },
        social(){
            return this.selectedSupport.social;
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