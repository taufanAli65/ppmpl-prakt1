function tambah(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input tidak valid');
    }
    return a + b;
}

function kali(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input tidak valid');
    }
    return a * b;
}

function kurang(a, b)
{
    return a - b;
}
function bagi(a, b)
{
    return a / b;
}
function bagi(a, b) {
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
}

module.exports = { tambah, kali, kurang, bagi };