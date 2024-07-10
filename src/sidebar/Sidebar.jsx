import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/5490296/pexels-photo-5490296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className="text">
                    Beyond the canvas, I'm also passionate about sharing my love for art with others.
                    I believe that art has the power to bring people together, bridge divides, and create positive change in the world. 
                   Through workshops, exhibitions, and community projects, I'm committed to making art accessible to all and fostering a greater appreciation for creativity and self-expression.
                    Join me as I embark on this artistic adventure, sharing my latest creations, insights, and inspirations along the way. 
                      Together, let's celebrate the beauty of art and the boundless possibilities of the creative spirit.
             </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Food</li>
                    <li className="sidebarListItem">Views</li>
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
            </div>
        </div>
    )
}
