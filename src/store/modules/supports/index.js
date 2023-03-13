import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

export default {
    namespaced: true,
    state() {
        return {
            lastFeth: null,
            supports: [
                {
                    id: 's1',
                    firstName: 'Max',
                    lastName: 'Dev Guru',
                    fullName: 'Max Dev Guru',
                    areas: ['frontend', 'backend', 'career', 'database', 'devops', 'networking', 'ui/ux', 'cloud'],
                    skills: [{
                        frontend: ['HTML, CSS, jQuery'],
                        backend: ['Java, Python'],
                        database: ['MySQL, MongoDB'],
                        devops:['Jenkins'],
                        mobile: ['Kotlin'],
                        crossPlatform: ['Flutter'],
                        tools: ['JIRA, Trello']
                    }],
                    position: 'Full Stack Developer',
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    yearsOfExperience: 5,
                    hourlyRate: 30,
                    social: [''],
                    portfolio: [{title: 'DemoApp', url:'www.demoapp.com', description:'This is just a MEVN stack demo app'}]
                },
                {
                    id: 's2',
                    firstName: 'Noob',
                    lastName: 'Developer',
                    areas: ['frontend', 'backend'],
                    position: 'Software Engineer',
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    yearsOfExperience: 3,
                    hourlyRate: 20,
                    social: [''],
                    portfolio: [{title: 'DemoWebsite', url:'www.demoapp.com', description:'This is just a MEVN stack demo app'}]
                }
            ]
        }
    },
    mutations, 
    actions, 
    getters
}