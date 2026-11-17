export function nemTalalhato(req, res) {
    console.log("   middleware: nemTalalhato");
    res.status(404).json({ hiba: "Nincs ilyen végpont." });
}