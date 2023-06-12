function zmienKolor() {
    var div = document.getElementById("zmieniajacyKolor");
    var kolor = losowyKolor();
    div.style.backgroundColor = kolor;
  }

  function losowyKolor() {
    var kolor = "#";
    var znaki = "0123456789ABCDEF";

    for (var i = 0; i < 6; i++) {
      kolor += znaki[Math.floor(Math.random() * 16)];
    }

    return kolor;
  }