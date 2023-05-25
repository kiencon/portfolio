import AWS from "@/components/Technology/AWS";
import Algolia from "@/components/Technology/Algolia";
import AntDesign from "@/components/Technology/AntDesign";
import CouchDB from "@/components/Technology/CouchDB";
import Dotnet from "@/components/Technology/Dotnet";
import ExpressJS from "@/components/Technology/ExpressJS";
import Javascript from "@/components/Technology/Javascript";
import MySQL from "@/components/Technology/MySQL";
import Neo4J from "@/components/Technology/Neo4J";
import NextJS from "@/components/Technology/NextJS";
import Postgre from "@/components/Technology/Postgre";
import PouchDB from "@/components/Technology/PouchDB";
import ReactJS from "@/components/Technology/ReactJS";
import Redux from "@/components/Technology/Redux";
import ReduxSaga from "@/components/Technology/ReduxSaga";
import TypeScript from "@/components/Technology/TypeScript";
import Vue from "@/components/Technology/Vue";
import Vuetify from "@/components/Technology/Vuetify";

const PROJECTS = [
  {
    id: 2,
    name: "Phimhaytv.org",
    href: "https://www.phimhaytv.org",
    videoSource:
      "https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm",
    description:
      "The project's goal is to build a movie web application that offers users a fun and interactive experience of watching, searching, and commenting on movies. It also focuses on SEO and improving the lighthouse score for the best performance. It uses free and limited resources but ensures unlimited user satisfaction.",
    technologies: [
      () => <NextJS classes="" svgClasses="w-6 h-6" />,
      () => <AWS classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <MySQL classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <TypeScript classes="" svgClasses="w-6 h-6 bg-white rounded" />,
      () => <ExpressJS classes="" svgClasses="w-6 h-6" />,
      () => <Javascript classes="" svgClasses="w-6 h-6" />,
    ],
  },
  {
    id: 1,
    name: "Template.net",
    videoSource:
      "https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm",
    description: `Template.net provides a variety of templates, documents, and designs for different needs.
      In addition, it also offers an online tool to modify graphics and docs easily.`,
    technologies: [
      () => <NextJS key="nextJS" classes="" svgClasses="w-6 h-6" />,
      () => <ReactJS key="reactJS" classes="" svgClasses="w-6 h-6" />,
      () => <Redux key="redux" classes="" svgClasses="w-6 h-6" />,
      () => <ReduxSaga key="redux-saga" classes="" svgClasses="w-6 h-6" />,
      () => <AWS key="aws" classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <MySQL key="mysql" classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <Algolia key="algolia" classes="" svgClasses="w-6 h-6" />,
      () => (
        <TypeScript
          key="typescript"
          classes=""
          svgClasses="w-6 h-6 bg-white rounded"
        />
      ),
    ],
    href: "https://www.template.net",
  },
  {
    id: 3,
    name: "IOT Management Panel",
    href: "https://www.kaercher.com/",
    videoSource:
      "https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm",
    description:
      "IOT Management Panel is an internal project of Karcher Group assisting to manage all AWS resources.",
    technologies: [
      () => <ReactJS classes="" svgClasses="w-6 h-6" />,
      () => <Redux classes="" svgClasses="w-6 h-6" />,
      () => <ReduxSaga classes="" svgClasses="w-6 h-6" />,
      () => <AntDesign classes="" svgClasses="w-6 h-6" />,
      () => <AWS classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <Javascript classes="" svgClasses="w-6 h-6" />,
    ],
  },
  {
    id: 4,
    name: "Detergent Database",
    href: "https://www.kaercher.com/",
    videoSource:
      "https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm",
    description:
      "Detergent Database is a web application that handles detergents, formulas, raw-material, suppliers, producers, and products for the Karcher Group. They switched from the SAP platform to the web application when the business logic became more complex.",
    technologies: [
      () => <ReactJS classes="" svgClasses="w-6 h-6" />,
      () => <Redux classes="" svgClasses="w-6 h-6" />,
      () => <ReduxSaga classes="" svgClasses="w-6 h-6" />,
      () => <AntDesign classes="" svgClasses="w-6 h-6" />,
      () => <AWS classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <Javascript classes="" svgClasses="w-6 h-6" />,
    ],
  },
  {
    id: 5,
    name: "Lowell - PDU",
    href: "https://www.lowell.com/",
    videoSource:
      "https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm",
    description:
      "This system allows for personal data to be managed universally. It transfers data from old systems and alerts other services",
    technologies: [
      () => <TypeScript classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <Vue classes="" svgClasses="w-6 h-6" />,
      () => <Vuetify classes="" svgClasses="w-6 h-6" />,
      () => <Dotnet classes="" svgClasses="w-6 h-6" />,
      () => <Neo4J classes="" svgClasses="w-6 h-6" />,
      () => <Postgre classes="" svgClasses="w-6 h-6 bg-white" />,
    ],
  },
  {
    id: 6,
    name: "Saturn F1",
    href: "https://marketing.tiger.apollotyres.com",
    videoSource:
      "https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm",
    description:
      "Projects assist Cvzones (a vehicle maintenance center) with managing and caring for customers, vehicles, and drivers. They also collected and analyzed data on the tire market in India for their business.",
    technologies: [
      () => <TypeScript classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <Javascript classes="" svgClasses="w-6 h-6" />,
      () => <Postgre classes="" svgClasses="w-6 h-6 bg-white" />,
      () => <CouchDB classes="" svgClasses="w-6 h-6" />,
      () => <PouchDB classes="" svgClasses="w-6 h-6" />,
      () => <Vue classes="" svgClasses="w-6 h-6" />,
    ],
  },
];

const NUMBER_OF_PROJECTS = 3;

export const SPLIT_PROJECTS = PROJECTS.slice(0, NUMBER_OF_PROJECTS);

export default PROJECTS;
