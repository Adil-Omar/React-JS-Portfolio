import './style.css'
import pic1 from '../weather.png'
import pic2 from '../todo.png'
import pic3 from '../amazon.png'
function Projects() {
    return (
        <div className="pro" id='pro'>
            <h1>My Projects</h1>
            <div className="projects">
                <div className="project">
                    <h2>Weather App</h2>
                    <img src={pic1} alt="" />
                    <a target='blank' href="https://github.com/Adil-Omar/Weather-App-Project"> Click here for Github Code</a>
                </div>
                <div className="project">
                    <h2>To-Do List App</h2>
                    <img src={pic2} alt="" />
                    <a target='blank' href="">Click here for Github App</a>
                </div>
                <div className="project">
                    <h2>Amazon Clone Website</h2>
                    <img src={pic3} alt="" />
                    <a target='blank' href="https://github.com/Adil-Omar/SMIT-AMAZON-ASSIGNMENT-6">Click here for Github Code</a>
                </div>
            </div>
        </div>
    )
}
export default Projects