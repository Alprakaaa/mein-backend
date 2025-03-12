const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

// Lade die Seriennummern aus der Datei serials.json
const serialsPath = path.join(__dirname, "serials.json");

// Falls die Datei nicht gefunden wird, initialisiere ein leeres Array
let validSerials = [];

try {
    const serialsData = JSON.parse(fs.readFileSync(serialsPath, "utf-8"));
    validSerials = serialsData.validSerials;
} catch (error) {
    console.error("❌ Fehler beim Laden der Seriennummern:", error);
}

// API-Endpunkt für die Seriennummernprüfung
app.get("/api/check-serial", (req, res) => {
    const serial = req.query.serial;
    const isValid = validSerials.includes(serial);
    res.json({ valid: isValid });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server läuft auf Port ${PORT}`));