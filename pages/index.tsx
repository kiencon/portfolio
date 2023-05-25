import AnchorButton from "@/components/AnchorButton";
import Layout from "@/components/Layout";
import GithubIcon from "@/components/SVGJSXElement/GithubIcon";
import LinkedInIcon from "@/components/SVGJSXElement/LinkedInIcon";
import MailIcon from "@/components/SVGJSXElement/MailIcon";
import PhoneIcon from "@/components/SVGJSXElement/PhoneIcon";
import FAVORITE_TECHS from "@/const/favoriteTechs";
import { SPLIT_PROJECTS } from "@/const/projects";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="en" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <title>Viet Son Bui | Sotfware Developer</title>
        <meta
          name="description"
          content="Viet Son Bui's portfolio is build with NextJS, Typescript, Tailwind"
        />
        <meta
          name="keywords"
          content="Bui Viet Son, Son Bui, software developer, web developer, javascript developer, portfolio"
        />
        <link rel="canonical" href="https://samsondev.com" />
        <meta property="og:title" content="Viet Son Bui | Sotfware Developer" />
        <meta
          property="og:description"
          content="Viet Son Bui's portfolio is build with NextJS, Typescript, Tailwind"
        />
        <meta property="og:url" content="current" />
        <meta property="og:site_name" content="Viet Son Bui's portfolio" />
        <meta name="twitter:site" content="Viet Son Bui's portfolio" />
      </Head>
      <Layout>
        <div>
          <section className="text-center text-textPrimary py-12 px-4">
            <p className="">Hi, my name is</p>
            <p className="my-4 text-3xl">Viet Son Bui</p>
            <p>I work as a software developer</p>
            <div className="my-2 mt-12 mb-6">
              <AnchorButton name="More About Me" href="/about" />
            </div>
            <div className="my-2">
              <AnchorButton
                name="My resume"
                href="/resume.pdf"
                classes="block"
              />
            </div>
          </section>
          <section className="text-textPrimary py-6">
            <h2 className="text-3xl	text-left mb-6">Favorite Technologies</h2>
            <ul className="text-center">
              {FAVORITE_TECHS.map(({ name, SVGJSXElement }) => (
                <li
                  key={name}
                  className="inline-flex p-2 bg-primary rounded m-2 w-64"
                >
                  <div className="inline-flex items-center">
                    <SVGJSXElement />
                    <p className="ml-2">{name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="text-textPrimary text-center py-6">
            <h2 className="text-3xl	text-left mb-6">Projects</h2>
            <ul className="my-6 block">
              {SPLIT_PROJECTS.map(
                ({ id, name, technologies, description, href }) => (
                  <li key={id} className="md:flex my-4 justify-center">
                    <div className="md:max-w-1/2 bg-primary p-2 rounded">
                      <a target="_blank" href={href} className="my-4">
                        <h3 className="text-2xl">{name}</h3>
                      </a>
                      <p className="text-textSecondary mt-4">{description}</p>
                      <div className="flex gap-2 justify-center my-4">
                        {technologies.map((JSXElement, index) => (
                          <JSXElement key={index} />
                        ))}
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>
            <AnchorButton href="/project" name="View more" classes="mb-4" />
          </section>
          <section className="text-textPrimary text-left py-6 md:max-w-1/2">
            <h2 className="text-3xl	text-left mb-6">Get In Touch</h2>
            <p className="mb-4">
              I&apos;m always open to new projects and opportunities. Whether
              you&apos;re a company looking to hire or you&apos;re just looking
              to chat, I&apos;d love to hear from you.
            </p>
            <p>
              <span className="mr-4">
                <MailIcon classes="w-6 h-6 inline" />
              </span>
              <a target="_blank" href="https://gmail.com">
                <span>vietson1610@gmail.com</span>
              </a>
            </p>
            <p>
              <span className="mr-4">
                <PhoneIcon classes="w-6 h-6 inline" />
              </span>
              <span>+1 867-523-1610</span>
            </p>
            <div className="my-4 flex gap-6">
              <a
                href="https://www.linkedin.com/in/viet-son-bui-798200272/"
                target="_blank"
              >
                <LinkedInIcon classes="h-5 w-5" />
              </a>
              <a href="https://github.com/kiencon" target="_blank">
                <GithubIcon classes="h-5 w-5" />
              </a>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
