const express = require("express");
const path = require("path");
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;

const SUPABASE_KEY =
    process.env.SUPABASE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const app = express();
const PORT = process.env.PORT || 3000;

// --------------------------------------------------
// Middleware
// --------------------------------------------------

app.use(express.json());

app.use(express.urlencoded({
    extended: false
}));

// --------------------------------------------------
// Serve frontend
// --------------------------------------------------

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);

if (!SUPABASE_URL || !SUPABASE_KEY) {

    console.warn(
        "Supabase URL or key is missing. Set SUPABASE_URL/SUPABASE_KEY or NEXT_PUBLIC_* variables."
    );

}

// --------------------------------------------------
// LOGIN
// --------------------------------------------------

app.post(
    "/api/login",
    async (req, res) => {

        try {

            const username =
                String(
                    req.body.username || req.body.training_id || ""
                )
                .trim();

            const password =
                String(
                    req.body.password || ""
                );

            if (!username || !password) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Username and password are required."

                });

            }

            // ------------------------------------------
            // Check username and password in Supabase
            // ------------------------------------------

            const { data, error } =
                await supabase

                    .from("phishing")

                    .select("username, password")

                    .eq("username", username)

                    .maybeSingle();

            if (error) {

                console.error(
                    "Supabase login error:",
                    error.message
                );

                return res.status(500).json({

                    success: false,

                    message:
                        "Database error."

                });

            }

            // ------------------------------------------
            // Incorrect credentials
            // ------------------------------------------

            if (!data || data.password !== password) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid username or password."

                });

            }

            // ------------------------------------------
            // Successful login
            // ------------------------------------------

            const loginTimestamp =
                new Date().toISOString();

            const { error: loginsError } =
                await supabase

                    .from("logins")

                    .insert([
                        {
                            username,
                            timestamp: loginTimestamp
                        }
                    ]);

            if (loginsError) {

                console.error(
                    "Supabase login session insert error:",
                    loginsError.message
                );

                return res.status(500).json({

                    success: false,

                    message:
                        "Login succeeded, but recording login session failed."

                });

            }

            console.log(
                Successful login: ${username}
            );

            return res.json({

                success: true,

                message:
                    "Login successful.",

                login: {
                    username,
                    timestamp: loginTimestamp
                }

            });

        } catch (error) {

            console.error(
                "Login error:",
                error.message
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to process login."

            });

        }

    }
);

// --------------------------------------------------
// Security-awareness simulation endpoint
// --------------------------------------------------

app.post(
    "/api/simulation",
    async (req, res) => {

        try {

            const trainingId =
                String(
                    req.body.training_id || ""
                )
                .trim()
                .slice(0, 50);

            if (!trainingId) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Training ID is required."

                });

            }

            /*
             * IMPORTANT:
             *
             * We intentionally DO NOT read,
             * process, or store the password.
             *
             * This is a security-awareness
             * simulation only.
             */

            const { data, error } =
                await supabase

                    .from("simulation_events")

                    .insert([
                        {
                            training_id: trainingId,
                            event_type: "SIMULATION_SUBMISSION"
                        }
                    ])

                    .select("id")

                    .single();

            if (error) {

                console.error(
                    "Supabase simulation insert error:",
                    error.message
                );

                return res.status(500).json({

                    success: false,

                    message:
                        "Unable to record simulation event."

                });

            }

            const timestamp =
                new Date().toISOString();

            return res.json({

                success: true,

                eventId:
                    data.id,

                trainingId,

                timestamp

            });

        } catch (error) {

            console.error(
                "Simulation logging error:",
                error.message
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to record simulation event."

            });

        }

    }
);

// --------------------------------------------------
// Supabase health check
// --------------------------------------------------

app.get(
    "/api/supabase-test",
    async (req, res) => {

        try {

            const { data, error } =
                await supabase

                    .from("phishing")

                    .select("username")

                    .limit(1);

            if (error) {

                console.error(
                    "Supabase error:",
                    error.message
                );

                return res.status(500).json({

                    success: false,

                    error:
                        error.message

                });

            }

            return res.json({

                success: true,

                data

            });

        } catch (error) {

            console.error(
                "Supabase test error:",
                error.message
            );

            return res.status(500).json({

                success: false,

                error:
                    error.message

            });

        }

    }
);

// --------------------------------------------------
// Health check
// --------------------------------------------------

app.get(
    "/api/health",
    async (req, res) => {

        try {

            const { error } =
                await supabase

                    .from("phishing")

                    .select("username")

                    .limit(1);

            if (error) {

                return res.status(500).json({

                    status: "error",

                    database:
                        "disconnected"

                });

            }

            res.json({

                status: "ok",

                database:
                    "connected"

            });

        } catch (error) {

            res.status(500).json({

                status: "error",

                database:
                    "disconnected"

            });

        }

    }
);

// --------------------------------------------------
// Start server
// --------------------------------------------------

app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            "Security Awareness Lab running on port ${PORT}"
        );

    }
);