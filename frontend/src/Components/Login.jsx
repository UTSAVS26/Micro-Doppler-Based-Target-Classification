import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation (to be replaced with real validation logic)
        if (!email || !password) {
            setError("Please fill in both fields.");
            return;
        }

        // Simulate authentication process
        // Replace with real authentication logic
        if (email === "test@example.com" && password === "password") {
            navigate("/dashboard"); // Redirect to the dashboard or other page upon successful login
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="flex items-center justify-center h-[920px]">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff951d]"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff951d]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-[#ff951d]"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;