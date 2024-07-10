import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
 const user = false; // Assuming user is not logged in by default
 return (
     <div className="top">
          <div className="topleft">
              {/* Add links to social media icons */}
              <Link to="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
                <i className="topicon fa-brands fa-square-facebook"></i>
              </Link>
              <Link to="https://x.com/">
                <i className="topicon fa-brands fa-square-twitter" target="_blank"></i>
              </Link>
              <Link to="https://www.pinterest.com/">
                <i className="topicon fa-brands fa-square-pinterest"target="_blank"></i>
              </Link>
              <Link to="https://www.instagram.com/">
                <i className="topicon fa-brands fa-square-instagram"target="_blank"></i>
              </Link>
          </div>
          <div className="topcenter"> 
              <ul className="topList"></ul>
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                 </li>
                <li className="topListItem"><Link className="link" to="/about" >ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to="/contact" >CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to="/write" >WRITE</Link></li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
         </div>
            
            <div className="topright">
            { user ? (
                  <Link to="/settings">
                   <img
                     className="topimg"
                     src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" alt="" />

                 </Link>
               
                    
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                             < Link className="link" to="/login" >
                               LOGIN
                               </Link>
                            </li>
                            <li className="topListItem">
                             < Link className="link" to="/register" >
                               REGISTER
                               </Link>
                            </li>
                           
                        </ul>
                    )}
                
                    <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
             </div>
           
        </div> 
    
    );
}
