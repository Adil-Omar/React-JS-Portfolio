import './style.css'
import pic1 from './github-brands-solid.svg'
import pic2 from './linkedin-brands-solid.svg'
import pic3 from './LeetCode_logo_black.png'
function Contact(){
    return (
    <div className='con' id='con'>
            <h1 id='con'>Contact Me</h1>
        <div className="cont">
            <div className='social'> 
                    <p> <img style={{width:'20px'}} src={pic1} alt="" />  Github Account :   <a target='blank' href="https://github.com/Adil-Omar">Click here</a></p>
                    <p>  <img style={{width:'20px'}} src={pic2} alt="" /> LinkedIn Account :   <a target='blank' href="https://www.linkedin.com/in/adil-omar-b792a8316/">Click here</a></p>
                    <p>  <img style={{width:'20px'}} src={pic3} alt="" />    Leetcode Account :   <a target='blank' href="https://leetcode.com/u/AdilOmar/">Click here</a></p>
            </div>
            <div className="mess">
                <h2>Send Message</h2>
                <textarea name="" placeholder='Enter Your Text' id=""></textarea>
                <button>Send Message</button>
            </div>
        </div>
    </div>
    )
}
export default Contact