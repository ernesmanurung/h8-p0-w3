function balikString(str) {
  var s = '';
  for(var i = str.length-1; i>=0; i--){ 
    s += str[i];
  }
  return s;
}

str = ''
console.log(balikString('Hello World!'));

