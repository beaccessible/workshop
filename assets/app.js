let training = {
title: "Be Accessible",
heading: "We run workshops, teaching developers how to build applications that support the broadest circle of people",
headingEm: " - before a court makes them.",
introOne: "Accessibility laws are changing. Similar to how some store locations must have a ramp or a certain door width, your website, or online store, must follow particular design steps to support assistive technlogy. Courts are regularly determining that anti-discrimination laws apply to online settings and there may not be undue barriers to using a website or app. ",
introTwo: "Most of these online barriers are via flaws in frontend code – flaws that could have been prevented by developers understanding the core principles of accessibility and having the tools to evaluate and iterate on their own development.",
teaser: "We're excited to introduce this workshop helping developers and designers reach beyond compliance to deliver a joyful online experience. ",
descriptionOne: "This developer-centric crash course starts at a high level, covering the regulatory landscape and key conclusions from the explosion of web accessibility lawsuits. Participants will learn how to sustainably integrate accessibility in their development workflows and more broadly within their organization. Then most of the day is spent on the nuts and bolts - the code.",
descriptionTwo: "It is not a lecture. Technology people learn by doing. It's a day full of specially built activities designed to inform, challenge, and entertain - that is important. The participants test out screen readers and learn how assistive technology works. We quickly go from building basic forms to implementing complex, dynamic UI features. There's a deep dive on single page applications like React or Angular. ",
descriptionThree: "Each person builds fundamental skills in accessibility that any tech professional delivering web applications should know. The objective is that participants leave, knowing how to consider accessibility in their development and with confidence that they're building inclusive applications. ",
descriptionFour: "The workshop is interactive with live coding and hands-on exercises for participants, which means everyone gets to contribute their own unique perspective. At the end of the day, everyone applies what they've learned to their own work.",
modules: [
    {
        topic: "Introduction",
        time: '9:00'
    },
    {
        topic: "Accessibility Laws and Philosophy",
        time: '9:10',
        exercises: ["Key Cases - Winn Dixie to Whisper Lounge", "Building Blocks of An Accessibility Program"]
    },
    {
        topic: "Evaluate the Business Case for Accessibility",
        time: '9:40',
        exercises: [ "Test How Accessibility Affects SEO", "Loyal Disabled Consumers - iPhone, Xbox, and Instacart"] 
    },
    {
        topic: "DOM and Accessibility Tree",
        time: '9:55',
        exercises: 
          ["Managing Focus", "Focus Styling"]
    },
    {
        topic: "Assistive Technology",
        time: '10:15',
        exercises: ["Keyboard Navigation", "Screen Reader Use is a Puzzle"]
    },
    {
        topic: "Break - 15 mins",
        time: '10:45',
    },
    {
        topic: "Semantic HTML",
        time: '11:00',
        exercises: [ "Build A Button From Scratch",  "JavaScript and the Accessible Click"]
    },
    {
        topic: "HTML5",
        time: '11:40',
        exercises: ["Organize Contents of a Website", "Skip Links"]
    },
    {
        topic: "Lunch",
        time: '12:00',
    },
    {
        topic: "Beyond Native HTML - ARIA Attributes",
        time: '12:45',
        exercises: [ "Post Production ARIA Facelifts", "Handmade Bootstrap NavBar", "ARIA Kahoot!"]
    },
    {
        topic: "Progressive Enhancement",
        time: '1:55',
        exercises: ["Error Handling and Prevention", "Leverage Regular Expressions"]
    },
    {
        topic: "Dynamic UI Features",
        time: '2:15',
        exercises: ["Debate + Develop Modal Dialogs", "Drag and Drops"]
    },
    {
        topic: "Break - 15 mins",
        time: '2:50'
    },
    {
        topic: "Styling",
        time: '3:05',
        exercises:[ "Refactor CSS", "Test Color Contrast"]
    },
    {
        topic: "Accessible Animations",
        time: '3:25',
        exercises:
          ["Reduced Motion Query",  "D3.js Dynamic Stock Chart"]
    },
    {
        topic: "React, Angular, and Single Page Applications",
        time: '3:45',
        exercises: ["Frontend Routing"]
    },
    {
        topic: "Automated / Manual Testing",
        time: '4:05',
        exercises: ["Axe + Chrome Developer Tools", "Discover UI Patterns"]
    },
    {
        topic: "Beyond Code",
        time: '4:20',
        exercises: ["Captioning Tools", "Restaurant Menu PDF"]
    },
    {
        topic: "Self Reflection Sprint",
        time: '4:35',
        exercises: ["Audit + Repair Past Work"]
    },
    {
        topic: "Wrap-Up",
        time: '5:00'
    }],

booking: "Participants learn how to make common UI features more inclusive and gain exposure to the mechanics of assistive technology, reducing regulatory risk and technical debt. More importantly, tech professionals learn how to think about accessibility and design with empathy. At the end of the day, everyone is ready to apply that empathy in depth and the lessons extend beyond the development process.",
bookingTwo: "The audience may sometimes be developers or designers or a more non-technical audience - it varies. We tailor the training to the crowd, which is ideally between 10 - 25 individuals. This number ensures everyone gets significant one-on-one time and that we have enough volunteers to keep the class at a high energy.",
bookingThree: "Some of the activities are stretch goals and may not be fully completed at the end of the day. It can be arranged to move the self-critique portion to a second day so that participants can receive more one-on-one time. Regardless, attendees (and their organizations) will receive all of the code, slides, and content from the day, which serves a starter for future frontend work. The training may be recorded.",
bookingFour: "We're based in Los Angeles, but have computer and will travel. The price ranges depening on the sort or organization. We give significant discounts for non-profits and any organization that has a good cause.",
bookingFive: "For questions about pricing, feel free to email sales@beaccessible.com or start a conversation with me on Twitter."
}

