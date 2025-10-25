import React, { useState } from "react";
import "./Auth.css";

function Auth() {
    const [mode, setMode] = useState("signup");
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setForm({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (mode === "signup") {
            if (!form.username || !form.email || !form.password) {
                setMessage("Please complete all required fields.");
                return;
            }
            if (form.password !== form.confirmPassword) {
                setMessage("Passwords do not match.");
                return;
            }

            setMessage("✅ Sign up successful! Redirecting to Login...");
            setTimeout(() => {
                setMode("login");
                resetForm();
                setMessage("");
            }, 1200);
        } else {
            if (!form.email || !form.password) {
                setMessage("Enter email and password to login.");
                return;
            }
            setMessage("✅ Login successful! Redirecting to SignUp...");
            setTimeout(() => {
                setMode("signup");
                resetForm();
                setMessage("");
            }, 1200);
        }
    };
    return (
        <div className={`auth-container ${mode === "login" ? "login-mode" : ""}`}>
            <div className="form-box">
                <div className="signup-form form-section">
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn primary-btn">
                            Sign Up
                        </button>
                    </form>
                    <p className="switch-text">
                        Already have an account?{" "}
                        <span onClick={() => setMode("login")}>Login</span>
                    </p>
                    {message && <p className="message">{message}</p>}
                </div>
                <div className="login-form form-section">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn primary-btn">
                            Login
                        </button>
                    </form>
                    <p className="switch-text">
                        Don’t have an account?{" "}
                        <span onClick={() => setMode("signup")}>Sign Up</span>
                    </p>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h3>Welcome Back!</h3>
                    <p>To keep connected, please login here</p>
                    <button className="btn outline-btn" onClick={() => setMode("login")}>
                        Login
                    </button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h3>Hello, Friend!</h3>
                    <p>Enter your details and start your journey with us</p>
                    <button className="btn outline-btn" onClick={() => setMode("signup")}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Auth;
