import SinglePost from "../singlePost/SinglePost"
import './posts.css';
import Postone from "../post/postone/Postone"
import Posttwo from "../post/posttwo/Posttwo"
import Postthree from "../post/postthree/Postthree"
import Postfour from "../post/postfour/Postfour"
import Postfive from "../post/postfive/Postfive";

export default function Posts() {
    return (
        <div className="posts">
                <Postfive/>
                <SinglePost/>
                <Postone/>
                <Posttwo/>
                <Postthree/>
                <Postfour/>
        </div>
    )
}
