import "./postone.css";

export default function Postone() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

            <div className="postInfo">
                <div className="postCat">
                    <span className="postCat">Music</span>
                    <span className="postCat">Views</span>
                </div>
               <span className="postTitle">Embrace the Beauty of Views and Trees
                  <div className="singlePostEdit">
                     <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                     <i className="singlePostIcon fa-solid fa-trash"></i>
                  </div>
               </span>
                {/*<hr/>  for the line*/} 
                <div className="postAuthorDate">
                  <span className="singlePostAuthor">Author: <b>Stephen</b></span>
                  <span className="postDate">1 hour ago</span>
                </div>
                
            </div>
            <p className="postDesc">way to enjoy stunning views and stay active. Imagine kayaking through crystal-clear waters surrounded by majestic mountains or windsurfing with a backdrop of a golden sunset. These activities not only provide an adrenaline rush but also immerse you in nature's splendor.</p>
        </div>
    )
}
