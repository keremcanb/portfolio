/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

const greeting = {
  /* Your Summary And Greeting Section */
  username: '',
  title: 'Keremcan Büyüktaşkın',
  subTitle: 'Front-End Developer',
  resumeLink:
    'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing',
};

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/keremcanb',
  linkedin:
    'https://www.linkedin.com/in/keremcan-b%C3%BCy%C3%BCkta%C5%9Fk%C4%B1n-a90882158/',
  gmail: 'keremcan@gmail.com',
  // gitlab: 'https://gitlab.com/saadpasta',
  // facebook: 'https://www.facebook.com/saad.pasta7',
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: 'Skills',
  subTitle: '',
  skills: '',

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  fesoftwareSkills: [
    {
      skillName: 'HTML5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'SASS',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JAVASCRIPT',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'REACT',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'REACT NATIVE',
      fontAwesomeClassname: 'fab fa-react',
    },
  ],

  besoftwareSkills: [
    {
      skillName: 'NODE.JS',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'MONGODB',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'MYSQL',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'DOCKER',
      fontAwesomeClassname: 'fab fa-docker',
    },
    {
      skillName: 'REST API',
      fontAwesomeClassname: 'fa fa-server',
    },
  ],

  gsoftwareSkills: [
    {
      skillName: 'NPM',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'GIT',
      fontAwesomeClassname: 'fab fa-git',
    },
    {
      skillName: 'CLI',
      fontAwesomeClassname: 'fa fa-terminal',
    },
    {
      skillName: 'SEO',
      fontAwesomeClassname: 'fa fa-sitemap',
    },
    {
      skillName: 'WORDPRESS',
      fontAwesomeClassname: 'fab fa-wordpress',
    },
    {
      skillName: 'PHOTOSHOP',
      fontAwesomeClassname: 'fab fa-adobe',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Front-End Development', //Insert stack or technology you have experience in
      progressPercentage: '70%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Back-End Development',
      progressPercentage: '40%',
    },
    {
      Stack: 'UI/UX Design',
      progressPercentage: '30%',
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: 'Projects',
  subtitle: '',
  achivementsCards: [
    {
      title: 'Thailand Travel Guide Mobile App',
      subtitle: 'A basic Thailand travel app built with React Native Expo.',
      image: require('./assets/images/tgr-app.png'),
      thumbnail: require('./assets/images/tgr-app.png'),
      footerLink: [
        {
          name: 'Google Play',
          url:
            'https://play.google.com/store/apps/details?id=com.gezginrocker.tgr',
        },
        {
          name: 'Github',
          url: 'https://github.com/keremcanb/tgr-app',
        },
        // {
        //   name: 'Google Code-in Blog',
        //   url:
        //     'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        // },
      ],
    },
    {
      title: 'Thailand Travel Guide Back-End',
      subtitle:
        'Back-End & admin panel that I built with MERN stack for the Thailand Travel Guide Mobile App.',
      image: require('./assets/images/tgr-admin.png'),
      thumbnail: require('./assets/images/tgr-admin-tn.png'),
      footerLink: [
        {
          name: 'Github',
          url: 'https://github.com/keremcanb/tgr-admin',
        },
      ],
    },

    {
      title: 'Thailand Travel Guide Web Site',
      subtitle:
        'Most detailed Thailand travel guide in Turkish language. I developed the site with Wordpress, wrote all the content, did SEO.',
      image: require('./assets/images/tgr-web.png'),
      thumbnail: require('./assets/images/tgr-web-tn.png'),
      footerLink: [
        {
          name: 'Web',
          url: 'http://www.taylandgezi.com/',
        },
      ],
    },
  ],
};

const contactInfo = {
  title: 'Contact',
  subtitle: '',
  number: '',
  email_address: '',
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  achievementSection,
  contactInfo,
};
