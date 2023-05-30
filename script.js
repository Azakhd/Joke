let circle = document.querySelector('.circle');
let index = 0
circle.addEventListener('mouseover', () => {
   ++index
   
   circle.style.transform = "translate(0px,100px)"
   console.log(index)
   if(index==1){
      circle.style.transform = "translate(-70px,0px)"
   }
   if (index ==2) {
      circle.style.transform = "translate(80px,0px)"
   }
   if(index == 3){
      index = 0
   }
   
})

