import React from "react";
import Tech from "./Tech";
import style from "../styles/ProjectCard.module.css";
import IntersectionOberserver from "./IntersectionOberserverContainer";

function ProjectCard({
  link,
  designOrigin,
  snapshot,
  project_title,
  description,
  tech_used,
}) {
  function handleOnEnter(e) {
    if (e.keyCode === 13) window.open(link);
    return;
  }
  return (
    // <IntersectionOberserver animation="fade">
    // <img
    //   src="https://cdn-images-1.medium.com/v2/resize:fit:280/1*1eI1MVvq9I4B3kGpt2JQyw@2x.png"
    //   alt="frontend mentor logo"
    //   width={50}
    // />
    // <div className={style.overlay}>
    //   <RiExternalLinkLine size={50} />
    // </div>
    <IntersectionOberserver>
      <article
        className={style.project_card}
        tabIndex={0}
        onClick={() => window.open(link)}
        onKeyDown={handleOnEnter}
      >
        <div>
          <div className={style.image_container}>
            <div className={style.cover_container}>
              <img
                src={snapshot}
                alt={project_title}
                loading="lazy"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <h1 className={style.project_title}>{project_title}</h1>

            <p className={style.description}>{description}</p>
            <div>
              <ul className={style.tech_used__list}>
                {tech_used.map((tech, id) => (
                  <Tech key={id} text={tech} customStyle={"projectCard"} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
      {!!designOrigin && (
        <div className={style.frontendmentor}>
          <a
            href={designOrigin}
            rel="noreferrer"
            target="_blank"
            className={style.fm_link}
          >
            Project Inspiration
          </a>
        </div>
      )}
    </IntersectionOberserver>
  );
}

export default ProjectCard;
