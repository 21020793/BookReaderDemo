import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth'
const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout();
        navigate('/login_signup')
    }
    return (
        <>
            <div>Welcome to your profile {auth.user.username}</div>
            <button onClick={handleLogout}>Log out</button>
        </>
        
        
    )
}

export default Profile