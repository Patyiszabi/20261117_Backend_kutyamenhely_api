import { adatok } from "../adatok.js";
export function osszesKutya(fajta) {
  console.log(`   service: osszesKutya(${fajta ?? ""})`);
  if (fajta === undefined) {
    return adatok.kutyak;
  }
  return adatok.kutyak.filter((k) => k.fajta === fajta);
}
export function kutyaAzonositoval(id) {
  console.log(`   service: kutyaAzonositoval(${id})`);
  return adatok.kutyak.find((k) => k.id === id);
}
export function vanIlyenNevu(nev) {
  console.log(`   service: vanIlyenNevu(${nev})`);
  return adatok.kutyak.some((k) => k.nev === nev);
}
export function ujKutya(nev, fajta, kor) {
  console.log(`   service: ujKutya(${nev}, ${fajta}, ${kor})`);
  const kutya = { id: adatok.kovetkezoId, nev, fajta, kor };
  adatok.kovetkezoId += 1;
  adatok.kutyak.push(kutya);
  return kutya;
}
