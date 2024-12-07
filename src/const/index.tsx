import AWSIcon from '@/Components/SVGJSXElement/AWSIcon';
import AlgoliaIcon from '@/Components/SVGJSXElement/AlgoliaIcon';
import CouchDBIcon from '@/Components/SVGJSXElement/CouchDBIcon';
import ExpressJSIcon from '@/Components/SVGJSXElement/ExprexssJSIcon';
import GraduationIcon from '@/Components/SVGJSXElement/GraduationIcon';
import JavascriptIcon from '@/Components/SVGJSXElement/JavascriptIcon';
import MySQLIcon from '@/Components/SVGJSXElement/MySQLIcon';
import NextJSIcon from '@/Components/SVGJSXElement/NextJSIcon';
import NodeJSIcon from '@/Components/SVGJSXElement/NodeJSIcon';
import PostgreIcon from '@/Components/SVGJSXElement/PostgreIcon';
import PouchDBIcon from '@/Components/SVGJSXElement/PouchDBIcon';
import ReactIcon from '@/Components/SVGJSXElement/ReactIcon';
import ReduxIcon from '@/Components/SVGJSXElement/ReduxIcon';
import ReduxSagaIcon from '@/Components/SVGJSXElement/ReduxSagaIcon';
import SearchingIcon from '@/Components/SVGJSXElement/SearchingIcon';
import TailWindIcon from '@/Components/SVGJSXElement/TailwindIcon';
import TypeScriptIcon from '@/Components/SVGJSXElement/TypeScriptIcon';
import WorkingIcon from '@/Components/SVGJSXElement/WorkingIcon';
import AWS from '@/Components/Technology/AWS';
import Algolia from '@/Components/Technology/Algolia';
import AntDesign from '@/Components/Technology/AntDesign';
import CouchDB from '@/Components/Technology/CouchDB';
import Dotnet from '@/Components/Technology/Dotnet';
import Javascript from '@/Components/Technology/Javascript';
import MySQL from '@/Components/Technology/MySQL';
import Neo4J from '@/Components/Technology/Neo4J';
import NextJS from '@/Components/Technology/NextJS';
import Postgre from '@/Components/Technology/Postgre';
import PouchDB from '@/Components/Technology/PouchDB';
import ReactJS from '@/Components/Technology/ReactJS';
import Redux from '@/Components/Technology/Redux';
import ReduxSaga from '@/Components/Technology/ReduxSaga';
import TypeScript from '@/Components/Technology/TypeScript';
import Vue from '@/Components/Technology/Vue';
import Vuetify from '@/Components/Technology/Vuetify';

