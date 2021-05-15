// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import nodejsIcon from "./images/node.js-logo.svg"
import dockerIcon from "./images/docker-logo.svg"
import kubernetesIcon from "./images/kubernetes-logo.svg"
import linkedinIcon from "./images/linkedin.svg"

// Project Images
import launchOnlineImage from "./images/launchonline.png"
import headbandsImage from "./images/headbands.png";
import flowerIdentifierImage from "./images/flower-identifier.png";
import profileImage from "./images/profile.jpeg";

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jon",
  headerTagline: [
    //Line 1 For Header
    "Fullstack Developer",
    //Line 2 For Header
    "Avid Coder",
    //Line 3 For Header
    "Tech Enthusiast",
  ],
  //   Header Paragraph
  headerParagraph:
    `I am a Victoria-based full-stack developer, with a passion for using modern technologies to solve interesting problems.`,

  //Contact Email
  contactEmail: "jonathan-langlois@live.ca",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Launchonline", //Project Title - Add Your Project Title Here
      para:
        `An online application portal to help businesses apply for grants to help move their products online. `,
      //Project Image - Add Your Project Image Here
      imageSrc: launchOnlineImage,
      //Project URL - Add Your Project Url Here
      url: "https://launchonline.ca/",
    },
    {
      title: "Headbands", //Project Title - Add Your Project Title Here
      para:
        `An online game, where players can stream video while guessing which famous character they have been passed.`,
      //Project Image - Add Your Project Image Here
      imageSrc: headbandsImage,
      //Project URL - Add Your Project Url Here
      url: "https://peaceful-beach-72908.herokuapp.com/",
    },
    {
      title: "Flower Identifier", //Project Title - Add Your Project Title Here
      para:
        `A machine-learning algorithm to guess a flower species from an uploaded image.`,
      //Project Image - Add Your Project Image Here
      imageSrc: flowerIdentifierImage,
      //Project URL - Add Your Project Url Here
      url: "https://flowers-predictor-api-heroku.herokuapp.com/",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    `
    I am a full-stack developer with a background in teaching. After graduating from Queen's University with 
    a degree in math, I worked for five years as a math tutor. During this time I pursued coding as a hobby,
    taking courses in machine learning with python and web development. 
    `,
  aboutParaTwo:
    `
      In 2020, I decided to switch careers and took a web-development bootcamp with Lighthouse Labs. The course
      was a fantastic opportunity to start learning modern full-stack development and jump start my career.
    `,
  aboutParaThree:
    `
      Since graduation, I have been working as a full-stack developer with Button-Inc. With Button,
      I have developed front-end portals, back-end API's, and deployed robust applications on modern cloud infrastructure
      including Microsoft Azure and Amazon Web Services.
    `,
  aboutImage: profileImage,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
       `
        I have 2 years experience creating websites with HTML5, including templating through libraries including ejs.
       `
    },
    {
      img: cssIcon,
      para:
        `I have 2 years experience writing CSS. I have experience with different styling libraries such as styled-components and 
        styled-jsx.`,
    },
    {
      img: reactIcon,
      para:
        `
          I have 2 years experience building single-page-applications in the React framework.
        `
    },
    {
      img: nodejsIcon,
      para:
        "I have 2 years experience building restful API's and backend infrastructure using Nodejs.",
    },
    {
      img: dockerIcon,
      para:
       `
        I have 1 years experience containerizing applications for deployment with docker, including
        running multi-container Docker applications with docker-compose. 
       `
    },
    {
      img: kubernetesIcon,
      para:
        `
          I have 1 years experience using Kubernetes to deploy containerized applications onto cloud providers,
          including AWS and Azure.
        `
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/jlangy" },
    {
      img: linkedinIcon,
      url: "https://linkedin.com/in/jon-langlois-00878ab8",
    }
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
