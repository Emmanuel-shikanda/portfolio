const socials = document.getElementsByClassName("social-dropdown")[0]; 
const drop =document.getElementById("drop-down");
//click function for social media handles
socials.addEventListener("click",function(){

if(drop.style.display==="block"){
  drop.style.display="none";
}
else{
drop.style.display='block';
}

});
 //menubutton clicking  function
const menubtn = document.getElementById("menu-icon");
const menu = document.querySelector(".menu");

let isOpen = false;

menubtn.addEventListener("click",function(){

  if(isOpen === false){
  menubtn.src="img/icons8-close-90 (1).png";
  menu.style.right="0";

  isOpen = true;
  }
else{
  menubtn.src="img/icons8-hamburger-menu-100.png"
  menu.style.right="-260px";

  isOpen=false;
}

});

//alert functions on the two github and phone buttons.
const git =document.getElementsByClassName("github")[0];
git.addEventListener("click",function(){

  alert("you are leaving to the Git-hub website");

});
 
//closing the hamburger menu after every option  click

 const myMenu=document.getElementsByClassName("home")[0];
 const menu2=document.querySelector(".menu");
 const icon=document.getElementById("menu-icon")

 myMenu.addEventListener("click",function(){
  menu2.style.right="-260px";
  menubtn.src="img/icons8-hamburger-menu-100.png";
 });



 const myMenu1=document.getElementsByClassName("About")[0];
 const menu3=document.querySelector(".menu");
 const icon1=document.getElementById("menu-icon")

 myMenu1.addEventListener("click",function(){
  menu3.style.right="-260px";
  icon1.src="img/icons8-hamburger-menu-100.png";

 });

 const myMenu2=document.getElementsByClassName("Resume")[0];
 const menu4=document.querySelector(".menu");
 const icon2=document.getElementById("menu-icon")

 myMenu2.addEventListener("click",function(){
  menu4.style.right="-260px";
  icon2.src="img/icons8-hamburger-menu-100.png";

 });

 const myMenu3=document.getElementsByClassName("Projects")[0];
 const menu5=document.querySelector(".menu");
 const icon3=document.getElementById("menu-icon")

 myMenu3.addEventListener("click",function(){
  menu5.style.right="-260px";
  icon3.src="img/icons8-hamburger-menu-100.png";

 });

//showskill btn


let sbtn = $('.skill-box button');

sbtn.click(function(){
 $(this).closest('.skill-box').find('.front-skills-list').slideToggle(300)

 if($(this).text() ==='Show Stack'){
  
 $(this).text('Hide Stack')

 }else{
  $(this).text('Show Stack')
 }


})

//tech-stack

let imgb = $('.lang-skill-container img[alt="Caret-down"]')

imgb.click(function(){
 $(this).closest('.lang-skill-container').find('.lang-skill-text p').slideToggle(300);

if($(this).attr('alt')==='Caret-down'){
  $(this).attr('src','ICONS/icons8-collapse-arrow-100.png');
   $(this).attr('alt','Caret-up')
}
else{
  $(this).attr('src','ICONS/icons8-drop-down-arrow-100.png');
  $(this).attr('alt','Caret-down')
}

})



  



