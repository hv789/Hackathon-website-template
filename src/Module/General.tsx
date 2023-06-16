import logo from './Assets/logo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

// import boy from './Assets/boy.png';
import devfolio from './Assets/sponsorsLogos/devfolio.png';
import polygon from './Assets/sponsorsLogos/polygon.png';
import solana from './Assets/sponsorsLogos/solana.png';
import filecoin from './Assets/sponsorsLogos/filecoin.png';
import replit from './Assets/sponsorsLogos/replit.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import anurag from './Assets/teami/anurag.png';
import ayush from './Assets/teami/ayush.png';
import lalit from './Assets/teami/lalit.png';
import mohan from './Assets/teami/mohan.png';
import harsha from './Assets/teami/harsha.png';

const TOP_SECTION = {
  TITLE: 'Join Code Relay 2.0',
  Typed_effect: ['72 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on 15th July 2023 with hundreds of students from across the nation for 72 hours of creation, innovation, & fun.',
  DISCORD_LINK: 'https://discord.gg/Ct9CN3ae',
  HACKERS_REGISTRATION_FORM_LINK: 'https://code-relay.devfolio.co/'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/webnd.iitbbs',
  discord: 'https://discord.gg/Ct9CN3ae',
  linkedin: 'https://www.linkedin.com/company/webd-iitbbs',
  github: 'https://github.com/webd-iitbbs',
  email: 'mailto:secyweb.sg@iitbbs.ac.in',
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
        timings: 'Starts at 00:00 IST',
        link: 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230715%2F20230716&details=The%20hacking%20period%20starts%20at%2000%3A00%20IST%20on%2015th%20July%20and%20continues%20for%2072%20hrs.&location=Online&text=Hacking%20Period%20Starts'
      }
    ]
  },
  {
    day: '16-7-2023',
    events: [
      {
        title: 'Hacking phase',
        timings: 'All day',
        link: 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230716%2F20230718&details=Hacking%20Phase&location=Online&text=Hacking%20Phase'
      }
    ]
  },
  {
    day: '17-7-2023',
    events: [
      {
        title: 'Hacking phase',
        timings: 'All day',
        link: 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230717%2F20230719&details=Hacking%20Phase&location=Online&text=Hacking%20Phase'
      }
    ]
  },
  {
    day: '18-7-2023',
    events: [
      {
        title: 'Hacking Period Ends',
        timings: 'Ends at 00:00 IST',
        link: 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230718%2F20230719&details=The%20hacking%20period%20ends%20at%2000%3A00%20IST%20on%2018th%20July.&location=Online&text=Hacking%20Period%20Ends'
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
      // link: 'https://github.com/filecoin-project/devgrants/blob/master/README.md',
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
        '⦿ $USDC 500 for the best advanced project that is almost ready for full-time development.'
      ]
      // link: 'https://replit.com/@devfolio/Solana-Starter?v=1#README.md',
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
      github: 'https://github.com/garunAMT',
      linkedin: 'https://www.linkedin.com/in/anurag-mani-tripathi-71413b22a',
      instagram:
        'https://instagram.com/anurag._tripathi?igshid=MzNlNGNkZWQ4Mg==',
      img: anurag
    },
    {
      name: 'Ayush Tiwari',
      role: 'Governor',
      github: 'https://github.com/ayushtiwari110',
      linkedin: 'https://www.linkedin.com/in/tiwari-ayush',
      instagram:
        'https://instagram.com/ayush_tiwari.2021?igshid=ZGUzMzM3NWJiOQ==',
      img: ayush
    },
    {
      name: 'Kattamuri Mohan krishna',
      role: 'Governor',
      github: 'https://github.com/Kattamurimohan1201',
      linkedin: 'https://www.linkedin.com/in/kattamuri-mohankrishna-62a3b3239',
      instagram:
        'https://instagram.com/kattamuri_mohan_1201?igshid=MzRlODBiNWFlZA==',
      img: mohan
    }
  ],
  [
    //Array 2
    {
      name: 'Lalit Mohanani',
      role: 'Governor',
      github: 'https://github.com/lalit-mohanani',
      linkedin: 'https://www.linkedin.com/in/lalit-mohanani/',
      instagram: 'https://www.instagram.com/lalit._.mohanani/',
      img: lalit
    },
    {
      name: 'Harsha Vardhan',
      role: 'Web Developer',
      github: 'https://github.com/hv789',
      linkedin: 'https://www.linkedin.com/in/hv8/',
      instagram: 'https://www.instagram.com/harsha_vardhan.04/',
      img: harsha
    }
  ]
];

// const JudgesInfo = [
//   [
//     //Array 1
//     {
//       name: 'Anurag Mani Tripathi',
//       role: 'Secretary',
//       github: '',
//       linkedin: 'https://www.linkedin.com/in/anurag-mani-tripathi-71413b22a/',
//       img: me
//     },
//     {
//       name: 'Moon',
//       role: 'Organizer',
//       github: '',
//       linkedin: '',
//       img: moon
//     },
//     {
//       name: 'Ryah Garcia',
//       role: 'Organizer',
//       github: '',
//       linkedin: '',
//       img: Ryah
//     }
//   ],
//   [
//     //Array 2
//     {
//       name: 'Lyanola',
//       role: 'Organizer',
//       github: '',
//       linkedin: '',
//       img: lyin
//     },
//     {
//       name: 'Zoheb',
//       role: 'Organizer',
//       github: '',
//       linkedin: '',
//       img: zoha
//     }
//   ]
// ];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: devfolio}, {src: polygon}], //Array 1
  [{src: solana}, {src: filecoin}, {src: replit}] //Array 2
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
        label: 'How team formation works?',
        content: 'You can form team with 1-4 members in it.'
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
  // JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
