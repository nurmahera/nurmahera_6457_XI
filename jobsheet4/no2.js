const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
} );

rl.question("Masukan sebuah kalimat: ", (inputString) => {
    // Contoh property lenght
    console.log(`Panjang kalimat: ${inputString.length}`);
    rl.close();
});