document.getElementById("btn").addEventListener("click", function () {
  const skin = document.getElementById("skinType").value;
  const problem = document.getElementById("problem").value;
  const result = document.getElementById("result");

  if (skin === "" || problem === "") {
    result.innerHTML = "<strong>Lütfen cilt tipi ve problemi seçiniz.</strong>";
    return;
  }

  let advice = "";

  if (skin === "yagli" && problem === "akne") {
    advice = `
      <h3>Yağlı Cilt & Akne Bakımı</h3>

      <h4>🌞 Sabah Rutini</h4>
      <ul>
        <li>Yağsız jel temizleyici</li>
        <li>Salisilik asitli tonik</li>
        <li>Su bazlı nemlendirici</li>
        <li>SPF 30+ güneş kremi</li>
      </ul>

      <h4>🌙 Akşam Rutini</h4>
      <ul>
        <li>Yüz temizleme jeli</li>
        <li>Niacinamide serum</li>
        <li>Hafif jel nemlendirici</li>
      </ul>

      <h4>⭐ Ürün Önerileri</h4>
      <ul>
        <li>CeraVe Foaming Cleanser</li>
        <li>The Ordinary Niacinamide</li>
        <li>La Roche-Posay Effaclar</li>
      </ul>

      <p><strong>İpucu:</strong> Sivilceleri sıkma, haftada 1 kil maskesi yeterlidir.</p>
    `;
  } 
  else if (skin === "kuru" && problem === "kuruluk") {
    advice = `
      <h3>Kuru Cilt & Kuruluk Bakımı</h3>

      <h4>🌞 Sabah Rutini</h4>
      <ul>
        <li>Krem temizleyici</li>
        <li>Hyaluronik asit serum</li>
        <li>Yoğun nemlendirici</li>
        <li>SPF içeren krem</li>
      </ul>

      <h4>🌙 Akşam Rutini</h4>
      <ul>
        <li>Nazik temizleyici</li>
        <li>Seramid içerikli serum</li>
        <li>Besleyici gece kremi</li>
      </ul>

      <h4>⭐ Ürün Önerileri</h4>
      <ul>
        <li>CeraVe Moisturizing Cream</li>
        <li>La Roche-Posay Lipikar</li>
        <li>The Ordinary Hyaluronic Acid</li>
      </ul>

      <p><strong>İpucu:</strong> Yüzünü sıcak suyla yıkama.</p>
    `;
  } 
  else if (skin === "karma" && problem === "leke") {
    advice = `
      <h3>Karma Cilt & Leke Bakımı</h3>

      <h4>🌞 Sabah Rutini</h4>
      <ul>
        <li>Hafif jel temizleyici</li>
        <li>C vitamini serum</li>
        <li>Hafif nemlendirici</li>
        <li>Yüksek korumalı güneş kremi</li>
      </ul>

      <h4>🌙 Akşam Rutini</h4>
      <ul>
        <li>Yüz temizleme jeli</li>
        <li>AHA / leke serumu</li>
        <li>Onarıcı gece kremi</li>
      </ul>

      <h4>⭐ Ürün Önerileri</h4>
      <ul>
        <li>La Roche-Posay Vitamin C10</li>
        <li>The Ordinary Alpha Arbutin</li>
        <li>Bioderma Pigmentbio</li>
      </ul>

      <p><strong>İpucu:</strong> Leke ürünleri kullanırken güneş kremi şarttır.</p>
    `;
  } 
  else {
    advice = `
      <h3>Genel Cilt Bakım Önerileri</h3>
      <ul>
        <li>Cilt tipine uygun ürünler kullan</li>
        <li>Nemlendirmeyi ihmal etme</li>
        <li>Güneş kremini günlük uygula</li>
        <li>Bol su iç ve düzenli uyu</li>
      </ul>
    `;
  }

  result.innerHTML = advice;
});

/* İLETİŞİM FORMU */
document.getElementById("send").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (name === "" || email === "") {
    message.style.color = "red";
    message.innerText = "Lütfen tüm alanları doldurun.";
  } else {
    message.style.color = "green";
    message.innerText = "Mesajınız başarıyla gönderildi!";
  }
});