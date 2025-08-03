const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/api/user", (req, res) => {
    res.json({
        name: "Sagar Thayat",
        referralCode: "sagar2025",
        donations: 1500,
        rewards: ["T-Shirt", "Certificate", "Shoutout"],
    });
});

app.get("/api/leaderboard", (req, res) => {
    res.json([
        { name: "Aarav", donations: 2500 },
        { name: "Sagar", donations: 1500 },
        { name: "Kriti", donations: 1000 },
    ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
