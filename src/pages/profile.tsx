import { useContext } from 'react'
import { authContext } from 'authProvider/authContext'

const Profile = () => {
    const { auth } = useContext(authContext)

    return (
        <div>
            Is Authenticated? {auth.isAuthenticated}
            My Token = {auth.token}
            ID =  {auth.user._id}
            City = {auth.user.city}
            Email = {auth.user.email}
            PictureURL = {auth.user.picture_url}
            Username = {auth.user.username}
        </div>
    )
}

export default Profile
