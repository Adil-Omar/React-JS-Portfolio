import './style.css'

function About(){
    return (
        <div className="about" id='about'>
            <h1 style={{textAlign:'center'}}> About Me </h1>
            <div className="aboutMe">
                <div className="info">
                    <h1>Me</h1>
                    <ul>
                    <li>My name is Mohammad Adil and I'm a student of <b>BSCS, 4<sup>th</sup> at Superior University Faisalabad</b></li>
                    <li>I have completed my <b>FSC</b> from <b>GCUF</b></li>
                    <li>I'm learning web and mobile app development from SMIT Faisalabad and completed my <b>HTML, CSS and Javascript</b> and focusing on DSA and <b>React JS</b></li>
                    </ul>
                </div>
                <div className="info">
                    <h1>My Achievements</h1>
                    <ul>
                    <li>I have a good grip on <b>Front-End designs</b> as I had made a lot of front-end projects.</li>
                    <li>I have completed <b>60+ Leetcode questions</b>  and making a good grip on <b>DSA.</b></li>
                    <li>Made a lot of projects for my University including projects of semester finals.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default About;