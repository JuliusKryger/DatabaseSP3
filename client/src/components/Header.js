import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav>
                <ul className='header'>
                    <li><NavLink to='/'>Get Students</NavLink></li>
                    <li><NavLink to='/two'>Create Student</NavLink></li>
                </ul>
            </nav>
        </div >
    )
}

export default Header;