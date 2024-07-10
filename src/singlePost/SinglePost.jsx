import "./singlepost.css";


export default function SinglePost() {
    return (
        <div className="singlePost">
           <div className="singlePostWrapper">
               <img src="https://images.pexels.com/photos/9454915/pexels-photo-9454915.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="singlePostImg"/>
               <div className="postCat">
                    <span className="postCat">Style</span>
                    <span className="postCat">Views</span>
                </div>
              <span className="singlePostTitle">The Magic of Pink Setting
                  <div className="singlePostEdit">
                     <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                     <i className="singlePostIcon fa-solid fa-trash"></i>
                 </div>
              </span>
         <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Davidson</b></span>
              <span className="singlePostDate">1 hour ago</span>
         </div>
        <p className="singlePostDesc">Imagine gliding through a serene pink sea under cotton candy pink clouds, with the soft hue of a pink tree-lined shore in the distance. Water sports in this dreamlike setting offer a unique blend of tranquility and excitement. Whether you're paddleboarding on the calm waters or sailing under the pastel sky, the pink surroundings add a magical touch to your adventure.</p>
         
    </div>           
    </div>
    )
}
