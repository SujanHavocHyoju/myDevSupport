<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !firstName.isValid }">
            <label for="firstname">Firstname</label>
            <input type="text" id="firstname" v-model.trim="firstName.val" @blur="clearValidity('firstName')"/>
            <p v-if="!firstName.isValid">Firstname must not be empty.</p>
        </div>
        <div class="form-control" :class="{ invalid: !lastName.isValid }">
            <label for="lastname">Lastname</label>
            <input type="text" id="lastname" v-model.trim="lastName.val" @blur="clearValidity('lastName')"/>
            <p v-if="!lastName.isValid">Lastname must not be empty.</p>
        </div>
        <div class="form-control" :class="{ invalid: !position.isValid }">
            <label for="position">Position</label>
            <input type="text" id="position" v-model.trim="position.val" @blur="clearValidity('position')"/>
            <p v-if="!position.isValid">Your position must be verified.</p>
        </div>
        <div class="form-control" :class="{ invalid: !yearsOfExperience.isValid }">
            <label for="yearsOfExperience">Years of Experience</label>
            <input type="text" id="yearsOfExperience" v-model.trim="yearsOfExperience.val" @blur="clearValidity('yearsOfExperience')"/>
            <p v-if="!yearsOfExperience.isValid">Enter your experience in years.</p>
        </div>
        <div class="form-control" :class="{ invalid: !hourlyRate.isValid }">
            <label for="hourlyRate">Hourly Rate</label>
            <input type="number" id="hourlyRate" v-model.number="hourlyRate.val" @blur="clearValidity('hourlyRate')"/>
            <p v-if="!hourlyRate.isValid">Rate must be greater than 0.</p>
        </div>
        <div class="form-control" :class="{ invalid: !description.isValid }">
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p v-if="!description.isValid">Description must not be empty.</p>
        </div>
        <!-- take keywords/tags maybe -->
        <div class="form-control" :class="{ invalid: !areas.isValid }">
            <h3>Aread of Expertise</h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="frontend">Frontend</label>
                <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="backend">Backend</label>
                <input type="checkbox" id="database" value="database" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="database">Database</label>
                <input type="checkbox" id="devops" value="devops" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="devops">Devops</label>
                <input type="checkbox" id="networking" value="networking" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="networking">Networking</label>
                <input type="checkbox" id="uiux" value="uiux" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="uiux">UI/UX</label>
                <input type="checkbox" id="cloud" value="cloud" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="cloud">Cloud</label>
                <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="career">Career Counselling</label>
            </div>
            <p v-if="!areas.isValid">Atleast one expertise must be selected.</p>
        </div>
        <div class="form-control" :class="{ invalid: !skills.isValid }">
            <label for="skills">Skills</label>
            <!-- <input type="text" id="skills" v-model.trim="skillItem" @blur="recordSkills" />  -->
            <input type="text" id="skills" v-model.trim="skillItem" @blur="clearValidity('skills')"/> 
            <button @click.prevent="recordSkills()" class="addBtn">Add Skills</button>
            <base-badge v-for="skill in skills.val" :key="skill" :title="skill"></base-badge>
            <p v-if="!skills.isValid">Atlease one relevant skill should be entered.</p>
        </div>
        <div class="form-control">
            <label for="social">Social accounts</label>
            <!-- <input type="text" id="social" v-model.trim="socialItem" @blur="recordSocial" />  -->
            <input type="text" id="social" v-model.trim="socialItem" title="Enter link for any social networks."/> 
            <button @click.prevent="recordSocial()" class="addBtn">Add Accounts</button>
            <base-badge v-for="soc in social" :key="soc" :title="soc"></base-badge>
        </div>
        <div class="form-control">
            <label for="portfolio">Portfolio</label>
            <!-- <input type="text" id="portfolio" v-model.trim="portfolioItem" @blur="recordPortfolio" />  -->
            <input type="text" id="portfolio" v-model.trim="portfolioItem" title="Enter link for any projects."/> 
            <button @click.prevent="recordPortfolio()" class="addBtn">Add Projects</button>
            <base-badge v-for="proj in portfolio" :key="proj" :title="proj"></base-badge>
        </div>
        <p v-if="!formIsValid">Please fix the above errors and submit again</p>
        <base-button>Register</base-button>
    </form>
</template>
<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            firstName: {
                val: '',
                isValid: true
            },
            lastName: {
                val: '',
                isValid: true
            },
            areas: {
                val: [],
                isValid: true
            },
            skills: {
                val: [],
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            position: {
                val: '',
                isValid: true
            },
            yearsOfExperience: {
                val: '',
                isValid: true
            },
            hourlyRate: {
                val: '',
                isValid: true
            },
            social: [],
            portfolio:[],
            skillItem: '',
            socialItem: '',
            portfolioItem: '',
            formIsValid: true
        };
    },
    methods: {
        clearValidity(input){
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            if (this.firstName.val === '') {
                this.firstName.isValid = false
                this.formIsValid = false;
            }
            if (this.lastName.val === '') {
                this.lastName.isValid = false
                this.formIsValid = false;
            }
            if (this.areas.val.length === 0) {
                this.areas.isValid = false
                this.formIsValid = false;
            }
            if (this.skills.val.length === 0) {
                this.skills.isValid = false
                this.formIsValid = false;
            }
            if (this.description.val === '') {
                this.description.isValid = false
                this.formIsValid = false;
            }
            if (this.position.val === '') {
                this.position.isValid = false
                this.formIsValid = false;
            }
            if (this.yearsOfExperience.val === '') {
                this.yearsOfExperience.isValid = false
                this.formIsValid = false;
            }
            if (!this.hourlyRate.val || this.hourlyRate.val < 0) {
                this.hourlyRate.isValid = false
                this.formIsValid = false;
            }
            //Have not validated Social and Portfolio
        },
        submitForm() {
            this.validateForm();
            if(!this.formIsValid){
                return;
            }
            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                areas: this.areas.val,
                skills: this.skills.val,
                description: this.description.val,
                position: this.position.val,
                yearsOfExperience: this.yearsOfExperience.val,
                hourlyRate: this.hourlyRate.val,
                social: this.social || '',
                portfolio: this.portfolio  || ''
            };
            console.log(formData);
            this.$emit('save-data', formData);
        },
        recordSkills() {
            const data = this.skillItem;
            this.skillItem = '';
            this.skills.val.push(data);
        },
        recordSocial() {
            const data = this.socialItem;
            this.socialItem = '';
            this.social.push(data);
        },
        recordPortfolio() {
            const data = this.portfolioItem;
            this.portfolioItem = '';
            this.portfolio.push(data);
        }

    },
}
</script>
<style scoped>
form {
    text-align: left;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type='checkbox']+label {
    font-weight: normal;
    display: inline;
    margin: 0 0.5rem 0 0;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}

.addBtn {
    color: #535ed1;
    padding: 0.5rem 0.5rem !important;
    margin-top: 5px !important;
}
</style>