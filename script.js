let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turn0=true;
let count=0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame= () => {
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxex=()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
                box.style.color="#b0413e";
            turn0=false;
        }else{
            box.innerText="X";
            box.style.color="black";
            turn0=true;
        }
        box.disabled = true;
        count++;
        // checkWinner();
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
         gameDraw();
        }
    });
});
const gameDraw=() =>{
    msg.innerText=`Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxex();
};
const showWinner =(Winner)=>{
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxex();
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
           if(pos1val===pos2val && pos2val===pos3val){
            //console.log("Winner",pos1val);
            showWinner(pos1val);
            return true;
           }
        }
    }
};
newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);