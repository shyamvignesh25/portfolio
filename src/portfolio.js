/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shyam Vignesh Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shyam Vignesh Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Shyam Vignesh",
  logo_name: "Shyam Vignesh",
  // nickname: "layman_brother",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1XxzckCtPpHWqj8bhgz3iyBFv8Caxomk5/view?usp=drive_link",
  // portfolio_repository: "https://github.com/com/masterPortfolio",
  githubProfile: "https://github.com/shyamvignesh25",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/shyamvignesh25",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shyamvignesh",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@syntaxcoder21",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:shyamvignesh5@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    // {
    //   title: "Mobile App Developer",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable and responsive cross-platform mobile applications using Flutter & Dart",
    //     "⚡ Experience in integrating REST APIs, Firebase, and third-party libraries for seamless app functionality",
    //     "⚡ Expertise in state management (Provider, Riverpod, Bloc) and optimizing app performance",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building cross-platform mobile applications using Flutter",
        "⚡ Creating robust backend APIs using Node.js and Express.js",
        "⚡ Developing native Android applications using Kotlin",
      ],

      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        // "⚡ Experience working on multiple cloud platforms",
        "⚡ Firebase Integration: Proficient in integrating Firebase for Firestore,real-time database management, authentication, and cloud functions.",
        "⚡ MongoDB: Experience working with MongoDB for scalable and efficient data storage and management.",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SACS MAVMM Engineering College",
      subtitle: "B.E in Computer and Engineering",
      // logo_path: "iiitk_logo.png",
      // alt_name: "IIITDM Kurnool",
      duration: " 2019 – 2023",
      descriptions: [
        "⚡ Gained expertise in core Computer Science subjects like Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Artificial Intelligence.",
        "⚡ Worked on real-world projects involving Web Development, Mobile App Development, and Cloud Computing, enhancing practical coding skills.",
      ],
      website_link: "https://sacsmec.in/web/",
    },
    {
      title: "Don Bosco Higher Secondary School",
      subtitle: "Higher Secondary Certificate ",
      // logo_path: "iiitk_logo.png",
      // alt_name: "IIITDM Kurnool",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ Studied core subjects including Mathematics, Physics, Chemistry, and Computer Science, building a strong foundation for engineering studies.",
        "⚡ Developed problem-solving and analytical skills through programming in C/C++ and logical reasoning exercises.",
      ],
      // website_link: "https://sacsmec.in/web/",
    },
    {
      title: "Don Bosco Higher Secondary School",
      subtitle: "Secondary School Leaving Certificate ",
      // logo_path: "iiitk_logo.png",
      // alt_name: "IIITDM Kurnool",
      duration: "2016 - 2017",
      descriptions: [
        "⚡ Completed foundational education with a strong emphasis on Mathematics, Science, and English.",
        "⚡ Built problem-solving and logical reasoning skills, laying the groundwork for higher education in Computer Science.",
        "⚡ Actively participated in academic and extracurricular activities, fostering teamwork and leadership qualities.",
      ],
      // website_link: "https://sacsmec.in/web/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship ",
  description:
    "Experienced Flutter Developer with a strong background in building and deploying mobile applications using Flutter and Firebase. Skilled in developing applications for various domains, including location tracking, sales management, and booking systems. Proficient in REST APIs, website hosting, and Play Store deployment. Collaborative team player with hands-on experience in Android app development and software maintenance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Flutter Developer",
          company: "Pro Global Solutions",
          company_url: "https://www.proglobalsolutions.in/",
          logo_path: "tiktok_logo.png",
          duration: "December 2023 - Present",
          location: "Madurai, India",
          description:
            "Developed and contributed to multiple mobile applications using Flutter for front-end and Firebase for back-end integration. Built applications including Live Location Tracking, Jewellers Scheme App, and Sales Management App. Successfully deployed applications on the Play Store, ensuring seamless accessibility. Experienced in website hosting and API integrations.",
          color: "#000000",
        },
        {
          title: "Flutter Developer",
          company: "Graspear Solutions Pvt. Ltd.",
          company_url: "https://graspear.com/",
          logo_path: "tiktok_logo.png",
          duration: "August 2023 - November 2023",
          location: "Madurai, India",
          description:
            "Developed and contributed to a mobile application project using Flutter. Collaborated with cross-functional teams to design, implement, and maintain software solutions. Gained experience in mobile application deployment, testing, and API integration.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Flutter Developer Intern",
          company: "Graspear Solutions Pvt. Ltd.",
          company_url: "https://graspear.com/",
          logo_path: "tiktok_logo.png",
          duration: "April, 2023 - July 2023",
          location: "Madurai, India",
          description:
            "Gained hands-on experience in Flutter app development, working on real-world projects. Assisted in designing UI/UX, implementing functionalities, and integrating APIs. Collaborated with senior developers to enhance app performance and deployment strategies.",
          color: "#000000",
        },
        {
          title: "Android Intern",
          company: "Dot Com Infoway",
          company_url: "https://www.dotcominfoway.com/#gref",
          logo_path: "Dci-logo.png",
          duration: "June 2022 - July 2022",
          location: "Madurai, India",
          description:
            "Worked on mobile applications, assisting in • Developed login, register, OTP login, and password recovery modules, and Integrated Firebase for database connectivity and data retrieval.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     // {
    //     //   title: "Google Explore ML Facilitator",
    //     //   company: "Google",
    //     //   company_url: "https://about.google/",
    //     //   logo_path: "google_logo.png",
    //     //   duration: "June 2019 - April 2020",
    //     //   location: "Hyderabad, Telangana",
    //     //   description:
    //     //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //     //   color: "#4285F4",
    //     // },
    //     // {
    //     //   title: "Microsoft Student Partner",
    //     //   company: "Microsoft",
    //     //   company_url: "https://www.microsoft.com/",
    //     //   logo_path: "microsoft_logo.png",
    //     //   duration: "Aug 2019 - May 2020",
    //     //   location: "Hyderabad, Telangana",
    //     //   description:
    //     //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //     //   color: "#D83B01",
    //     // },
    //     // {
    //     //   title: "Mozilla Campus Captain",
    //     //   company: "Mozilla",
    //     //   company_url: "https://www.mozilla.org/",
    //     //   logo_path: "mozilla_logo.png",
    //     //   duration: "Oct 2019 - May 2020",
    //     //   location: "Kurnool, Andhra Pradesh",
    //     //   description:
    //     //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //     //   color: "#000000",
    //     // },
    //     // {
    //     //   title: "Developer Students Club Member",
    //     //   company: "DSC IIITDM Kurnool",
    //     //   company_url:
    //     //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //     //   logo_path: "dsc_logo.png",
    //     //   duration: "Jan 2018 - May 2020",
    //     //   location: "Kurnool, Andhra Pradesh",
    //     //   description:
    //     //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //     //   color: "#0C9D58",
    //     // },
    //     // {
    //     //   title: "Developer Program Member",
    //     //   company: "Github",
    //     //   company_url: "https://github.com/",
    //     //   logo_path: "github_logo.png",
    //     //   duration: "July 2019 - PRESENT",
    //     //   location: "Work From Home",
    //     //   description:
    //     //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //     //   color: "#181717",
    //     // },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology tools. My best experience is creating Flutter applications, building web applications using React.js, and deploying them on various hosting platforms for seamless performance and user experience.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every WhatsApp. You can message me, I will reply within 24 hours. I can help you with Flutter and React Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },

  addressSection: {
    title: "Address",
    subtitle: "Y.othakadai, Madurai, Tamil Nadu, India - 625107",
    locality: "Madurai",
    country: "India",
    region: "Tamil Nadu",
    postalCode: "625107",
    streetAddress: "Madurai",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17"
  },

  phoneSection: {
    title: "Contact",
    subtitle: "(+91) 9944546451",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  // publications,
  contactPageData,
};
