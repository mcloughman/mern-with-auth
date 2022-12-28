import {useState} from "react"
import {usePostsContext} from "../hooks/usePostsContext"
const PostForm = () => {

    const {dispatch} = usePostsContext()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault();
        const post = {title, body}

        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                'Content-Type': "application/json"
            }
        })
         const json = await response.json()
         if (!response.ok) {
            setError(json.error)
         }
         if (response.ok) {
            setTitle("")
            setBody("")
            setError(null)
            console.log("New Post Added")
            dispatch({
                type: 'CREATE_POST',
                payload: json
            })
         }
    }
    return ( 
        <form className="create"  onSubmit={handleSubmit}>
            <h3>Add New Post</h3>
            <label htmlFor="">Title</label>
            <input 
                type="text" 
                name="" 
                id="" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
            <label htmlFor="">Body</label>
            <textarea 
                name="" 
                id="text-area" 
                onChange={(e) => setBody(e.target.value)}
                value={body}
                />
                <button>Add Post</button>
                {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default PostForm;