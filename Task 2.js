var Resume = {
    "personalInfo": {
        "Name": "SRIDHAR K",
        "ContactNo": "+919360658134",
        "Email": "sridharsandhiya1971@gmail.com",
        "LinkedInProfile": "linkedin.com/in/sridhar-k-217001284"
    },

    "objective": "To obtain an entry-level position as a web developer in the IT industry where I can apply my knowledge of HTML, CSS, and JavaScript and contribute to the development of innovative web applications while pursuing my long-term goal of becoming a full-stack developer.",

    "education": {
        "higherEducation": "Kamaraj College of Engineering and Technology, B.E(EEE) CGPA:8.50 (upto 5th semester) 2020-2024.",
        "schoolEducation": "Kshatriya Vidyasala Higher Secondary School, Virudhunagar",
        "10th": "In 10th, I scored 67%",
        "12th": "In 12th, I scored 52%"
    },

    "skills": {
        "software": "HTML5, CSS, JavaScript, Java, Git, and Github",
        "technical": "Solar PV, Analog and Digital Electronics, Linear Integrated Circuit"
    },

    "certification": "I completed the TCS NQT - Cognitive in November 2023 with a score of 75%. Completed the NPTEL online course for Soft Skills with a 54% score. Completed the NPTEL online course in Environmental Science with a 53% score. Finished the (ChatGPT for Everyone) course on the Guvi platform. Successfully completed the (AI for India 2.0) course on the Guvi platform. I am currently pursuing a Full Stack Developer course on the Guvi platform.",

    "project": {
        "title": "A hybrid approach for microgrid protection system based on AI and Machine Learning",
        "description": "In this project, we have created a machine learning model to predict a time setting for the overcurrent relay in case of any fault in the buses of the transmission system. The current microgrid protection systems lack adaptability to dynamic operating conditions and encounter challenges in precisely detecting and mitigating faults"
    },

    "additionalInfo": {
        "languagesKnown": "Tamil, English, Kannada",
        "hobbies": "Listening to music, Gardening",
        "specialQualities": "I am a quick learner, team player who likes to explore new things and apply those things in real-time implementation"
    }
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// For loop

for (let section in Resume) {
    console.log(section + ":");

    if (typeof Resume[section] === "object") {
        for (let key in Resume[section]) {
            console.log(`  ${key}: ${JSON.stringify(Resume[section][key])}`);
        }
    } else {
        console.log(`  ${Resume[section]}`);
    }

    console.log("\n");
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// For in loop:

// for (let key in Resume) {
//     if (Resume.hasOwnProperty(key)) {
//         console.log(key + ": " + JSON.stringify(Resume[key]));
//     }
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// For of loop:

// for (let section in Resume) {
//     console.log(section + ":");

//     if (typeof Resume[section] === "object") {
//         for (let key in Resume[section]) {
//             console.log(`  ${key}: ${JSON.stringify(Resume[section][key])}`);
//         }
//     } else {
//         console.log(`  ${Resume[section]}`);
//     }
//     console.log("\n");
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for each loop:

// Object.entries(Resume).forEach(([section, data]) => {
//     console.log(section + ":");

//     if (typeof data === "object") {
//         Object.entries(data).forEach(([key, value]) => {
//             console.log(`  ${key}: ${JSON.stringify(value)}`);
//         });
//     } else {
//         console.log(`  ${data}`);
//     }

//     console.log("\n");
// });
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------