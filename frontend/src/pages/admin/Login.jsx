

import '../../assets/css/admin/login.css'

function Login() {
    return(
       <div>
  {/* NAV */}
  <nav className="store-nav">
    
    <a href="#" className="brand">
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
      </svg>
      Village Grocery
    </a>
    
  </nav>
  {/* MAIN */}
  <div className="login-wrapper">
    {/* LEFT IMAGE */}
    <div className="login-image">
      <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" alt="Fresh grocery" />
      <div className="login-image-overlay" />
      <div className="login-image-caption">
        <p>Fresh — Local — Nordic</p>
        <h2>Good food,<br />simply made.</h2>
      </div>
    </div>
    {/* RIGHT FORM */}
    <div className="login-form-panel">
      <div className="login-box">
        <p className="eyebrow">Welcome back</p>
        <h1>Sign in</h1>
        <p className="subtitle">Access your grocery account to continue.</p>
        <div className="divider" />
        {/* Alert */}
        <div className="nordic-alert mb-3" id="loginAlert">
          Incorrect email or password. Please try again.
        </div>
        <form id="loginForm" noValidate>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
          </div>
          {/* Password */}
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <div className="input-group-addon">
              <input type="password" className="form-control" id="password" placeholder="••••••••" required style={{paddingRight: '2.8rem'}} />
              <button type="button" className="toggle-pass" onclick="togglePassword()" title="Show / hide password">
                <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Remember / Forgot */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>
          {/* Submit */}
          <button type="submit" className="btn-nordic mb-3">Sign In</button>
        </form>
        {/* OR */}
        <div className="or-sep my-3">or</div>
        {/* Google */}
        <a href="#" className="btn-nordic-outline mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </a>
        {/* Register */}
        <p className="register-line">
          New to Nordics? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  </div>
</div>

    );
}

export default Login;