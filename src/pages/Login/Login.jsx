import React, { useContext, useState } from 'react';
import { ImGoogle3 } from 'react-icons/Im';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import yogaLogo from "../../assets/Icons/yogaLogo.gif"
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signIn, setLoading, setUser, handleGoogleLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    //navigating user
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || '/';

    //email pass sign in
    const handleSignIn = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }

    //google sign in
    const handleGoogleSignIn = () => {
        handleGoogleLogin(googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                navigate(from, { replace: true });
                setUser(loggedInUser);
                Swal.fire({
                    icon: 'success',
                    title: 'User Logged in successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => console.log(error))
    }

    //password hide/show
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Helmet>
                <title>Login | Yoga Journey</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-2 ml-36">Login now!</h1>
                        <img src={yogaLogo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSignIn)} className="card-body pb-0">
                            <h2 className='text-center font-semibold text-2xl underline'>Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Your Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                    <button onClick={togglePasswordVisibility}>{showPassword ? (
                                        <FaEye></FaEye>
                                    ) : (
                                        <FaEyeSlash></FaEyeSlash>
                                    )}</button>
                                </label>
                                <input type={showPassword ? 'text' : 'password'}  {...register("password", {
                                    required: true
                                })} placeholder="Your Password" className="input input-bordered" />

                                {errors.password && <span className="text-red-600">Password is required</span>}
                            </div>
                            <div className="text-sm">
                                <a href="#" className="text-primary hover:text-red-600 font-medium">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='px-8 pb-4 mt-2'>
                            <p className='text-center'><small>Don&apos;t have an account? <Link to="/register"><span className='text-primary font-semibold underline'>Register</span></Link></small></p>
                        </div>
                        <div className='px-7' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <hr style={{ width: '50%', borderBottom: '1px solid gray' }} />
                            <span className='px-2 text-slate-500'>OR</span>
                            <hr style={{ width: '50%', borderBottom: '1px solid gray' }} />
                        </div>
                        <div className='px-7 my-3'>
                            <button onClick={handleGoogleSignIn} className='btn btn-secondary btn-block text-white '><ImGoogle3 className='text-lg'></ImGoogle3> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;