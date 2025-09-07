import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('/api/users/login', {
                email, password
            })
            localStorage.setItem("token", data.token)
            setUser(data);
            navigate('/');
        } catch (error) {
            setError(error.response?.data?.message || "Server error")
        }
    }


    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="grid gap-8">
                <section
                id="back-div"
                className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl"
                >
                <div
                    className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2"
                >
                    <h1
                    className="text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900"
                    >
                    Log in
                    </h1>
                    {error && <p className='text-red-500 mb-4 text-center'>{error}</p>}
                    <form onSubmit={handleSubmit}className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-lg dark:text-gray-300"
                            >Email</label
                            >
                            <input
                            id="email"
                            className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required=""
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-lg dark:text-gray-300"
                            >Password</label
                            >
                            <input
                            id="password"
                            className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required=""
                            />
                        </div>
                        <a href="#" className="text-blue-400 text-sm transition hover:underline"
                            >Forget your password?</a
                        >
                        <button
                            className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="submit"
                        >
                            LOG IN
                        </button>
                    </form>
                    <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                    <p>
                        Don't have an account?
                        <Link className="text-blue-400 transition hover:underline" to="/register"
                        >Register
                        </Link>
                    </p>
                    </div>
                    <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
                        <button
                            className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                        >
                            <img
                            className="w-6 h-6"
                            loading="lazy"
                            src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                            alt="Google"
                            />
                        </button>
                        <button
                            className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                        >
                            <img
                            className="w-6 h-6"
                            loading="lazy"
                            src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                            alt="LinkedIn"
                            />
                        </button>
                        <button
                            className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                        >
                            <img
                            className="w-6 h-6 dark:invert"
                            loading="lazy"
                            src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                            alt="GitHub"
                            />
                        </button>
                        <button
                            className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                        >
                            <img
                            className="w-6 h-6"
                            loading="lazy"
                            src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                            alt="Facebook"
                            />
                        </button>
                        <button
                            className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                        >
                            <img
                            className="w-6 h-6"
                            loading="lazy"
                            src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                            alt="Twitter"
                            />
                        </button>
                        <button
                            className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
                        >
                            <img
                            className="w-6 h-6"
                            loading="lazy"
                            src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                            alt="Apple"
                            />
                        </button>
                        </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default Login