import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import yogaLogo from "../../assets/Icons/yogaLogo2.gif"
import { ImGoogle3 } from 'react-icons/Im';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({ mode: 'onChange' });
    const watchPassword = watch('password');
    const watchConfirmPassword = watch('confirm');
    const { createUser, updateUserProfile, setLoading, setUser, handleGoogleLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    //navigating to private page or home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state || '/';

    //creating user
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        setLoading(false);
                        reset();
                        Swal.fire({
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                if (error.message.split(' ')[2]) {
                    setError("Email Already Exists")
                }
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

    return (
        <>
            <Helmet>
                <title>Register | Yoga Journey</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-2 ml-28">Register now!</h1>
                        <img src={yogaLogo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                            <h2 className='text-center font-semibold text-2xl underline'>Register</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

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
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                                })} placeholder="Your Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must have 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Capital letter and one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Confirm Password</span>
                                </label>
                                <input type="password"  {...register("confirm", {
                                    required: true,
                                    validate: (value) => value === watchPassword || "Passwords do not match"
                                })} placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirm && <span className="text-red-600">{errors.confirm.message}</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary text-white" type="submit" value="Register" />
                            </div>
                        </form>
                        <div className='px-8 pb-4 mt-2'>
                            <p className='text-center'><small>Already have an account? <Link to="/login"><span className='text-primary font-semibold underline'>Login</span></Link></small></p>
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

export default Register;