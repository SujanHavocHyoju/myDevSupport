<template>
    <base-card>
        <section>
            <h3>Register as a Dev Support</h3>
            <support-form @save-data="saveData" class="supportForm"></support-form>
        </section>
    </base-card>
</template>
<script>
import SupportForm from '@/components/supports/SupportForm';

export default {
    components: {
        SupportForm
    },
    methods: {
        saveData(data) {
            console.log(data);
            this.$store.dispatch('supports/registerSupport', data);
            this.$router.replace('/supports');
        }
    }
}
</script>
<style scoped>
.card{
    max-height: 60rem !important;
}
</style>