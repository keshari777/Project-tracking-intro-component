function changeIcon(){
   var img=document.getElementById('icon').src;
   var navbar=document.querySelector('nav');
    
   if(img.indexOf('icon-hamburger.svg')!=-1){
   document.getElementById('icon').src='./images/icon-close.svg';
    navbar.className+="responsive";
    
   }
    else{
    document.getElementById('icon').src='./images/icon-hamburger.svg';
    navbar.classList.remove("responsive");
    }
}