const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan panjang substring: ", (lenght) => {
            // Konversi nilai indeks dan panjang ke tipe Number
            startIndex = Number(startIndex);
            lenght = Number(lenght);
            // Gunakan method substr untuk mengambil substring dari startIndex dengan panjang length
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${lenght}: ${substringResult}`);
            rl.close();
        });
    });
});