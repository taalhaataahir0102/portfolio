/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Talha Tahir",
  title: "Hi all",
  subTitle: emoji(
    "I am a full-stack developer with expertise in JavaScript, React, Node.js, and various other modern frameworks. Additionally, I have a passion for and extensive experience in developing machine learning applications using frameworks such as Keras, PyTorch, TensorFlow, and others."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/taalhaataahir0102",
  linkedin: "https://www.linkedin.com/in/talha-tahir-46318420a/",
  gmail: "talhatahir01022001@gmail.com",
  medium: "https://medium.com/@talhatahir_77835",
  stackoverflow: "https://stackoverflow.com/users/18958168/talha-tahir",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I'm an adventurous full-stack developer who loves exploring new technologies. Here's what I specialize in:",
  skills: [
    emoji(
      "⚡ Crafting highly interactive front-end and user interfaces for both web and mobile applications"
    ),
    emoji("⚡ Designing and implementing scalable backend solutions using Node.js, Express, and other modern frameworks."),
    emoji(
      "⚡ Integrating third-party services such as Firebase, AWS, and Digital Ocean to enhance the functionality and scalability of your applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lahore University of Management Sciences",
      logo: require("./assets/images/Lums.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "September 2019 - May 2023",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "10xEngineers",
      companylogo: require("./assets/images/10x.jpeg"),
      date: "June 2023 – Present",
      desc: "For the past year at 10x Engineers, I've contributed to projects like the LLVM Playground website, where I gained experience with WebAssembly technology. Additionally, I've been working on optimizing machine learning models for specific hardware, expanding my skills in machine learning and hardware optimization.",
    },
    {
      role: "Software Developer Intern",
      company: "Volga Partners",
      companylogo: require("./assets/images/volga.jpeg"),
      date: "March 2023 – May 2023",
      desc: "During a remote internship at Volga Partners, I gained valuable experience as a software engineer. This opportunity provided me with insights into collaborative work environments and real-world web development practices. Working alongside seasoned professionals, I learned about industry-standard development processes and gained practical knowledge that complemented my academic background."
    },
    {
      role: "Research Assistant",
      company: "LUMS",
      companylogo: require("./assets/images/Lums.png"),
      date: "March 2022 – March 2023",
      desc: "During my final year of bachelor's, I served as a research assistant at my university's network security department. Under the supervision of experienced professionals, I focused on enhancing software security. This experience honed my skills in identifying vulnerabilities and implementing robust security measures to ensure the integrity and reliability of software systems."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME OF MY PERSONAL PROJECTS I DID DURING MY BACHELORS",
  projects: [
    {
      image: require("./assets/images/ecosaver.jpeg"),
      projectName: "Ecosaver",
      projectDesc: "The EcoSaver platform is where people who care about the environment can come together. Here, you can plan eco-friendly projects with others, get the latest news on the environment, and find tips to live a more sustainable life. It's a community for anyone who wants to make a difference for our planet.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/taalhaataahir0102/Ecosaver-frontend?tab=readme-ov-file"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/recipe.jpeg"),
      projectName: "Recipe Sharing  ",
      projectDesc: "Welcome to our recipe sharing website! Here, food lovers can share, discover, and save their favorite recipes. Easily share your own recipes, save favorites, and create shopping lists. Whether you're a seasoned chef or just getting started, find inspiration, connect with others, and explore the world of cooking!",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/taalhaataahir0102/RecipeSharing-frontend?tab=readme-ov-file"
        }
      ]
    },
    {
      image: require("./assets/images/eyeware.png"),
      projectName: "Eyeware",
      projectDesc: "Welcome to our local eyewear store's website! We use cool computer vision technology to help you find the perfect glasses. With our augmented reality features, you can try on glasses virtually before you buy them, right from the comfort of your home. Finding the perfect pair of glasses has never been easier!",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/taalhaataahir0102/Eyeware?tab=readme-ov-file"
        }
      ]
    },
    {
      image: require("./assets/images/debloat.png"),
      projectName: "Debloat Bench",
      projectDesc: "A collaborative effort between Stanford, LUMS and Arizona state university to create a universal benchmark for comparing different debloating analysis techniques of container debloaters. This initiative seeks to standardize and enhance the evaluation process, promoting more efficient and effective debloating methods.",
      footerLink: [
        {
          name: "Visit paper",
          url: "https://www.csl.sri.com/users/gehani/papers/SecDev-2023.Debloat.pdf"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3345461969",
  email_address: "talhatahir01022001@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