export const PROJECTS = [
  {
    id: 0,
    name: 'ESL',
    videoSource: '',
    description: `ESL is a single-page application that helps to study 3000 essential vocabulary and more than 2000 B2, and C1 vocabularies (based on the Oxford Dictionary).`,
    technologies: [
      () => <ReactJS key='reactJS' classes='' svgClasses='w-6 h-6' />,
      () => <Redux key='redux' classes='' svgClasses='w-6 h-6' />,
      () => <MySQL key='mysql' classes='' svgClasses='w-6 h-6 bg-white' />,
      () => (
        <TypeScript
          key='typescript'
          classes=''
          svgClasses='w-6 h-6 bg-white rounded'
        />
      ),
    ],
    href: 'https://esl.vsondev.com',
  },
  {
    id: 1,
    name: 'Template.net',
    videoSource:
      'https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm',
    description: `Template.net provides a variety of templates, documents, and designs for different needs.
      In addition, it also offers an online tool to modify graphics and docs easily.`,
    technologies: [
      () => <NextJS key='nextJS' classes='' svgClasses='w-6 h-6' />,
      () => <ReactJS key='reactJS' classes='' svgClasses='w-6 h-6' />,
      () => <Redux key='redux' classes='' svgClasses='w-6 h-6' />,
      () => <ReduxSaga key='redux-saga' classes='' svgClasses='w-6 h-6' />,
      () => <AWS key='aws' classes='' svgClasses='w-6 h-6 bg-white' />,
      () => <MySQL key='mysql' classes='' svgClasses='w-6 h-6 bg-white' />,
      () => <Algolia key='algolia' classes='' svgClasses='w-6 h-6' />,
      () => (
        <TypeScript
          key='typescript'
          classes=''
          svgClasses='w-6 h-6 bg-white rounded'
        />
      ),
    ],
    href: 'https://www.template.net',
  },
  {
    id: 3,
    name: 'IOT Management Panel',
    href: 'https://www.kaercher.com/',
    videoSource:
      'https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm',
    description:
      'IOT Management Panel is an internal project of Karcher Group assisting to manage all AWS resources.',
    technologies: [
      () => <ReactJS classes='' svgClasses='w-6 h-6' />,
      () => <Redux classes='' svgClasses='w-6 h-6' />,
      () => <ReduxSaga classes='' svgClasses='w-6 h-6' />,
      () => <AntDesign classes='' svgClasses='w-6 h-6' />,
      () => <AWS classes='' svgClasses='w-6 h-6 bg-white' />,
      () => <Javascript classes='' svgClasses='w-6 h-6' />,
    ],
  },
  {
    id: 4,
    name: 'Detergent Database',
    href: 'https://www.kaercher.com/',
    videoSource:
      'https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm',
    description:
      'Detergent Database is a web application that handles detergents, formulas, raw-material, suppliers, producers, and products for the Karcher Group. They switched from the SAP platform to the web application when the business logic became more complex.',
    technologies: [
      () => <ReactJS classes='' svgClasses='w-6 h-6' />,
      () => <Redux classes='' svgClasses='w-6 h-6' />,
      () => <ReduxSaga classes='' svgClasses='w-6 h-6' />,
      () => <AntDesign classes='' svgClasses='w-6 h-6' />,
      () => <AWS classes='' svgClasses='w-6 h-6 bg-white' />,
      () => <Javascript classes='' svgClasses='w-6 h-6' />,
    ],
  },
  {
    id: 5,
    name: 'Lowell - PDU',
    href: 'https://www.lowell.com/',
    videoSource:
      'https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm',
    description:
      'This system allows for personal data to be managed universally. It transfers data from old systems and alerts other services',
    technologies: [
      () => <TypeScript classes='' svgClasses='w-6 h-6 bg-white' />,
      () => <Vue classes='' svgClasses='w-6 h-6' />,
      () => <Vuetify classes='' svgClasses='w-6 h-6' />,
      () => <Dotnet classes='' svgClasses='w-6 h-6' />,
      () => <Neo4J classes='' svgClasses='w-6 h-6' />,
      () => <Postgre classes='' svgClasses='w-6 h-6 bg-white' />,
    ],
  },
  {
    id: 6,
    name: 'Saturn F1',
    href: 'https://marketing.tiger.apollotyres.com',
    videoSource:
      'https://res.cloudinary.com/dks1prxi5/video/upload/v1676348436/cinecity_cpog2b.webm',
    description:
      'Projects assist Cvzones (a vehicle maintenance center) with managing and caring for customers, vehicles, and drivers. They also collected and analyzed data on the tire market in India for their business.',
    technologies: [
      () => <TypeScript classes='' svgClasses='w-6 h-6 bg-white' />,
      () => <Javascript classes='' svgClasses='w-6 h-6' />,
      () => <Postgre classes='' svgClasses='w-6 h-6 bg-white' />,
      () => <CouchDB classes='' svgClasses='w-6 h-6' />,
      () => <PouchDB classes='' svgClasses='w-6 h-6' />,
      () => <Vue classes='' svgClasses='w-6 h-6' />,
    ],
  },
];

const NUMBER_OF_PROJECTS = 3;

export const SPLIT_PROJECTS = PROJECTS.slice(0, NUMBER_OF_PROJECTS);

export const FAVORITE_TECHS = [
  {
    name: 'TypeScript',
    SVGJSXElement: () => <TypeScriptIcon classes='w-12 h-12' />,
  },
  {
    name: 'Javascript',
    SVGJSXElement: () => <JavascriptIcon classes='w-12 h-12' />,
  },
  {
    name: 'NextJS',
    SVGJSXElement: () => <NextJSIcon classes='w-12 h-12' />,
  },
  {
    name: 'React',
    SVGJSXElement: () => <ReactIcon classes='w-12 h-12' />,
  },
  {
    name: 'Redux',
    SVGJSXElement: () => <ReduxIcon classes='w-12 h-12' />,
  },
  {
    name: 'Redux Saga',
    SVGJSXElement: () => <ReduxSagaIcon classes='w-12 h-12' />,
  },
  {
    name: 'Tailwind',
    SVGJSXElement: () => <TailWindIcon classes='w-12 h-12' />,
  },
  {
    name: 'AWS',
    SVGJSXElement: () => <AWSIcon classes='w-12 h-12 bg-white rounded' />,
  },
  {
    name: 'NodeJS',
    SVGJSXElement: () => <NodeJSIcon classes='w-12 h-12' />,
  },
  {
    name: 'ExpressJS',
    SVGJSXElement: () => <ExpressJSIcon classes='w-12 h-12' />,
  },
  {
    name: 'MySQL',
    SVGJSXElement: () => <MySQLIcon classes='w-12 h-12 bg-white rounded' />,
  },
  {
    name: 'Postgre',
    SVGJSXElement: () => <PostgreIcon classes='w-12 h-12 bg-white rounded' />,
  },
  {
    name: 'CouchDB',
    SVGJSXElement: () => <CouchDBIcon classes='w-12 h-12' />,
  },
  {
    name: 'PouchDB',
    SVGJSXElement: () => <PouchDBIcon classes='w-12 h-12' />,
  },
  {
    name: 'Algolia',
    SVGJSXElement: () => <AlgoliaIcon classes='w-12 h-12' />,
  },
];

