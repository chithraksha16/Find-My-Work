
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { toast } from 'react-toastify';
import loginImage from '../assets/bglogin.jpg' 


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {login,setToken } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/api/v1/auth/login', {
                email,
                password
            }, { withCredentials: true });

            // Save the token to localStorage
            localStorage.setItem('token', data.token);

            // Handle successful login, e.g., redirect, etc.
            console.log('Login successful:', data);
            toast.success("Login sucessful");
            setEmail('');
            setPassword('');
            setRedirect(true);
            // setUser(data.user);
            setToken(data.token);
            
            login(data.user,data.token);
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Login failed: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${loginImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(0.2px)' }}>
             <div className="p-8 rounded-lg w-full max-w-md shadow-[8px_8px_10px_#5f9ea0]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1c4243]"

                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1c4243]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                        Login
                    </button>
                    <div className="mt-4 text-center">
                        <span className="text-gray-700">Don't have an account yet? </span>
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;