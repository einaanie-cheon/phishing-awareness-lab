<!DOCTYPE html>
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

</html>