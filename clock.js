const alinanAd = prompt("Lütfen isminizi girin:");
document.getElementById("myName").innerHTML = alinanAd;

function showDateTime() {
    let now = new Date();

    // Saat, dakika ve saniyeyi al
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    // Günleri dizi olarak tanımla
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayName = days[now.getDay()]; // Haftanın gününü al

    // Saat ve gün bilgisini birleştir
    let timeString = `${dayName}, ${hours}:${minutes}:${seconds}`;

    // "myClock" ID'li div içine yazdır
    document.getElementById("myClock").textContent = timeString;
}

// Sayfa yüklendiğinde çalıştır
showDateTime();

// Her saniye güncelle
setInterval(showDateTime, 1000);



