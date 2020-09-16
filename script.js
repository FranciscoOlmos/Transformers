var wrapperEle = document.body.querySelector(".wrapper");

var chrs = [
  {
    name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"
  },
  {
    name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"
  },
  {
    name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"
  },
  {
    name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"
  },
  {
    name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"
  },
  {
    name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"
  },
];

function transMaker(obj){
  var chrsEle = document.createElement("div");

     chrsEle.classList.add("character");
   chrsEle.classList.add("img");
  
      var img=document.createElement("img");
  if(obj.afl==="autobot"){
img.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
 var src = document.getElementById("header");
  src.appendChild(img);
     chrsEle.classList.add("img");
  } else{
    img.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
 var src = document.getElementById("header");
  src.appendChild(img);
     chrsEle.classList.add("img");
  }
    

  
 var nameEle=document.createElement("h12");

 nameEle.innerHTML = "Name: " + obj.name;
  
 
  
  var classEle = document.createElement("h5");
  classEle.innerHTML ="Class: " + obj.class.toUpperCase();
  
  var aflEle= document.createElement("h5");
  aflEle.innerHTML = "Afl: " + obj.afl;
    if(obj.afl==="autobot"){
     chrsEle.classList.add("autobot");
    
     chrsEle.classList.add("img");
      

  }else{
      chrsEle.classList.add("decepticon");
    }
 
var vehEle= document.createElement("h5");
  vehEle.innerHTML = "Vehicle: " + obj.vehicle;
  if(obj.vehicle==="truck"){
        vehEle.style.color="blue"


  }else if(obj.vehicle==="tank"){
            vehEle.style.color="green"

  }else if(obj.vehicle==="car"){
            vehEle.style.color="gold"

  }else{
            vehEle.style.color="white"

  }
    
   chrsEle.appendChild(nameEle);
  
  chrsEle.appendChild(classEle);
  
    chrsEle.appendChild(aflEle);
  
    chrsEle.appendChild(vehEle);
        chrsEle.appendChild(img);

  wrapperEle.appendChild(chrsEle);
    
}

for (var i=0; i<chrs.length; i++){
  transMaker(chrs[i]);
}