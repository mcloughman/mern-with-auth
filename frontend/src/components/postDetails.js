import formatDistanceToNow from'date-fns/formatDistanceToNow'
import trashIcon from "../images/trashcan.png"
import { usePostsContext } from "../hooks/usePostsContext";


const PostDetails = ({post}) => {

    const {title, body, createdAt, _id} = post;
    
    const {dispatch} = usePostsContext()

    const handleClick = async(e) => {
        const response = await fetch(`/api/posts/${_id}`, {
            method: "DELETE",

        })
        const json = await response.json();
        if (response.ok) {
            dispatch({
                type: "DELETE_POST",
                payload: json
            })
        }
    }
    return ( 
        <div className="post-details">
            <h3>{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</h3>
            <h4>{title}<img src={trashIcon} alt="traschcan" className="trashcan" onClick={handleClick}/></h4>
            <p><a href={`http://localhost:4000/api/posts/${_id}`}>{body.substring(0,4)}...</a></p>
            
        </div>
     )
}
 
export default PostDetails;