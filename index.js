const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const validSerials = ["ABC123", "DEF456", "GHI789"];

app.get("/api/check-serial", (req, res) => {
    const serial = req.query.serial;
    const isValid = validSerials.includes(serial);
    res.json({ valid: isValid });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server läuft auf Port ${PORT}`));