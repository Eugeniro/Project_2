let CommentNews=document.querySelectorAll(`.Comment`)
let ReplyButton=document.querySelectorAll(`.Reply`);
let CommentMain=document.querySelectorAll(".Comment_Main");
const MainTreeCommnet=document.querySelector('.Comments')
const SendCommentButton=document.querySelector(`.WriteCom button`)
const CountPost=document.querySelector(`.Count_Post`)
const AddReply=(e)=>{
    e.preventDefault()
    const date=new Date();
    let Hour=0;
    let StringHour=``
    if (date.getHours()>12)
    {
        Hour=date.getHours()-12;
        StringHour=`PM`
    } else 
     {
        Hour=date.getHours()
         StringHour=`PM`
    }
    CommentNews[NumComment].insertAdjacentHTML("beforeend",
   ` <div class="Comment_reply">
       <div class="Comment_photo">
           <img src="images/SingleUser.png" alt="photo">
       </div>
       <div>
           <div class="comment_Head_Reply"> 
               <div class="comment_Author">
                   <h3>${document.querySelector(`.Send_Reply form`).NameReply.value}</h3>
                   <span> replied</span>
               </div>                
            </div>
            <div class="News_Created">
               <span>${ date.getDate()} 
               ${date.toLocaleString('en-US', { month: 'long' })} 
               ${date.getFullYear() }
               </span>
               <span>${Hour}:${date.getMinutes()>10?date.getMinutes():"0"+date.getMinutes()} ${StringHour}</span>
            </div>
            <p>${document.querySelector(`.Send_Reply form`).CommentReply.value}</p>
       </div>
</div>`
   )
   MainTreeCommnet.removeChild(MainTreeCommnet.children[NumComment+2])
}
const InputReplyCommnet=`<div class="Send_Reply">
<form action="/Comment" method="post">
    <h3>Name</h3>
    <input class="input_comment" value="" name="NameReply" type="text">
    <h3>Your comment</h3>
    <textarea class="input_comment" value="" name="CommentReply"></textarea>
    <button class="GeneralButton">
        Reply
    </button>
</form>
</div>`
var ReplyComment;
var NumComment=0;
SendCommentButton.addEventListener("click",(e)=>
{
    e.preventDefault();
    const WriteName=document.querySelector(`.WriteCom form`).WriteName;
    const WriteComment=document.querySelector(`.WriteCom form`).WriteComment;
    const date=new Date();
    let Hour=0;
    let StringHour=``
    if (date.getHours()>12)
    {
        Hour=date.getHours()-12;
        StringHour=`PM`
    } else 
     {
        Hour=date.getHours()
         StringHour=`PM`
    }
    MainTreeCommnet.insertAdjacentHTML("beforeend",
    `
    <div class="Comment">
    <div class="Comment_Main">
        <div class="Comment_photo">
            <img src="images/SingleUser.png" alt="photo">
        </div>
        <div>
            <div class="comment_Head"> 
                <div class="comment_Author">
                    <h3>${WriteName.value}</h3>
                    <span> said</span>
                </div>
                <div class="Reply">
                    Reply
                </div>
               
             </div>
             <div class="News_Created">
               <span>${ date.getDate()} 
               ${date.toLocaleString('en-US', { month: 'long' })} 
               ${date.getFullYear() }
               </span>
               <span>${Hour}:${date.getMinutes()>10?date.getMinutes():"0"+date.getMinutes()} ${StringHour}</span>
            </div>
             <p>${WriteComment.value}</p>
        </div>
    </div>
</div>
    `
    )
    ReplyButton=document.querySelectorAll(`.Reply`);
    CommentNews=document.querySelectorAll(`.Comment`)
    CommentMain=document.querySelectorAll(".Comment_Main");
    console.log(CommentNews)
    CountPost.innerHTML=`${CommentNews.length} comments`
    ReplyButton.forEach((e,index)=>{
        if (index===ReplyButton.length-1)
       { 
           console.log(`hi`)
           e.addEventListener("click",()=>
        {

            NumComment=index;
            for (let i = 1; i < MainTreeCommnet.childElementCount; i++) {
                if (MainTreeCommnet.children[i].className===`Send_Reply`)
                {
                    MainTreeCommnet.removeChild(MainTreeCommnet.children[i])
                    ReplyComment.removeEventListener("click",AddReply);
                    CommentNews[index].insertAdjacentHTML("afterend",` <div class="Send_Reply">
            <form action="/Comment" method="post">
                <h3>Name</h3>
                <input class="input_comment" value="" name="NameReply" type="text">
                <h3>Your comment</h3>
                <textarea class="input_comment" value="" name="CommentReply"></textarea>
                <button class="GeneralButton">
                    Reply
                </button>
            </form>
        </div>`)
           ReplyComment=document.querySelector('.Send_Reply button')
           ReplyComment.addEventListener("click",AddReply)
                    return
                }
            }
            CommentNews[index].insertAdjacentHTML("afterend",` <div class="Send_Reply">
            <form action="/Comment" method="post">
                <h3>Name</h3>
                <input class="input_comment" value="" name="NameReply" type="text">
                <h3>Your comment</h3>
                <textarea class="input_comment" value="" name="CommentReply"></textarea>
                <button class="GeneralButton">
                    Reply
                </button>
            </form>
        </div>`)
        ReplyComment=document.querySelector('.Send_Reply button')
        
        ReplyComment.addEventListener("click",AddReply)
        return
        })}
        })

})
ReplyButton.forEach((e,index)=>{
e.addEventListener("click",()=>
{
    NumComment=index;
    for (let i = 1; i < MainTreeCommnet.childElementCount; i++) {
        if (MainTreeCommnet.children[i].className===`Send_Reply`)
        {
            MainTreeCommnet.removeChild(MainTreeCommnet.children[i])
            ReplyComment.removeEventListener("click",AddReply);
            CommentNews[index].insertAdjacentHTML("afterend",InputReplyCommnet)
   ReplyComment=document.querySelector('.Send_Reply button')
   ReplyComment.addEventListener("click",AddReply)
            return
        }
    }
    CommentNews[index].insertAdjacentHTML("afterend",InputReplyCommnet)
ReplyComment=document.querySelector('.Send_Reply button')

ReplyComment.addEventListener("click",AddReply)
return
})
})



