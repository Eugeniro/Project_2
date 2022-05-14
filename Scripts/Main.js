const LeftButton=document.querySelectorAll('.Left_Button')
console.log(LeftButton)
LeftButton.forEach((e)=>{
    e.addEventListener("click",()=>
    {

        window.location="News.html"

    })
})