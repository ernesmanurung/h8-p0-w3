function pasanganTerbesar(num){
    var angka = num.toString();
    var tiapAngka = angka.split('');
    var result = '';
  
    for(i = 0; i <= tiapAngka.length; i++){
        if(result < (tiapAngka[i] + tiapAngka[i+1])){
          result = (tiapAngka[i] + tiapAngka[i+1])
        }
      }
      return result;
    }
  
  // TEST CASES
    console.log(pasanganTerbesar(641573)); // 73
    console.log(pasanganTerbesar(12783456)); // 83
    console.log(pasanganTerbesar(910233)); // 91
    console.log(pasanganTerbesar(71856421)); // 85
    console.log(pasanganTerbesar(79918293)); // 99
    console.log(pasanganTerbesar(91828282882991));