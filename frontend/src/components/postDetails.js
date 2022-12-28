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
            <h3>{createdAt}</h3>
            <h4>{title}<img src={trashIcon} alt="traschcan" className="trashcan" onClick={handleClick}/></h4>
            <p>{body.substring(0,4)}...</p>
            
        </div>
     )
}
 
export default PostDetails;