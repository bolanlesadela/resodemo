import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
// import analytics from "../assets/carousel/analytics.jpg";
// import dashboard from "../assets/carousel/dashboard.jpg";
// import complaints from "../assets/carousel/complaints.jpg";
// import exportt from "../assets/carousel/exportt.jpg";
// import notification from "../assets/carousel/notifications.jpg";
// import { BarChart3, Zap, Bell, FileText, Lock } from 'lucide-react';



export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Solution",
    url: "#carousel",
  },
  {
    id: "2",
    title: "How to use",
    url: "#tutorialvideo",
  },
  {
    id: "3",
    title: "Book A Demo",
    url: "#bookademo",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];


// export const featuresData = [
//   {
//     icon: <BarChart3 />,
//     title: "Live analytics that don’t lie",
//     description:
//       "Stop guessing. With real-time analytics, admins and staff can see patterns, track complaint volumes, and measure response times instantly. Data speaks louder than excuses — and ResoBridge ensures you always have the full picture.",
//     imageSrc: {analytics},
//     altText: 'Live analytics dashboard',
//     reversed: false,
//   },
//   {
//     icon: <Zap />,
//     title: "Lightning-fast complaint resolution",
//     description:
//       "Complaints shouldn’t take months to fix. With instant routing and automated assignments, issues reach the right person immediately. The result? Resolutions that are swift, transparent, and stress-free for everyone involved.",
//     imageSrc: {complaints},
//     altText: 'Fast complaint resolution',
//     reversed: true,
//   },
//   {
//     icon: <Bell />,
//     title: "Notifications that actually matter",
//     description:
//       "No more spam. Students, staff, and admins get alerts only when action is required or when progress is made. That means fewer interruptions, more focus, and communication that truly keeps everyone on the same page.",
//     imageSrc: {notification},
//     altText: 'Meaningful notifications',
//     reversed: false,
//   },
//   {
//     icon: <FileText />,
//     title: "Export-ready PDF/Excel reports",
//     description:
//       "Need to share updates with stakeholders? Generate professional PDF or Excel reports in seconds. Whether for board meetings, accreditation bodies, or departmental reviews, your data is always presentation-ready.",
//     imageSrc: {exportt},
//     altText: 'Export-ready reports',
//     reversed: true,
//   },
//   {
//     icon: <Lock />,
//     title: "Secure dashboards tailored by role",
//     description:
//       "ResoBridge adapts to your role. Students see their case updates, staff see assignments, and admins see the bigger picture — all within secure, role-specific dashboards. Privacy and clarity go hand in hand.",
//     imageSrc: {dashboard},
//     altText: 'Secure dashboards',
//     reversed: false,
//   },
// ];

export const benefits = [
  {
    id: "0",
    title: "Complaints vanish into filing cabinets",
    text: "Issues get buried in outdated, manual processes with no follow-up.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Staff waste hours chasing paper trails",
    text: "Time and energy are drained by repetitive, manual tracking instead of solving problems.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Admins operate blind with zero visibility",
    text: "Leadership lacks real-time insight, making it hard to spot trends or act quickly.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Students lose faith in the system",
    text: "Broken feedback loops create distrust, discouraging students from speaking up.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
