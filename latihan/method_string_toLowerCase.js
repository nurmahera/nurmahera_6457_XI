const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    // Gunakan method toLowerCase untuk mengubah kalimat menjadi huruf kecil
    const kalimatUpperCase = kalimat.toLowerCase();
    console.log(`Kalimat dalam huruf kecil: ${kalimatUpperCase}`);
    rl.close();
});