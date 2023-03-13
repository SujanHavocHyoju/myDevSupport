<template>
    <section class="suppItemDetails">
        <div v-if="!support">
            <h3>Select a Support</h3>
            <div id="noDataDiv">
                <img alt="No Data" src="@/assets/blank-result.png" id="noData">
            </div>
        </div>
        <div v-else id="suppDetailsDiv">
            <h2>{{ fullName }}</h2>
            <h4>Experience: {{ support.yearsOfExperience }} years</h4>
            <h4>Rate: ${{ support.hourlyRate }}/Hour</h4>
            <p v-text="support.description"></p>
            <div v-if="support.areas.length>0">
                <p><strong>Skills:</strong></p>
                <base-badge v-for="area in support.areas" :key="area"
                        :title="area"></base-badge>
            </div>
            <div v-if="support.portfolio.length>0">
                <p><strong>Projects:</strong></p>
                <span v-for="proj in support.portfolio" :key="proj.title">
                    <i><strong>{{ proj.title }}</strong></i> : 
                    <a :href="'//'+proj.url" target="_blank"> {{ proj.url }}</a>
                    <p>{{ proj.description }}</p>
                </span>
            </div>
            <div class="actions">
                <base-button mode="outline" link :to="supportContactLink">Contact</base-button>
                <base-button link :to="supportDetailsLink">View Details</base-button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['support'],
    computed: {
        supportContactLink() {
            return this.$route.path + "/" + this.support.id + "/support";
        },
        supportDetailsLink() {
            return this.$route.path + "/" + this.support.id;
        },
        fullName() {
            return this.support.firstName + " " + this.support.lastName;
        },
    }
}
</script>
<style scoped>
#suppDetailsDiv {
    text-align: justify;
}

#noDataDiv {
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 250px;
}

#noData {
    height: 70%;
    width: 70%;
    object-fit: contain;
}

.actions {
    display: flex;
    justify-content: center;
}
</style>