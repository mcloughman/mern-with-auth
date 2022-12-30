import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    // we don't need to send a request to server, we need to uupdate state and delete the token
    const {dispatch} = useAuthContext()
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({
            type: 'LOGOUT'
        })
    }
    return {logout}
}