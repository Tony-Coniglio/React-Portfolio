import React from "react";

function Project(props) {
  return (
    <div>
      {props.projects.map((project) =>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={project.image} alt="Placeholder image"></img>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{project.projectName}</p>
                <p class="subtitle is-6">{project.repo}</p>
                <p class="subtitle is-6">{project.link}</p>
              </div>
            </div>
          </div>

        </div>
      )
      }
    </div>



  );
}
export default Project;