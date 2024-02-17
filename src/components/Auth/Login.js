import React from 'react';

function Login() {
    return (
        <div className="container">
            <h2>Login</h2>
            <form>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <div className="register-link">
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    );
}

export default Login;
