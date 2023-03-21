<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">Your Name</label>
            <input type="name" id="name" v-model.trim="name"/>
        </div>
        <div class="form-control">
            <label for="email">Your Email</label>
            <input type="email" id="email" v-model.trim="email"/>
        </div>
        <div class="form-control">
            <label for="phone">Your Phone Number</label>
            <input type="phone" id="phone" v-model.trim="phone"/>
        </div>
        <div class="form-control">
            <label for="message">Message</label>
            <textarea id="message" rows="5" v-model.trim="message"></textarea>
        </div>
        <p class="errors" v-if="!formIsValid">
            Please enter a valid email, phone and non-empty message</p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            formIsValid: true
        }
    },
    methods: {
        submitForm(){
            this.formIsValid = true;
            if(this.name === '' || this.email === '' || !this.email.includes('@') || this.message ===''){
                this.formIsValid = false;
                return;
            }
            const formData = {
                supportId: this.$route.params.id,
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            };
            this.$store.dispatch('requests/contactSupport', formData);
            this.$router.replace('/supports');
        }
    }
}
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  text-align: left;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>