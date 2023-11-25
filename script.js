const tambah = document.querySelector(".tambah");
const kurang = document.getElementById("kurang");
const total = document.getElementById("total");
const menu = document.getElementById("menu");
const price = document.querySelector("#price");
const btn = document.getElementById("btn");
const totalBayar = document.getElementById("totalBayar");

let jumlah = 0;
// tambah.onclick = function () {
//   total.innerHTML = jumlah++;
// };

tambah.addEventListener("click", () => {
  hasil = jumlah += 1;

  console.log({ hasil });
  total.innerHTML = hasil;

  price.value = price.value * hasil;

  value = parseInt(price.value);
  console.log({ value });
});

kurang.onclick = function () {
  total.innerHTML = jumlah -= 1;

  // price.value = price.value / hasil;

  if (hasil < 0) hasil = 0;
};

// jika klik bayar maka jumlah dan harga

btn.onclick = function () {
  totalBayar.harga.innerHTML = harga++;
};
