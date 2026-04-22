import { useState } from "react"

const Dashboard = () => 
    {
        const [projects, setProjects] = useState(["project 1","Project 2"])
    
        return (
            <div>
                <h1>Dashboard</h1>
                {projects.map((project) => (
                <div key={project}>{project}</div>
                ))}
            </div>
        )
    }


export default Dashboard