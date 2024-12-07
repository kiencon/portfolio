import Card from '@/Components/Card';
import MyResume from '@/Components/MyResume';
import Title from '@/Components/Title';
import { MY_JOURNEY } from '@/const';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viet Son Bui | About',
  description: `The journey in software development`,
  robots: 'index,follow',
  keywords: [
    'Bui Viet Son',
    'Son Bui',
    'Sonny',
    'software developer',
    'web developer',
    'javascript developer',
    'portfolio',
  ],
  openGraph: {
    type: 'website',
    title: `Viet Son Bui's portfolio`,
    description: `The journey in software development`,
    siteName: "Viet Son Bui's portfolio",
  },
  twitter: {
    title: `Viet Son Bui's portfolio`,
  },
};

const About = () => (
  <>
    <section className='text-center text-textSecondary py-12 px-4'>
      <Title content='About' classes='text-center' />
      <p>
        Highly skilled and motivated programmer/developer with 6+ years of
        experience in software development across diverse industries.
        Proficiency in creating user interfaces, writing and testing codes,
        troubleshooting complex application codes, and developing methods to
        enhance application performance. Proven ability to deliver high-quality
        software solutions on time and within budget. Adept at problem-solving,
        teamwork, collaboration, and continuous learning to stay updated with
        the technology trends.
      </p>
      <p>
        I am studying at Algonquin College Ottawa to gain academic Canadian
        experience but I am still open to a full-time job.
      </p>
      <MyResume />
    </section>
    <section className='py-12 px-4'>
      <Title content='My Journey' />
      <div className=''>
        {MY_JOURNEY.map(({ date, id, title, description, JSXElementIcon }) => (
          <Card
            key={id}
            title={title}
            description={description}
            JSXElementIcon={JSXElementIcon}
            date={date}
          />
        ))}
      </div>
    </section>
  </>
);

export default About;
