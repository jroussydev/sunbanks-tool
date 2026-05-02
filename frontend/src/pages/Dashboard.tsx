import { useEffect, useState } from "react"

const Dashboard = () => {
  const [projects, setProjects] = useState<string[]>(() => {
    const storedProjects = localStorage.getItem("projects")
    return storedProjects ? JSON.parse(storedProjects) : ["project 1", "project 2"]
  })

  const [newProject, setNewProject] = useState("")

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects))
  }, [projects])

  const handleAddProject = () => {
    if (newProject.trim() === "") return

    setProjects([...projects, newProject])
    setNewProject("")
  }
//3.suppression de projects
const handleDeleteProject = (projectToDelete: string) => {
    const updatedProjects = projects.filter((project) => project != projectToDelete)
    setProjects(updatedProjects)
}
  return (
    <div>
      <h1>Dashboard</h1>

      <input
        type="text"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
        placeholder="Add a project"
      />

      <button onClick={handleAddProject}>Add</button>

      {projects.map((project) => (
        <div key={project}>
            {project}
            <button onClick={() => handleDeleteProject(project)}>
                supprimer
            </button>
        </div>
      ))}
    </div>
  )
}

export default Dashboard