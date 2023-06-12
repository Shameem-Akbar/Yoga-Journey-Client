import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { ImGoogle3 } from 'react-icons/Im';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { setUser, handleGoogleLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    //google sign in
    const handleGoogleSignIn = () => {
        handleGoogleLogin(googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='px-7' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <hr style={{ width: '50%', borderBottom: '1px solid gray' }} />
                <span className='px-2 text-slate-500'>OR</span>
                <hr style={{ width: '50%', borderBottom: '1px solid gray' }} />
            </div>
            <div className='px-7 my-3'>
                <button onClick={handleGoogleSignIn} className='btn btn-secondary btn-block text-white '><ImGoogle3 className='text-lg'></ImGoogle3> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;