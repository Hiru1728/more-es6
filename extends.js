class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name}thank you for your feedback.`);
    }
}



// syntactic sugar
class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'web team'

    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support secssion at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
    provideFeedback() {
        console.log(`${this.name}thank you for your feedback.`);
    }
}


// syntactic sugar
class Developer extends TeamMember {

    designation = 'Web Course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    startSupportSession(feature) {
        console.log(`Please develop the ${time}`);
    }
    createQuiz(version) {
        console.log(`please release the version ${module}`);
    }

}

// syntactic sugar
class JobPlacement extends TeamMember {

    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(feature) {
        console.log(`start the support secssion at ${feature}`);
    }
    prepareStudent(version) {
        console.log(`please create quiz for module ${version}`);
    }
}

const alia = new Developer('Alia', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();
const bipasha = new JobPlacement('bipasha', 'kolkata', 'India')
console.log(bipasha);