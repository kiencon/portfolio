import GraduationIcon from "@/components/SVGJSXElement/GraduationIcon";
import SearchingIcon from "@/components/SVGJSXElement/SearchingIcon";
import WorkingIcon from "@/components/SVGJSXElement/WorkingIcon";

const MY_JOURNEY = [
  {
    id: 1,
    title: "Immigrate to Canada and looking for the first opportunity",
    description:
      "I recently immigrated to Canada and I am seeking my first job here. I would appreciate any referrals. I am working on improving my English and developing my personal project, which is a web application that allows users to watch movies. I created it for studying SEO, and even though it is just a learning project, some keywords rank in the top 1 to top 3 on Google search. Moreover, I am reviewing the knowledge of AWS to have an exam for getting AWS Certificates.",
    JSXElementIcon: () => (
      <SearchingIcon classes="w-4 h-4 absolute top-1 -left-2 animate-ping" />
    ),
  },
  {
    id: 2,
    title: "Worked at Template.net",
    description:
      "A friend of mine recommended Template.net, a company that offers exciting products similar to Canva but has grown too fast and has limited resources. The developers were overwhelmed and the code quality was poor. They also spent a lot on AWS. As a senior developer, I not only did my tasks but also tried to simplify and reorganize the complex structures of both the front-end and back-end. I reduced the AWS cost, made the code more readable, extendable, and maintainable, and fixed security bugs. My previous work at Zoi was very useful because they used the same technologies. I also took on other roles such as Scrum Master, Business Analysis, and Quality Control when needed. My main responsibility was to lead the team to achieve the goal. I also assisted the HR department in interviewing developer candidates.",
    JSXElementIcon: () => (
      <WorkingIcon classes="w-4 h-4 absolute top-1 -left-2" />
    ),
    date: "Mar 2021 - Dec 2022",
  },
  {
    id: 3,
    title: "Worked at Orient Company",
    description:
      "After leaving Nashtech in search of new challenges and learning new technologies, I joined Orient Company as a software developer. I worked offshore with the ZOI team based in Germany to create web applications for the Kaercher Group. This was a great opportunity to get familiar with AWS Services, especially Serverless Services such as Lambda, S3, SNS, SQS, Cognito, DynamoDB, and Cloudfront. I also supported other front-end developers and learned React, Redux, and Redux Saga in my spare time. It was a very helpful experience.",
    JSXElementIcon: () => (
      <WorkingIcon classes="w-4 h-4 absolute top-1 -left-2" />
    ),
    date: "Feb 2020 - Mar 2021",
  },
  {
    id: 4,
    title: "Worked at Nashtech Company",
    description:
      "I worked on two projects at Nashtech company. The first one was Saturn F1, an outsourcing project for Apollo Group to gather data on the tire market in India. Despite being a fresher, I played a key role in a small team. I solved performance issues and handled many challenging tasks with complex computations to generate monthly Excel reports. I reduced the search time from 2 minutes to 2.5 seconds, which was amazing :-) After that, my project manager nominated me to join the company's largest project, Lowell from Germany group, with more than 300 developers. For the second project, I worked on the backend with dotnet core technology. I proposed using design patterns to make the code more extensible and maintainable, and to save time when changes occur.",
    JSXElementIcon: () => (
      <WorkingIcon classes="w-4 h-4 absolute top-1 -left-2" />
    ),
    date: "Aug 2018 - Jan 2020",
  },
  {
    id: 5,
    title: "Graduated from University of Science HCM",
    description:
      "I decided to pursue my high school dream by enrolled in college again.",
    JSXElementIcon: () => (
      <GraduationIcon classes="w-4 h-4 absolute top-1 -left-2" />
    ),
    date: "Sep 2015 - Sep 2019",
  },
  {
    id: 6,
    title: "Working as construction engineer",
    description: "I worked as a construction engineer for two years.",
    JSXElementIcon: () => (
      <WorkingIcon classes="w-4 h-4 absolute top-1 -left-2" />
    ),
    date: "2013 - 2015",
  },
  {
    id: 7,
    title: "Graduated from University of Architecture HCM",
    description:
      "The University of Architecture specializes in educating students in the construction and design fields in Vietnam.",
    date: "2008 - 2013",
    JSXElementIcon: () => (
      <GraduationIcon classes="w-4 h-4 absolute top-1 -left-2" />
    ),
  },
];

export default MY_JOURNEY;
