const click = document.querySelector("#click");

var ok;

click.addEventListener("click", function () {
  click.addEventListener = ok = true;
  while (ok === true) {
    var nama = prompt("Masukan Nama:");

    alert("Hii" + " " + nama);
    alert("ScreenRecord ya!!!");
    alert("Kalo udah selesai nanti kirim ke yang ngasih link ini");
    alert("Siap belom ??");
    alert("Kalo udah siap mari kita mulai");
    alert("Pertama dan yang paling utama");
    alert("Saya akan mengucapkan terimakasih telah membuka link ini");
    alert("Yang ke dua terimakasih udah merekam ini");
    alert("Sekarang mari kita ke pembahasan nya");
    alert("Saya cuma mau bilang kalo sekarang lagi hujan");
    alert("Awkwkwkwkwkkwkwkwkwkwkwkwkwk");

    ok = confirm("Udahan apa ngulang lagi ? kalo udahan cancle aja hoke");
  }

  alert("Selesai");
});
