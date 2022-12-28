import {useEffect} from "react"
import { usePostsContext } from "../hooks/usePostsContext"

// components
import PostDetails from "../components/postDetails"
import PostForm from "../components/PostForm"

const Home = () => {
    // const [posts, setPosts] = useState(null)
    const {posts, dispatch} = usePostsContext()
    useEffect(() => {
        const fetchPosts = async() => {
            
            const response = await fetch("/api/posts");
            console.log(response)
    
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                // setPosts(json)
                dispatch({
                    type: 'SET_POSTS',
                    payload: json
                })
            } 
        }
        fetchPosts()
    }, [dispatch])
    return ( 
        <div className="home">
            <a href="https://www.flaticon.com/free-icons/sports-and-competition" title="sports and competition icons">Sports and competition icons created by Freepik - Flaticon</a>
            <PostForm />
            <div className="posts">
                {posts && posts.map((post) => (
                    <PostDetails key={post._id} post={post}/>
                ))}
            </div>
            
        </div>
     );
}
 
export default Home;