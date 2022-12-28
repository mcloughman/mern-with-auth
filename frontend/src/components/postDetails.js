const postDetails = ({post}) => {
    const {title, body, createdAt} = post;
    console.log(body.substring(0,4))
    return ( 
        <div className="post-details">
            <h3>{createdAt}</h3>
            <h4>{title}</h4>
            <p>{body.substring(0,4)}...</p>
        </div>
     )
}
 
export default postDetails;