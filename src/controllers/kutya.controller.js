import * as szolgaltatas from "../services/kutya.service.js";
export function listaz(req, res) {
    console.log("   controller: listaz");
const { fajta } = req.query;
res.json(szolgaltatas.osszesKutya(fajta));
}
export function egy(req, res) {
const id = Number(req.params.id);
console.log(`   controller: egy, id = ${id}`);
const kutya = szolgaltatas.kutyaAzonositoval(id);
if (!kutya) {
return res.status(404).json({ hiba: "Nincs ilyen kutya." });
}
res.json(kutya);
}
export function letrehoz(req, res) {
    console.log("   controller: letrehoz");
const { nev, fajta, kor } = req.body;
if (szolgaltatas.vanIlyenNevu(nev)) {
return res.status(409).json({ hiba: "Már van ilyen nevű kutya." });
}
const kutya = szolgaltatas.ujKutya(nev, fajta, kor);
res.status(201).json(kutya);
}
