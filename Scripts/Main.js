const LeftButton=document.querySelectorAll('.Left_Button')
let NavList=document.querySelector(".Nav_List");
(window.onresize = ()=>
{
    if (window.screen.width!==window.innerWidth)
    {  
        if (window.innerWidth <= 500) {
        if (NavList)
       { NavList.remove()
        NavList="";
        document.querySelector("header").insertAdjacentHTML("beforeend",`<nav class="Nav_Burger">
        <span></span>
        <ul class="Navigation">
            <li> <a href="">about me</a> </li>
            <li> <a href="">articles</a> </li>
            <li> <a href="">gallery</a> </li>
            <li> <a href="">contact</a> </li>
        </ul>
    </nav>`)
    }

    return
      }else
      {
        if (!NavList)
        {
            document.querySelector(".Nav_Burger").remove();
            document.querySelector("header").insertAdjacentHTML("beforeend",` <nav class="Nav_List">
            <ul class="Navigation">
                <span></span>
                <li> <a href="">about me</a> </li>
                <li> <a href="">articles</a> </li>
                <li> <a href="">gallery</a> </li>
                <li> <a href="">contact</a> </li>
            </ul>
        </nav>`)
        NavList=document.querySelector(".Nav_List");
        }

      }
      return
  }else 
     { 
        if (window.screen.width <= 500) 
        {
            if (NavList)
          {  NavList.remove()
            NavList="";
            document.querySelector("header").insertAdjacentHTML("beforeend",`<nav class="Nav_Burger">
            <span></span>
            <ul class="Navigation">
                <li> <a href="">about me</a> </li>
                <li> <a href="">articles</a> </li>
                <li> <a href="">gallery</a> </li>
                <li> <a href="">contact</a> </li>
            </ul>
        </nav>`)
        }
        return
      }
      else 
    {
        if (!NavList)
        {
            document.querySelector(".Nav_Burger").remove();
            document.querySelector("header").insertAdjacentHTML("beforeend",` <nav class="Nav_List">
            <ul class="Navigation">
                <span></span>
                <li> <a href="">about me</a> </li>
                <li> <a href="">articles</a> </li>
                <li> <a href="">gallery</a> </li>
                <li> <a href="">contact</a> </li>
            </ul>
        </nav>`)
        NavList=document.querySelector(".Nav_List");
        }

    }
return}
})()

LeftButton.forEach((e)=>{
    e.addEventListener("click",()=>
    {

        window.location="News.html"

    })
})
