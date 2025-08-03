import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521790361124-634f79f8468e?auto=format&fit=crop&w=1950&q=80')` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Centered card */}
            <div className="relative z-10 flex items-center justify-center min-h-screen animate-fade-in">
                <div className="backdrop-blur-xl bg-white/20 border border-white/30 text-white shadow-lg rounded-2xl p-10 max-w-sm w-full">
                    <h1 className="text-3xl font-bold mb-2">🚀 Intern Portal Login</h1>
                    <p className="text-sm text-white/80 mb-6">Log in as a dummy user to continue</p>
                    <button
                        onClick={handleLogin}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2.5 rounded-lg shadow-md transition duration-300"
                    >
                        Login as Dummy User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
