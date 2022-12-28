import {useEffect, useState} from "react"

// components
import PostDetails from "../components/postDetails"
import PostForm from "../components/PostForm"

const Home = () => {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        const fetchPosts = async() => {
            
            const response = await fetch("/api/posts");
            console.log(response)
    
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setPosts(json)
            } 
        }
        fetchPosts()
    }, [])
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