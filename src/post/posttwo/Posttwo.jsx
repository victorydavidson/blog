import "./posttwo.css";

export default function Posttwo() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

            <div className="postInfo">
                <div className="postCat">
                    <span className="postCat">Life</span>
                    <span className="postCat">Style</span>
                </div>
               <span className="postTitle"> The Magic of Auroras and Snowy Rocks
                  <div className="singlePostEdit">
                     <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                     <i className="singlePostIcon fa-solid fa-trash"></i>
                  </div>
               </span>
                {/*<hr/>  for the line*/} 
                <div className="postAuthorDate">
                  <span className="singlePostAuthor">Author: <b>Elia</b></span>
                  <span className="postDate">5 hour ago</span>
                </div>
                
            </div>
            <p className="postDesc">Witnessing the ethereal dance of auroras in a snow-covered landscape is a truly magical experience. The vibrant colors of the northern lights, shimmering across the night sky, create a breathtaking contrast against the pristine white snow. </p>
        </div>
    )
}