export const MY_JOURNEY = [
  {
    id: 1,
    title: 'Studying at Algonquin College Ottawa Canda',
    description:
      'I am studying at Algonquin College Ottawa to gain academic Canadian experience but I am still open to a full-time job.',
    JSXElementIcon: () => (
      <SearchingIcon classes='w-4 h-4 absolute top-1 -left-2 animate-ping' />
    ),
  },
  {
    id: 2,
    title: 'Worked at Template.net',
    description:
      'A friend of mine recommended Template.net, a company that offers exciting products similar to Canva but has grown too fast and has limited resources. The developers were overwhelmed and the code quality was poor. They also spent a lot on AWS. As a senior developer, I not only did my tasks but also tried to simplify and reorganize the complex structures of both the front-end and back-end. I reduced the AWS cost, made the code more readable, extendable, and maintainable, and fixed security bugs. My previous work at Zoi was very useful because they used the same technologies. I also took on other roles such as Scrum Master, Business Analysis, and Quality Control when needed. My main responsibility was to lead the team to achieve the goal. I also assisted the HR department in interviewing developer candidates.',
    JSXElementIcon: () => (
      <WorkingIcon classes='w-4 h-4 absolute top-1 -left-2' />
    ),
    date: 'Mar 2021 - Mar 2023',
  },
  {
    id: 3,
    title: 'Worked at Orient Company',
    description:
      'After leaving Nashtech in search of new challenges and learning new technologies, I joined Orient Company as a software developer. I worked offshore with the ZOI team based in Germany to create web applications for the Kaercher Group. This was a great opportunity to get familiar with AWS Services, especially Serverless Services such as Lambda, S3, SNS, SQS, Cognito, DynamoDB, and Cloudfront. I also supported other front-end developers and learned React, Redux, and Redux Saga in my spare time. It was a very helpful experience.',
    JSXElementIcon: () => (
      <WorkingIcon classes='w-4 h-4 absolute top-1 -left-2' />
    ),
    date: 'Feb 2020 - Mar 2021',
  },
  {
    id: 4,
    title: 'Worked at Nashtech Company',
    description:
      "I worked on two projects at Nashtech company. The first one was Saturn F1, an outsourcing project for Apollo Group to gather data on the tire market in India. Despite being a fresher, I played a key role in a small team. I solved performance issues and handled many challenging tasks with complex computations to generate monthly Excel reports. I reduced the search time from 2 minutes to 2.5 seconds, which was amazing :-) After that, my project manager nominated me to join the company's largest project, Lowell from Germany group, with more than 300 developers. For the second project, I worked on the backend with dotnet core technology. I proposed using design patterns to make the code more extensible and maintainable, and to save time when changes occur.",
    JSXElementIcon: () => (
      <WorkingIcon classes='w-4 h-4 absolute top-1 -left-2' />
    ),
    date: 'Aug 2018 - Jan 2020',
  },
  {
    id: 5,
    title: 'Graduated from University of Science HCM',
    description:
      'I decided to pursue my high school dream by enrolled in college again.',
    JSXElementIcon: () => (
      <GraduationIcon classes='w-4 h-4 absolute top-1 -left-2' />
    ),
    date: 'Sep 2015 - Sep 2019',
  },
  {
    id: 6,
    title: 'Working as construction engineer',
    description: 'I worked as a construction engineer for two years.',
    JSXElementIcon: () => (
      <WorkingIcon classes='w-4 h-4 absolute top-1 -left-2' />
    ),
    date: '2013 - 2015',
  },
  {
    id: 7,
    title: 'Graduated from University of Architecture HCM',
    description:
      'The University of Architecture specializes in educating students in the construction and design fields in Vietnam.',
    date: '2008 - 2013',
    JSXElementIcon: () => (
      <GraduationIcon classes='w-4 h-4 absolute top-1 -left-2' />
    ),
  },
];
