const express = require("express");
const axios = require("axios");

const app = express();

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK;


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/messages", async (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    const ip = req.ip;

    await axios.post(DISCORD_WEBHOOK, {
        content: `**New Message**\n👤 ${name}\n💬 ${message}\n🌐 IP: ${ip}`
    });
    console.log("IP:", ip);
    res.redirect("https://learn-space-lilac.vercel.app/");
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});