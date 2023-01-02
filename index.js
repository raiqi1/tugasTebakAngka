// Belajar Desctructuring 
// const listBuah = ["jeruk","salak","mangga","apel","anggur"];
// const buah1 = listBuah[0];
// const buah2 = listBuah[1];
// console.log(buah1,buah1);

// const [buahPertama,buahKedua,buahKetiga, ...buahLainnya]= listBuah;
// console.log(buahPertama,buahKedua,buahKetiga,buahLainnya);

const buku = {
    judul : "matahari pagi",
    harga : 25000,
    halaman : 100,
    bab : 50,
    pengarang:{
        nama : "riha gapi",
        negara : "indonesia"
    }
};
// const judul = buku.judul;
// const harga = buku.harga;
// console.log(judul,harga);

// const{judul,harga, ...infoLainnya} = buku;
// console.log(judul,harga,infoLainnya);

// function printInfoBuku({judul,harga,halaman:hal,bab,penerbit="intermedia"}){
//     console.log(judul,harga,hal,bab,penerbit)
// }
// printInfoBuku(buku)

// function printBuku({ judul, harga, pengarang: { nama } }) {
//     const pesan = `Buku ${judul} karya ${nama} dijual dengan harga ${harga}`;
//     console.log(pesan);
//   }printBuku(buku);

// const produk = {
//     Produk1 : "mie burung dara",
//     harga1 : 10000,
//     ukuran1 :"1 bungkus",
//     Produk2 :"indomie",
//     harga2 :3000,
//     ukuran2 :"1 bungkus"
// };
// function printProduk({ Produk1, ukuran1,harga1,Produk2,harga2,ukuran2 }) {
//     const pesan = `produk ${Produk1} ${ukuran1 } harganya ${harga1} lebih mahal dibanding produk ${Produk2} ${ukuran2} dengan harga${harga2}`;
//     console.log(pesan);
//   }printProduk(produk);

// const listMakanan = ["mie","ayam","daging","buah","beras"];
// const buah1 = listMakanan[0];
// const buah2 = listMakanan[1];
// const buah3 = listMakanan[2];
// const buah4 = listMakanan[3];
// const buah5 = listMakanan[3];
// console.log(buah1,buah2);

// const [mkn1,mkn2,mkn3,mkn4,mkn5,mkn6="roti"]= listMakanan;
// console.log(mkn1,mkn2,mkn3,mkn4,mkn5,mkn6);