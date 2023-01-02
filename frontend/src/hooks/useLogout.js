import { useAuthContext } from "./useAuthContext"
import { usePostsContext } from "./usePostsContext"

export const useLogout = () => {
    // we don't need to send a request to server, we need to uupdate state and delete the token
    const {dispatch} = useAuthContext()
    const {dispatch: postsDispatch} = usePostsContext()
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({
            type: 'LOGOUT',
        })
        postsDispatch({
            type: 'SET_POSTS',
            payload: null
        })
    }
    return {logout}
}