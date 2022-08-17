var plusButtonEliHiyaDifferent = document.getElementsByClassName("plus-btn");


for(let i= 0 ; i<plusButtonEliHiyaDifferent.length;i++){
  plusButtonEliHiyaDifferent[i].addEventListener("click",function(){
    plusButtonEliHiyaDifferent[i].previousElementSibling.value++
    totalPrice()
  })
}
var minusButton = document.getElementsByClassName("minus-btn"); 
for ( let i=0; i<minusButton.length ; i++) 
{
minusButton[i].addEventListener("click" , function(){
  if (minusButton[i].nextElementSibling.value >1)
  minusButton[i].nextElementSibling.value--
  totalPrice()
})
} 
var heart= document.getElementsByClassName("like");

for ( let i=0 ; i<heart.length ; i++)
{
  heart[i].addEventListener("click" , function(){
   if( heart[i].style.color==="red")
   {heart[i].style.color="black"}
   else 
   {heart[i].style.color="red"}
  })
}
var deleteButton = document.getElementsByClassName("delete");
for (let i=0 ; i<deleteButton.length ; i++)
{
  deleteButton[i].addEventListener("click" , function()
  {
    deleteButton[i].parentElement.remove();
    totalPrice()
  }
  )
}
var total = document.getElementById("finalPrice")
function totalPrice()
{var prices = document.querySelectorAll(".price");
var quants = document.querySelectorAll(".Quant");
var sum = 0 ;
for (let i=0 ; i<prices.length ; i++) 
{sum =sum +parseInt(prices[i].innerHTML)*parseInt(quants[i].value);
  
}
 return total.value =sum ; 
}
