import { useState } from 'react'
import './LoginForm.css';

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    function changePasswordVisibility() {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <div className="input-box">
                <input
                    type="email"
                    placeholder="Email"
                />
            </div>

            <div className="input-box">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                />

                <button
                    className="password-button"
                    onClick={changePasswordVisibility}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>

            <button className="main-button">
                Login
            </button>

            <button className="main-button">
                Sign up
            </button>
        </>
    );
}

export default LoginForm;