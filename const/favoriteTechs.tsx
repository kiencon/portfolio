import AWSIcon from "@/components/SVGJSXElement/AWSIcon";
import AlgoliaIcon from "@/components/SVGJSXElement/AlgoliaIcon";
import CouchDBIcon from "@/components/SVGJSXElement/CouchDBIcon";
import ExpressJSIcon from "@/components/SVGJSXElement/ExprexssJSIcon";
import JavascriptIcon from "@/components/SVGJSXElement/JavascriptIcon";
import MySQLIcon from "@/components/SVGJSXElement/MySQLIcon";
import NextJSIcon from "@/components/SVGJSXElement/NextJSIcon";
import NodeJSIcon from "@/components/SVGJSXElement/NodeJSIcon";
import PostgreIcon from "@/components/SVGJSXElement/PostgreIcon";
import PouchDBIcon from "@/components/SVGJSXElement/PouchDBIcon";
import ReactIcon from "@/components/SVGJSXElement/ReactIcon";
import ReduxIcon from "@/components/SVGJSXElement/ReduxIcon";
import ReduxSagaIcon from "@/components/SVGJSXElement/ReduxSagaIcon";
import TailWindIcon from "@/components/SVGJSXElement/TailwindIcon";
import TypeScriptIcon from "@/components/SVGJSXElement/TypeScriptIcon";

const FAVORITE_TECHS = [
  {
    name: "TypeScript",
    SVGJSXElement: () => <TypeScriptIcon classes="w-12 h-12" />,
  },
  {
    name: "Javascript",
    SVGJSXElement: () => <JavascriptIcon classes="w-12 h-12" />,
  },
  {
    name: "NextJS",
    SVGJSXElement: () => <NextJSIcon classes="w-12 h-12" />,
  },
  {
    name: "React",
    SVGJSXElement: () => <ReactIcon classes="w-12 h-12" />,
  },
  {
    name: "Redux",
    SVGJSXElement: () => <ReduxIcon classes="w-12 h-12" />,
  },
  {
    name: "Redux Saga",
    SVGJSXElement: () => <ReduxSagaIcon classes="w-12 h-12" />,
  },
  {
    name: "Tailwind",
    SVGJSXElement: () => <TailWindIcon classes="w-12 h-12" />,
  },
  {
    name: "AWS",
    SVGJSXElement: () => <AWSIcon classes="w-12 h-12 bg-white rounded" />,
  },
  {
    name: "NodeJS",
    SVGJSXElement: () => <NodeJSIcon classes="w-12 h-12" />,
  },
  {
    name: "ExpressJS",
    SVGJSXElement: () => <ExpressJSIcon classes="w-12 h-12" />,
  },
  {
    name: "MySQL",
    SVGJSXElement: () => <MySQLIcon classes="w-12 h-12 bg-white rounded" />,
  },
  {
    name: "Postgre",
    SVGJSXElement: () => <PostgreIcon classes="w-12 h-12 bg-white rounded" />,
  },
  {
    name: "CouchDB",
    SVGJSXElement: () => <CouchDBIcon classes="w-12 h-12" />,
  },
  {
    name: "PouchDB",
    SVGJSXElement: () => <PouchDBIcon classes="w-12 h-12" />,
  },
  {
    name: "Algolia",
    SVGJSXElement: () => <AlgoliaIcon classes="w-12 h-12" />,
  },
];

export default FAVORITE_TECHS;
