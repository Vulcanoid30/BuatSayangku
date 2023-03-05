var musik = "Musik satu.mp3";
var background = "Foto satu.jpg";
var ucapanSurat =
  "Selamat Ulang tahun sayang. Maaf sayang waktu itu nggak bisa kasih apa-apa ke kamu waktu itu aku hanya bisa kasih kamu rasa kasih sayang aku. Maaf juga baru bikinin kamu ini sekarang jujur waktu pas kamu Ulang tahun nggak kepikiran buat bikinin kamu ini, maaf juga kalau aku sering marah-marah sama kamu aku lakuin itu ke kamu karena sayang ke kamu takut kamunya nggak ada di sisi aku. Selamat Ulang tahun yah sayanku cintaku babyboo honeyboo kesanyanganku punyaku semoga panjang umur dan sehat selalu AKU SAYANG KAMU ❤️";
var pesanWhatsapp = "Iyah Sayang makasih";

var audio = document.querySelector(".audio");
var bg = document.querySelector(".bg");
var isiSurat = document.querySelector(".pesan");
audio.src = musik;
bg.style = "background-image: url('" + background + "')";
function tampil() {
  document.querySelector(".card").style =
    "transition: 0.5s all ease;transform: scale(0);opacity: 0;";
  audio.play();
  setTimeout(typeWriter, 1000);
  setTimeout(function () {
    document.querySelector(".content2").style.display = "block";
  }, 400);
}
var i = 0;
var speed = 100;
isiSurat.value = "";
function typeWriter() {
  if (i < ucapanSurat.length) {
    isiSurat.value += ucapanSurat.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector(".wa").style.display = "block";
  }
}
var content = document.querySelector(".content");
var cpr = document.querySelector(".cpr").innerHTML;
if (cpr != "Jeluga") {
  content.style.display = "none";
}
function balasWA() {
  window.open(
    // "https://api.whatsapp.com/send?text=" + pesanWhatsapp,
    // "6282296831858"
    "https://api.whatsapp.com/send/?phone=6282296831858&text = Makasih sayangku" +
      pesanWhatsapp,
    "&type=phone_number&app_absent=0"
  );
}
