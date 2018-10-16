function groupAnimals(animals) {
  var output = [];
  var indeks = 0;
  animals.sort();
  
  for (var i = 0; i < animals.length; i++) {
    if (output.length === 0) {
      output.push([animals[i]]);
    } else if (output[indeks][0][0] === animals[i][0]) {
      output[indeks].push(animals[i]);
    } else {
      output.push([animals[i]]);
      indeks++;
    }
  }
  return output;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'burung']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log('\n');
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'burung', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
