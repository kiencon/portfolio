import MyResume from '@/Components/MyResume';
import { PROJECTS } from '@/const';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viet Son Bui | Projects',
  description: `Viet Son Bui's projects`,
  robots: 'index,follow',
  keywords: [
    'Bui Viet Son',
    'Son Bui',
    'Sonny',
    'software developer',
    'web developer',
    'javascript developer',
    'portfolio',
    'projects',
  ],
  openGraph: {
    type: 'website',
    title: `Viet Son Bui's projects`,
    description: `The projects`,
    siteName: `Viet Son Bui's projects`,
  },
  twitter: {
    title: `Viet Son Bui's projects`,
  },
};

const Project = () => (
  <>
    <h2 className='text-center text-textPrimary text-3xl'>Projects</h2>
    <section className='text-textPrimary text-center py-6'>
      <ul className='my-6 block'>
        {PROJECTS.map(({ id, name, technologies, description, href }) => (
          <li key={id} className='md:flex my-4 justify-center'>
            <div className='md:w-1/2 bg-primary p-2 rounded'>
              <a target='_blank' href={href}>
                <h3 className='text-2xl my-4'>{name}</h3>
              </a>
              <p className='text-textSecondary'>{description}</p>
              <div className='flex gap-2 justify-center my-4'>
                {technologies.map((JSXElement, index) => (
                  <JSXElement key={index} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <MyResume title='View detail in my resume' />
    </section>
  </>
);

export default Project;
