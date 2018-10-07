function tentukanDeretGeometri(arr){
    var deret = arr[1] / arr[0];
    var bool = true;
    for(var i = 0; i < arr.length-1; i++){
        
        if(deret == arr[i+1] / arr[i]){
            bool = true;
        } else {
            bool = false;
            break;
        }

    }
    return bool;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // true
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // false
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false