import "./postfour.css";

export default function Postfour() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=600" alt="tech" />

            <div className="postInfo">
                <div className="postCat">
                    <span className="postCat">Music</span>
                    <span className="postCat">Tech</span>
                </div>
               <span className="postTitle">The Tech Revolution
                  <div className="singlePostEdit">
                     <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                     <i className="singlePostIcon fa-solid fa-trash"></i>
                  </div>
               </span>
                {/*<hr/>  for the line*/} 
                <div className="postAuthorDate">
                  <span className="singlePostAuthor">Author: <b>Alien</b></span>
                  <span className="postDate">1 hour ago</span>
                </div>
                
            </div>
            <p className="postDesc">wave of technological innovation, making them more exciting and accessible than ever. Advanced equipment, such as smart surfboards with real-time data tracking and hydrofoil boards that let you glide above the water, are transforming the experience. Wearable tech, like waterproof fitness trackers and smart goggles, provide valuable insights into performance and safety. </p>
        </div>
    )
}
