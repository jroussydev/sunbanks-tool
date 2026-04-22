import { useState } from "react"

const Dashboard = () => 
    {
        const [projects, setProjects] = useState(["project 1","Project 2"])
        const [newProject, setNewProject] = useState("")

        const handleAddProject = () => {
    if (newProject.trim() === "") return

    setProjects([...projects, newProject])
    setNewProject("")
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
                <div key={project}>{project}</div>
                ))}
            </div>
        )
    }


export default Dashboard