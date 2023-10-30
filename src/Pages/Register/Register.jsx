import { Link } from 'react-router-dom';
import loginimg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Shard/AuthProviders/AuthProviders';


const Register = () => {

    const {createUser} = useContext(AuthContext);


    const handleRegister = e =>{

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser( email, password)
        .then( result =>{
            console.log(result.user)
        })
        .catch( error =>{
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
                <form onSubmit={handleRegister} className="card-body">
                <h1 className="text-5xl font-bold">Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
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
                    <p>Allready Have A Account Please <Link to='/login' className='text-green-600 font-bold'>Login</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;