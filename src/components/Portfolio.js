import React from "react";
import Project from "./Project";

const projects =
    [
        {
            id: 0,
            projectName: 'Vacation Insight',
            image: './images/vacationinsight.png',
            repo: 'https://github.com/Tony-Coniglio/Vacation-Insight',
            link: 'https://tony-coniglio.github.io/Vacation-Insight/',
        },
        {
            id: 1,
            projectName: 'Code Bank',
            image: './images/BFLogo.png',
            repo: 'https://github.com/dcodner24/Code-Bank',
            link: 'https://code-bank-bc.herokuapp.com/',
        }


    ];

    function Portfolio() {
        return (
          <div>
            <p className="content is-medium">Portfolio</p>
            <hr />
      
            <Project projects={projects} />
          </div>
        );
      }
      
      export default Portfolio;