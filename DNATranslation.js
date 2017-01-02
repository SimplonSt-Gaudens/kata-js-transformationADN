var tabbase = ["A", "T", "C", "G"];
var base = prompt("Veuillez entrer A, T, C, G");
var splited = base.split("");
var result = [];

for (var i=0; i<splited.length; i++){
  if (splited[i]=="A") {
    result.push(tabbase[1]);
  }
  else if (splited[i]=="T") {
    result.push(tabbase[0]);
  }
    else if (splited[i]=="C") {
    result.push(tabbase[3]);
  }
    else if (splited[i]=="G") {
    result.push(tabbase[2]);
  }
}

var joined = result.join(""); 
console.log(joined);


