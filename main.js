// let q = prompt("اسمك ايه؟ ");
let  s= document.querySelector(".mo");
let  bb= document.querySelector(".ff");
let  pp= document.querySelector(".pp");
let  pp2= document.querySelector(".pp2");
let  b= document.querySelector(".text");
let mo = document.querySelector(".one");
let oo = document.querySelector(".oo");
let mmm = document.querySelector(".mmm");
let moo= document.querySelector(".moo");
let zz= document.querySelector(".zz");
let zz1= document.querySelector(".zz1");
let mooo= document.querySelector(".mooo");
let zz2= document.querySelector(".zz2");
let m =  oo.value;
mo.onclick =  function(){
     if(oo.value.length!="0")
     {
          b.style.display ="block";
          s.innerHTML = oo.value;
}
else{

     pp.style.display ="block";
}
bb.remove();
}
mmm.onclick =  function()
{
b.remove();
zz.style.display ="block";

s.innerHTML = m;
}
moo.onclick =  function()
{
b.remove();
zz.remove();
zz1.style.display ="block";
}
mooo.onclick = function (){
zz1.remove();
     zz2.style.display ="block";
}

