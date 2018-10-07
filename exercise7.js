function hitungJumlahKata(kalimat){
    var jumlahKata = kalimat.split(' ');
    return jumlahKata.length;
  }
  
  console.log(hitungJumlahKata('I have a dream'));