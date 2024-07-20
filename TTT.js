let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset"); 
let gameBtn=document.querySelector(".newgame");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;

const winpatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// Reset button 
let resetgame=()=>{
    turnO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgcon.classList.add("hide");
}




//  Give boxes a value
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        count++;
        console.log("count",count);
        box.disabled=true;
         chkwinner();
    })
})

//   show Winner function
const showWinner=(win)=>{
msg.innerText=`Congraulation, Winner is ${win}`;
msgcon.classList.remove("hide");

for(let box of boxes){
    box.disabled=true;
}
}




const draw=()=>{
    msg.innerText=`Game is draw, Try Again!`;
    msgcon.classList.remove("hide");
}


// Check Winner
const chkwinner=()=>{
  for(let patt of winpatterns){
       let pos1val=boxes[patt[0]].innerText;
       let pos2val=boxes[patt[1]].innerText;
       let pos3val=boxes[patt[2]].innerText;
          if(pos1val!="" && pos2val!="" && pos3val!=""){

              if(pos1val===pos2val && pos2val===pos3val){
                 showWinner(pos1val);
                }
                else{
                    if(count==9){
                        console.log("draw");
                        draw();
                    }
                }
            }
    }

}

resetBtn.addEventListener("click",resetgame);
gameBtn.addEventListener("click",resetgame);

// Draw game




















