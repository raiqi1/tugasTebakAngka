 console.clear();

//  const umur = 60;
//  const kondisiAnd = umur < 50 && "masih muda";
//  console.log(kondisiAnd)

//  const kondisiOr = umur > 50 || "Hello";
//  console.log(kondisiOr)

const listBuku = [
    {
        judul : "doraemon",
        harga : 200000 
    },
    {
        judul : "naruto",
        harga : 100000
    },
    {
        judul : "sinchan",
        harga : 150000
    },
    {
        judul : "ninja hatori",
        harga : 90000
    }
];
// const listJudul = listBuku.map((buku)=>buku.harga);
// console.log(listJudul)

const filterBuku = listBuku.filter((buku)=>buku.harga>100000);
console.log(filterBuku)