function rot13(str) {  
  let newStr = "";
  for (let i = 0; i<str.length; i++){
    if (str[i] === " " || str[i] === "." || str[i] === "," || str[i] === "?" || str[i] === "!"){
      newStr += str[i];
    } else if (str.charCodeAt(i) <= 77){
      newStr += String.fromCharCode(str.charCodeAt(i) + 13);
    } else newStr += String.fromCharCode(str.charCodeAt(i) - 13);
 }
  return newStr;
}

rot13("LBH QVQ VG!");