function targetTerdekat(arr){
    var x = [];
    var o = arr.indexOf('o');
    var jarak = 0;

    for(var i = 0; i < arr.length; i++){

        if(arr[i] == 'x'){
            x = i;
        } else {
            o = i;
        }

      
        if(jarak == 0 || jarak > Math.abs(x - o)){
            jarak = Math.abs(x - o);
        }
    }
    return jarak;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2