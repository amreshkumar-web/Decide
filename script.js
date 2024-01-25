let arr=[];
let hs=new Set();
let input=document.getElementById("input")
let list=document.getElementById("list")

document.getElementById("add").addEventListener('click' , function(){
    var element2=input.value;
    var element=element2.trim();

         if(!hs.has(element) && element!=""){
            hs.add(element);
            arr.push(element);
            input.value="";
         let ele=document.createTextNode(element);
         list.appendChild(ele);
         let br = document.createElement('br');
            list.appendChild(br);
         }
         else{
            alert("Invalid input or Item already added");
         }
})

document.getElementById("submit").addEventListener('click' , function(){
    document.getElementById("win").innerHTML=arr[Math.floor(Math.random()*arr.length)];
})