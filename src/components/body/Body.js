import './style.css'
import pic from './img.jpeg'
function Body(){
    return (
        <div className='body' id='body'>
            <div className="content">
                <h1>I'm a Front-End <br /> Developer.</h1>
                <p>I have completed my front end development from SMIT faisalabad and I can make very good front end designs and my ultimate goal is to be a MERN stack developer and currently I'm learning back end development</p>
                <button><a href="">Learn More</a></button>
            </div>
            <div className="myPic">
                <img style={{width:"350px"}} src={pic} alt="" />
            </div>
        </div>
    )
}
export default Body