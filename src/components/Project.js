import React from "react";

function Project(props) {
    return (

<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={Project.image} alt="Placeholder image"></img>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{Project.name}</p>
        <p class="subtitle is-6">{Project.repo}</p>
        <p class="subtitle is-6">{Project.link}</p>
      </div>
    </div>
  </div>
</div>

    );
}
export default Project;