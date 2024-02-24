import React from 'react'

const code = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","p","Q","R","S","T","U","V","W","X","Y","Z",
"1","2","3","4","5","6","7","8","9","1","0" ]
function r(i){ 
    return(code[Math.floor(Math.random() * code.length)])
  }
export default function Codegen() {
  return (
    r()+r()+r()+r()+r()+r()+r()+r()+r()+r()+r()+r()+r()+"-"+r()+r()+r()+r()+r()+r()
  )
}
