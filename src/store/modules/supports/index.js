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
                    firstName: 'Dax',
                    lastName: 'Dev Guru',
                    fullName: 'Dax Dev Guru',
                    areas: ['frontend', 'backend', 'database', 'devops', 'networking', 'ui/ux', 'cloud', 'career'],
                    skills: ['HTML', 'CSS', 'jQuery', 'Java', 'MySQL', 'Jenkins', 'Flutter', 'Trello'],
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
                    fullName: 'Noob Developer',
                    areas: ['frontend', 'backend'],
                    skills: ['HTML', 'CSS', 'jQuery', 'Java', 'Python', 'MySQL', 'MongoDB', 'Jenkins', 'Kotlin', 'Flutter', 'JIRA', 'Trello'],
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