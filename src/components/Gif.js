import React from "react"
import expense from "../../content/index/projects/expensetracker-app/expensetracker.gif"
import snake from "../../content/index/projects/snake-app/snakegame_v1.gif"
import starwars from "../../content/index/projects/calculator-app/starwars_v2.gif"

function ProjectImage(props) {
  const gifLibrary = {
    ExpenseTrackerApp: expense,
    SnakeApp: snake,
    StarWarsDirectory: starwars,
  }
  let projectTitle = props
  projectTitle = projectTitle.project.split(" ").join("")
  console.log(projectTitle)
  const gif = gifLibrary[projectTitle]
  return <img className="screenshot" src={gif} alt="gif image" />
}

export default ProjectImage
