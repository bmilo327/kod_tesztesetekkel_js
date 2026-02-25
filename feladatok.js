export function egyedi_betuk(szoveg = "") {
  // ide kell írni a megoldást ciklussal és elágazással
  const lista = [];
  for (let index = 0; index < szoveg.length; index++) {
    let betu = szoveg[index].toLowerCase();
    if (/^[a-záéíóöőúüű]$/.test(betu) && !lista.includes(betu)){
      lista.push(betu);
    }  
    
  }
  lista.sort();
  console.log(lista);
  return lista;
}
