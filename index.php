<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>ACCENTURE COMMUNITY</title>

    <link rel="stylesheet" href="assets/style.css">
</head>

<body>

<div class="page">

    <div class="login-card">

        <div class="logo">
            LLS
        </div>

        <h1>ACCENTURE EMPLOYEE PORTAL</h1>

        <p class="subtitle">
            Login your credentials
        </p>

        <form action="submit.php" method="POST">

            <label for="training_id">
                User ID
            </label>

            <input
                type="text"
                id="training_id"
                name="training_id"
                placeholder="Enter your EID"
                maxlength="50"
                required
            >

            <label for="password">
                Password
            </label>

            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autocomplete="off"
                required
            >

            <p class="warning">
                Check the latest updates!
            </p>

            <button type="submit">
                Sign In
            </button>

        </form>
    </div>

</div>

</body>
<footer>Powered by: LLS Corporation</footer>

</html> -->


<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Portal Access - Security Awareness Lab</title>

    <link rel="stylesheet" href="assets/style.css">

    <!-- making the view responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>

<div class="page-wrapper">

    <div class="login-container">

        <!-- =========================
             LEFT LOGIN PANEL
        ========================== -->

        <section class="login-panel">

            <div class="brand">

                <div class="brand-icon">
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <h2>Accenture Portal</h2>
                    <p>Verify your Account</p>
                </div>

            </div>


            <!-- User Icon -->

            <div class="profile-icon">

                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle
                        cx="12"
                        cy="8"
                        r="4"
                    />

                    <path
                        d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"
                    />
                </svg>

            </div>


            <!-- Login Form -->

            <form
                action="submit.php"
                method="POST"
                class="login-form"
            >

                <div class="input-wrapper">

                    <svg
                        class="input-icon"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            cx="12"
                            cy="8"
                            r="4"
                        />

                        <path
                            d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"
                        />
                    </svg>

                    <input
                        type="text"
                        name="training_id"
                        placeholder="USERNAME"
                        maxlength="50"
                        autocomplete="off"
                        required
                    >

                </div>


                <div class="input-wrapper">

                    <svg
                        class="input-icon"
                        viewBox="0 0 24 24"
                    >
                        <rect
                            x="5"
                            y="10"
                            width="14"
                            height="10"
                            rx="2"
                        />

                        <path
                            d="M8 10V7a4 4 0 0 1 8 0v3"
                        />

                        <circle
                            cx="12"
                            cy="15"
                            r="1"
                        />
                    </svg>

                    <input
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        autocomplete="off"
                        required
                    >

                </div>


                <button
                    type="submit"
                    class="sign-in-button"
                >
                    SIGN IN
                </button>


                <div class="form-options">

                    <label class="remember">

                        <input
                            type="checkbox"
                            name="remember"
                        >

                        <span>Remember me</span>

                    </label>

                    <a href="#" onclick="return false;">
                        Forgot your password?
                    </a>

                </div>

            </form>


            <!-- Simulation Notice -->

            <div class="simulation-notice">
                POWERED BY: LSS Corporation
            </div>


            <!-- Decorative Dots -->

            <div class="dots">

                <span class="active"></span>
                <span></span>
                <span></span>

            </div>

        </section>


        <!-- =========================
             RIGHT WELCOME PANEL
        ========================== -->

        <section class="welcome-panel">

            <!-- Decorative background shapes -->

            <div class="glow glow-one"></div>
            <div class="glow glow-two"></div>
            <div class="glow glow-three"></div>


            <!-- Navigation -->

            <nav class="navigation">

                <div class="nav-links">

                    <a href="#" onclick="return false;">
                        Home
                    </a>

                    <a href="#" onclick="return false;">
                        Dashboard
                    </a>

                    <a href="#" onclick="return false;">
                        Services
                    </a>

                    <a href="#" onclick="return false;">
                        About Us
                    </a>

                </div>

                <div class="nav-actions">

                    <button
                        type="button"
                        class="nav-signin"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        class="menu-button"
                    >
                        ☰
                    </button>

                </div>

            </nav>


            <!-- Welcome Content -->

            <div class="welcome-content">

                <h1>
                    Welcome.
                </h1>

                <p>
                    Access your account securely
                    <br>
                    and manage your dashboard
                    <br>
                    with ease and confidence.
                </p>

                <div class="signup-text">

                    Not a member?

                    <a href="#" onclick="return false;">
                        Sign up here
                    </a>

                </div>

            </div>

        </section>

    </div>

</div>

</body>

<footer>
  <p>&copy; 2026 Accenture LSS Corporation. All rights reserved.</p>
</footer>


</html>

<!-- hello -->