import React, { useState } from 'react';
import './LogInPage.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        user: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', credentials);
       
    };

    return (
        <>
            <Header />
            <div className="heroOfLogin">
                <div className="login-container">
                    <h2>Log In</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <label>Username & Email</label>
                        <input
                            type="text"
                            name="user"
                            value={credentials.user}
                            onChange={handleChange}
                            required
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Log in</button>
                    </form>
                    <p>
                        Create an account? <Link to="/SignUpPage">Sign up</Link> here
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginForm;
