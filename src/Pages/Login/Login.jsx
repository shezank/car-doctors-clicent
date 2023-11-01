import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/images/login/login.svg'
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    
    const {login} = useAuth();
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location?.state : "/")
        })
        .catch(error =>{
            console.error( error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-10">
                    <img src={loginimg} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p>Do Not Have A Account Please <Link to='/register' className='text-green-600 font-bold'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;