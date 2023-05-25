import AnchorButton from "@/components/AnchorButton";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import MY_JOURNEY from "@/const/journey";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="en" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <title>About Viet Son Bui</title>
        <meta
          name="description"
          content="The journey in software development"
        />
        <meta
          name="keywords"
          content="Bui Viet Son, Son Bui, software developer, web developer, javascript developer, portfolio"
        />
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
        <section className="text-center text-textSecondary py-12 px-4">
          <Title content="About" classes="text-center" />
          <p>
            I started out as a construction engineer major, but I realized it
            was not the right fit for me. With my family&apos;s encouragement, I
            decided to pursue my high school dream of creating a website where
            users could listen to music and chill.
          </p>
          <p>
            My journey in software development began with C/C++ language on
            Console. I found it fascinating and not as hard as some people might
            think. I was very keen on learning algorithms, data structure, OOP,
            and design patterns... and that helped me land a fresher job at
            Nashtech company, one of the top technology companies in Vietnam, in
            2018. That&apos;s when everything took off.
          </p>
          <p>
            I could say I am very fortunate in my IT career with my hard work
            and now I have reached some achievements. The foundation knowledge
            that I gained at HCM University of Science has been very useful. My
            key is very simple: you must understand what you are doing and then
            you will know how to do it in the best.
          </p>
          <p>
            I am a new immigrant in Canada and I am searching for my first job
            opportunity here. I would greatly appreciate any referrals.
          </p>
          <AnchorButton name="My resume" href="/resume.pdf" classes="mt-6" />
        </section>
        <section className="py-12 px-4">
          <Title content="My Journey" />
          <div className="">
            {MY_JOURNEY.map(
              ({ date, id, title, description, JSXElementIcon }) => (
                <Card
                  key={id}
                  title={title}
                  description={description}
                  JSXElementIcon={JSXElementIcon}
                  date={date}
                />
              )
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
