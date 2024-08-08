import { Link } from "react-router-dom";
const Navbar = () => {
    return <div className="navbar">
        <div className="meethere">
            <h3 className="meet"><i class="bi bi-display"></i> LET'S MEET</h3>
        </div>
        <ul className="ul">
            <Link className="link" to={"/"}><li className="li"><i class="bi bi bi-people-fill"></i> ALL MEETS</li></Link>
           {/* <Link className="link" to={"/mymeet"}> <li className="li"><i class="bi bi-people-fill"></i> MY MEETS</li></Link> */}
            <Link className="link" to={"/addmeet"}><li className="li"><i class="bi bi-person-fill-add"></i> ADD MEET</li></Link>
        </ul>

    </div>
}
export default Navbar;