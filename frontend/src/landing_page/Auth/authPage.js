import React, { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Auth() {
const [searchParams] = useSearchParams();

const [isLogin, setIsLogin] = useState(
  searchParams.get("mode") === "login"
);
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

const [showPassword, setShowPassword] = useState(false);

const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // ---------------- SIGNUP ----------------

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://zerodha-clone-wz77.onrender.com/signup",
        {
          fullName: signupData.fullName,
          email: signupData.email,
          password: signupData.password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        window.open("https://YOUR-DASHBOARD-NAME.onrender.com", "_self");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  // ---------------- LOGIN ----------------

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    try {
      const response = await axios.post(
        "https://zerodha-clone-wz77.onrender.com/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setLoading(false);
        window.open("https://YOUR-DASHBOARD-NAME.onrender.com", "_self");
      }
    } catch (error) {
      setLoading(false);
      setMessage(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
<div className="auth-page">

<div className="left-panel">

<div className="brand">

<h1>Zerodha Clone</h1>

<p>
Trade smarter.
Invest confidently.
Manage your portfolio securely.
</p>

<div className="circle c1"></div>
<div className="circle c2"></div>

</div>

</div>

<div className="right-panel">

<div className="auth-card">

<h2>
{isLogin ? "Welcome Back 👋" : "Create Account"}
</h2>

<p className="subtitle">
{isLogin
? "Login to continue"
: "Start your investing journey"}
</p>

{message && (
<div className="alert-box">
{message}
</div>
)}

{isLogin ? (

<form onSubmit={handleLogin}>

<div className="input-group">

<input
type="email"
name="email"
placeholder="Email Address"
value={loginData.email}
onChange={handleLoginChange}
required
/>

</div>

<div className="input-group password-box">

<input
type={showPassword ? "text" : "password"}
name="password"
placeholder="Password"
value={loginData.password}
onChange={handleLoginChange}
required
/>

<span
className="eye"
onClick={() =>
setShowPassword(!showPassword)
}
>
{showPassword ? <EyeSlash /> : <Eye />}
</span>

</div>

<button
className="auth-btn"
disabled={loading}
>

{loading ? "Signing In..." : "Login"}

</button>

</form>

) : (

<form onSubmit={handleSignup}>

<div className="input-group">

<input
type="text"
name="fullName"
placeholder="Full Name"
value={signupData.fullName}
onChange={handleSignupChange}
required
/>

</div>

<div className="input-group">

<input
type="email"
name="email"
placeholder="Email Address"
value={signupData.email}
onChange={handleSignupChange}
required
/>

</div>

<div className="input-group password-box">

<input
type={
showPassword
? "text"
: "password"
}
name="password"
placeholder="Password"
value={signupData.password}
onChange={handleSignupChange}
required
/>

<span
className="eye"
onClick={() =>
setShowPassword(!showPassword)
}
>
{showPassword ? <EyeSlash /> : <Eye />}
</span>

</div>

<div className="input-group password-box">

<input
type={
showConfirmPassword
? "text"
: "password"
}
name="confirmPassword"
placeholder="Confirm Password"
value={signupData.confirmPassword}
onChange={handleSignupChange}
required
/>

<span
className="eye"
onClick={() =>
setShowConfirmPassword(
!showConfirmPassword
)
}
>
{showConfirmPassword ? (
<EyeSlash />
) : (
<Eye />
)}
</span>

</div>

<button
className="auth-btn"
disabled={loading}
>

{loading
? "Creating..."
: "Create Account"}

</button>

</form>

)}

<div className="switch-text">

{isLogin
? "Don't have an account?"
: "Already have an account?"}

<span

className="switch-link"

onClick={() => {

setMessage("");

setIsLogin(!isLogin);

}}

>

{isLogin
? " Create Account"
: " Login"}

</span>

</div>

</div>

</div>

</div>
);
}

export default Auth;