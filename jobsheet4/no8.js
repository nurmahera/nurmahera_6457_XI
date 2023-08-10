const readline = require(`readline`);
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});
rl.question("Masukan sebuah kalimat: ",(kalimat) => {
    rl.question("Masukan kata yang ingin anda cari: ",(kataCari) => {
        // gunakan method lastIndexOf untuk mencari dalam kalimat
        const indeksKataTerakhir = kalimat.lastIndexOf(kataCari);
        if (indeksKataTerakhir !== -1) {
            console.log(`kata '${kataCari}' ditemukan pada indeks terakhir: ${indeksKataTerakhir}`);
        } else {
            console.log(`kata '${kataCari}' tidak ditemukan dalam kalimat.`);
        }
    });
});