const { expect } = require('chai');
 const { tambah, kali, kurang, bagi } = require('./math');
 describe('Pengujian Fungsi Matematika', function() {
 it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
 expect(tambah(2, 2)).to.equal(4);
 });
 it('seharusnya mengembalikan -4 saat menambahkan -2 + -2', function() {
expect(tambah(-2, -2)).to.equal(-4);
});
 it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
 expect(kali(2, 3)).to.equal(6);
 });
 it('seharusnya mengembalikan 6 saat mengalikan -2 * -3', function() {
    expect(kali(-2, -3)).to.equal(6);
    });
 it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
 expect(kurang(2, 2)).to.equal(0);
 });
 it('seharusnya mengembalikan 0 saat mengurangkan -2 - -2', function() {
    expect(kurang(-2, -2)).to.equal(0);
    });
 it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
 expect(bagi(6, 3)).to.equal(2);
 });
 it('seharusnya mengembalikan -3 saat membagi -6 / 2', function() {
    expect(bagi(-6, 3)).to.equal(-2);
    });
 it('seharusnya mengembalikan error saat membagi dengan 0', function() {
 expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
 });
 it('seharusnya mengembalikan error saat input string ke fungsi tambah', function() {
    expect(() => tambah('8', 2)).to.throw('Input tidak valid');
    expect(() => tambah(8, '2')).to.throw('Input tidak valid');
});

it('seharusnya mengembalikan error saat input null ke fungsi tambah', function() {
    expect(() => tambah(null, 4)).to.throw('Input tidak valid');
    expect(() => tambah(4, null)).to.throw('Input tidak valid');
});

 });