$(document).ready(function() {
    let trainings = $('#trainings');
    training.modules.forEach( sec => {
        let moduleContainer = $('<li>').addClass('boxsection');
        let moduleBox = $('<div>').addClass('box');
        let moduleHeader = $('<div>').addClass('header');
        let topicBox = $('<div>').addClass('topicbox');
        topicBox.append($('<h3>').addClass('topic').text(sec.topic));
        let timeBox = $('<div>').addClass('timebox');
        timeBox.append($('<span>').addClass('time').text(sec.time));

       moduleHeader.append(topicBox)
       moduleHeader.append(timeBox)

     

        let exerciseBox = $('<div>')
        if(sec.exercises) {
            exerciseBox.addClass('exercises');
            exerciseBox.append($('<h4>').addClass('exercise-title').text("Exercises"));
            sec.exercises.forEach( exercise => {
                exerciseBox.append($('<li>').addClass('exercise').text(exercise))
            })
        }


        moduleBox.append(moduleHeader);
        moduleBox.append(exerciseBox);

        moduleContainer.append(moduleBox);
        trainings.append(moduleContainer);
        
    });

    console.log(training.title);

    let preface = $('#preface');

    preface.append($('<p>').addClass('text').text(training.introOne));
    preface.append($('<p>').addClass('text').text(training.introTwo));

    preface.append($('<h2>').addClass('title').text('End to End Accessibility Workshop'));

    preface.append($('<p>').addClass('text').text(training.descriptionOne));
    preface.append($('<p>').addClass('text').text(training.descriptionTwo));
    preface.append($('<p>').addClass('text').text(training.descriptionThree));
    preface.append($('<p>').addClass('text').text(training.descriptionFour));

    let epilogue = $('#epilogue')

    epilogue.append($('<p>').addClass('text').text(training.booking))
    epilogue.append($('<p>').addClass('text').text(training.bookingTwo))
    epilogue.append($('<p>').addClass('text').text(training.bookingThree))
    epilogue.append($('<p>').addClass('text').text(training.bookingFour))
    epilogue.append($('<p>').addClass('text').text(training.bookingFive))

})
