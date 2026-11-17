export function ervenyesKutya(req, res, next) {
    console.log("   middleware: ervenyesKutya");
const { nev, fajta, kor } = req.body;
if (!nev || !fajta) {
return res.status(400).json({ hiba: "A nev és a fajta kötelező." });
}
if (kor !== undefined && !(Number.isInteger(kor) && kor >= 0)) {
return res.status(400).json({ hiba: "A kor nem negatív egész szám legyen." });
}
next();
}
