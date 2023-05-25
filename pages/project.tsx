import AnchorButton from "@/components/AnchorButton";
import Layout from "@/components/Layout";
import PROJECTS from "@/const/projects";

const Project = () => {
  return (
    <Layout>
      <h2 className="text-center text-textPrimary text-3xl">Projects</h2>
      <section className="text-textPrimary text-center py-6">
        <ul className="my-6 block">
          {PROJECTS.map(({ id, name, technologies, description, href }) => (
            <li key={id} className="md:flex my-4 justify-center">
              <div className="md:max-w-1/2 bg-primary p-2 rounded">
                <a target="_blank" href={href}>
                  <h3 className="text-2xl my-4">{name}</h3>
                </a>
                <p className="text-textSecondary">{description}</p>
                <div className="flex gap-2 justify-center my-4">
                  {technologies.map((JSXElement, index) => (
                    <JSXElement key={index} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <AnchorButton
          href="/resume.pdf"
          name="View detail in my resume"
          classes="mb-4 w-80"
        />
      </section>
    </Layout>
  );
};

export default Project;
