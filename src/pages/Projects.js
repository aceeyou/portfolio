import React from "react";
import style from "../styles/Projects.module.css";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

function Projects() {
  return (
    <div className={style.section}>
      <Section>
        <div className={style.container} id="projects">
          <h1 className={style.header__title}>
            <span className="sr-only">Ace Logronio's</span>PROJECTS
          </h1>
          <div className={style.projects__container}>
            <ProjectCard
              link="https://aceeyou.github.io/countries-frontEndMentor-challenge/"
              designOrigin="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
              snapshot={require("../images/project-snapshots/countries.jpg")}
              project_title="REST Countries API with color theme switcher"
              description="This is a challenge by Frontend Mentor which I developed using React. This challenge includes using data from an API, search a country, and filter the countries by region."
              tech_used={["HTML", "CSS", "JavaScript", "React"]}
            />
            <ProjectCard
              link="https://aceeyou.github.io/interactive-comments/"
              designOrigin={
                "https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9"
              }
              snapshot={require("../images/project-snapshots/interactive-comments.jpg")}
              project_title="Interactive comments section"
              description="Another challenge from Frontend Mentor. This project allows the user to upload and edit their own posts, and reply to other posts from different users. I also used React to build the project."
              tech_used={["HTML", "CSS", "JavaScript", "React JS"]}
            />
            <ProjectCard
              link="https://aceeyou.github.io/ecommerce-product-page/"
              designOrigin={
                "https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
              }
              snapshot={require("../images/project-snapshots/ecommerce-project-page.jpg")}
              project_title="E-commerce product page"
              description="This is an example of a product page from an e-commerce webapp. You can select the quantity, add it to your cart, and also remove it from the cart. It was a challenged from Frontend Mentor."
              tech_used={["HTML", "CSS", "JavaScript", "React JS"]}
            />
            <ProjectCard
              link="https://aceeyou.github.io/cosmos-odyssey/"
              designOrigin="https://dribbble.com/shots/22516395-Space-Web-landing-page"
              snapshot={require("../images/project-snapshots/cosmos-odyssey-2.jpg")}
              project_title="Cosmos Landing Page"
              description="This landing page is designed by Giorgi Matsukatovi from Ascended. They've uploaded the design on dribbble.com and provided a free copy of the Figma document."
              tech_used={["HTML", "CSS", "JavaScript", "React JS"]}
            />
          </div>
          {
            //   <iframe
            //   src="https://aceeyou.github.io/ecommerce-product-page/"
            //   frameborder="0"
            //   title="asdas"
            //   width={1000}
            //   height={800}
            // ></iframe>
          }
        </div>
      </Section>
    </div>
  );
}

export default Projects;
