import "./postfive.css";

export default function Postfive() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.pexels.com/photos/6381482/pexels-photo-6381482.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sport" />

            <div className="postInfo">
                <div className="postCat">
                    <span className="postCat">Sport</span>
                    <span className="postCat">Cinema</span>
                </div>
               <span className="postTitle">The Thrill of Water Sports
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
            <p className="postDesc">Water sports offer an exhilarating way to enjoy the outdoors and stay active. Whether you're surfing the ocean waves, jet skiing across a lake, or kayaking down a river, there's a water sport for everyone. These activities not only provide an adrenaline rush but also improve physical fitness, balance, and coordination. So grab your gear, dive in, and experience the excitement and adventure that water sports bring!</p>
        </div>
    )
}
