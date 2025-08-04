import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="py-10 space-y-14 sm:flex sm:space-y-0 flex-wrap items-center justify-between border-b border-black/10 project-item"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl font-semibold text-text-primary">{title}</p>
          <div className="flex flex-wrap gap-5 mt-2 text-accent-text">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer text-text-secondary hover:text-text-primary hover-animation"
        >
          Read More
          <img
            src="assets/arrow-right-dark.svg"
            alt="Read More"
            className="w-5"
          />
        </button>
      </div>

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
