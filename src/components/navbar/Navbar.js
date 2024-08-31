import './style.css'

function Navbar(){
    return (
        <div className='nav'>
            <h2>Programmer</h2>
            <ul>
                <a href="#body"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#pro"><li>Projects</li></a>
                <a href="#con"><li>Contact</li></a>
            </ul>
            <button><a id='mail' href="mailto:madilomar1@yahoo.com">Send Mail</a></button>
        </div>
    )
}
export default Navbar;