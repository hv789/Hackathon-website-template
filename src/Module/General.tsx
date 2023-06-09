import hackathonLogo from './Assets/hackathonLogo.png';
import logo from './Assets/logo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import devfolio from './Assets/sponsorsLogos/devfolio.png';
import polygon from './Assets/sponsorsLogos/polygon.png';
import solana from './Assets/sponsorsLogos/solana.png';
import filecoin from './Assets/sponsorsLogos/filecoin.png';
import replit from './Assets/sponsorsLogos/replit.png';
// import glimpse from './Assets/sponsorsLogos/glimpse.png';
// import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
// import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
// import Replit from './Assets/sponsorsLogos/replit.png';
// import sublime from './Assets/sponsorsLogos/sublime.png';
// import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join Code Relay 2.0',
  Typed_effect: ['72 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on 15th July 2023 with hundreds of students from across the nation for 72 hours of creation, innovation, & fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK: ''
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/webnd.iitbbs',
  discord: 'https://discord.gg/aFCW38EN',
  linkedin: 'https://www.linkedin.com/company/webd-iitbbs',
  twitter: 'https://twitter.com/HacksLimbo',
  github: 'https://github.com/webd-iitbbs',
  email: 'secyweb.sg@iitbbs.ac.in',
  mail: 'secyweb.sg@iitbbs.ac.in'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Code Relay 2.0?',
  LONG_DESCRIPTION:
    'Code Relay 2.0 is a 72 hours long annual coding hackathon conducted by the Web & Design society of IIT Bhubaneswar. It is a platform where aspiring coders and programmers come together to showcase their talent, learn from experts, and network with peers. The event promises to be bigger and better this year, with more exciting challenges and opportunities for participants to win prizes and recognition.',
  LOGO: logo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: false,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },
  JOIN_TEAM: {
    required: false,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: false,
    src: ''
  },
  Terms_of_use: {
    required: false,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 7,
  year: 2023
};

const schedule = [
  {
    day: '15-7-2023',
    events: [
      {
        title: 'Hacking Period Begins',
        timings: 'Starts at 00:00 AM',
        link: 'http://www.google.com/calendar/render?action=TEMPLATE&trp=false&sprop=&sprop=name:'
      }
    ]
  },
  {
    day: '16-7-2023',
    events: [
      {
        title: 'Doubts Clearing Session 01',
        timings: '12 AM - 1 Pm',
        link: 'http://www.google.com/calendar/render?action=TEMPLATE&trp=false&sprop=&sprop=name:'
      },
      {
        title: 'Doubts Clearing Session 02',
        timings: '12 AM - 1 Pm',
        link: 'http://www.google.com/calendar/render?action=TEMPLATE&trp=false&sprop=&sprop=name:'
      }
    ]
  },
  {
    day: '17-7-2023',
    events: [
      {
        title: 'Preliminary Evaluation',
        timings: '12 AM - 1 Pm',
        link: 'http://www.google.com/calendar/render?action=TEMPLATE&trp=false&sprop=&sprop=name:'
      }
    ]
  },
  {
    day: '18-7-2023',
    events: [
      {
        title: 'Hacking Period Ends',
        timings: 'Ends at 00:00 AM',
        link: 'http://www.google.com/calendar/render?action=TEMPLATE&trp=false&sprop=&sprop=name:'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      src: polygon,
      // <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content: [
        '⦿ $150 for the best hack built on Ethereum, OR ',
        '⦿ $200 for the best hack built on Ethereum+Polygon',
        '⦿ Eligibility to apply for internship/full-time roles and seed funding of up to 5,000 USD for winners!'
      ]
    },
    {
      // icon: <i className=" second fas fa-4x fa-medal"></i>,
      src: filecoin,
      type: 'overall Second',
      content: [
        '⦿ $250 for best use of IPFS and/or Filecoin',
        '⦿ Microgrants up to 5,000 USD, open grants up to 50,000 USD.'
      ]
    }
  ],
  [
    {
      // icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      src: replit,
      type: 'Third Second',
      content: [
        '⦿ $50 to winning project of the hackathon (must be deployed on Replit)',
        '⦿ Replit schwags to 5 eligible submissions deployed on Replit.',
        '⦿ Eligibility to apply for internship/full-time roles at Replit'
      ]
    },
    //Array 2
    {
      // icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      src: solana,
      type: 'Best Solo',
      content: [
        '⦿ $USDC 100 for the best project beginners just starting out on Solana and/or',
        '⦿ $USDC 250 for the best project that goes into depth, demonstrating higher-order code and/or',
        '⦿ $USDC 500 for the best advanced project that is almost ready for full-time development. Learn more here.'
      ]
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      name: 'Anurag Mani Tripathi',
      role: 'Secretary',
      github: '',
      linkedin: 'https://www.linkedin.com/in/anurag-mani-tripathi-71413b22a/',
      img: me
    },
    {
      name: 'Lalit Lalchand Mohanani',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      name: 'Harsha Vardhan',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      name: 'Anurag Mani Tripathi',
      role: 'Secretary',
      github: '',
      linkedin: 'https://www.linkedin.com/in/anurag-mani-tripathi-71413b22a/',
      img: me
    },
    {
      name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      name: 'Ryah Garcia',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: devfolio}, {src: polygon}, {src: solana}], //Array 1
  [{src: filecoin}, {src: replit}] //Array 2
  // [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  // [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is an event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'Code Relay 2.0 is open to all undergraduate, high school students and middle school students from across the country.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. Code Relay 2.0 will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content: 'You can form team with 1-4 members in it.'
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to register through Devfolio and join our Discord, we will guide you through everything there.'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (secyweb.sg@iitbbs.ac.in) We would be happy to help you.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will receiving Code Relay swag!.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
