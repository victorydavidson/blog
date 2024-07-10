import "./post.css";

export default function Postthree() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.pexels.com/photos/7902915/pexels-photo-7902915.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

            <div className="postInfo">
                <div className="postCat">
                    <span className="postCat">Food</span>
                    <span className="postCat">Style</span>
                </div>
               <span className="postTitle">Blend of Oranges and Poolside Fun
                  <div className="singlePostEdit">
                     <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                     <i className="singlePostIcon fa-solid fa-trash"></i>
                  </div>
               </span>
                {/*<hr/>  for the line*/} 
                <div className="postAuthorDate">
                  <span className="singlePostAuthor">Author: <b>Chris</b></span>
                  <span className="postDate">4 hour ago</span>
                </div>
                
            </div>
            <p className="postDesc"> There's nothing quite like the invigorating combination of fresh oranges and poolside relaxation. Picture yourself lounging by a sparkling pool, enjoying the juicy sweetness of a perfectly ripe orange. The vibrant citrus aroma mingles with the cool, refreshing air, creating a delightful sensory experience. ?</p>
        </div>
    )
}
