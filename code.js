let unoscore = 0;
let dosscore = 0;
let limit = 0;


const lockbtn = document.querySelector('#lockbtn')
const winlimit = document.querySelector('#winlimit')
const onebtn = document.querySelector('#onebtn');
const twobtn = document.querySelector('#twobtn');
const onescore = document.querySelector('#p1');
const twoscore = document.querySelector('#p2');
const resetbtn = document.querySelector('#reset');

lockbtn.addEventListener("click",(event)=>{
   if(document.querySelector('#limit').checkValidity()){
        event.preventDefault()
        lockbtn.disabled = true;
        winlimit.disabled = true;
        limit = winlimit.value;
   }
})

onebtn.addEventListener("click",(event)=>{
    if(!lockbtn.disabled){
        lockbtn.click();
    }
    if(lockbtn.disabled){
        unoscore++;
        onescore.innerText = unoscore;
        if (unoscore == limit){
            onebtn.disabled = true;
            twobtn.disabled = true;
            onescore.classList.add("winner")
        }
    }
    
})


twobtn.addEventListener("click",(event)=>{
    if(!lockbtn.disabled){
        lockbtn.click();
    }
    if(lockbtn.disabled){
        dosscore++;
        twoscore.innerText = dosscore;
        if (dosscore == limit){
            onebtn.disabled = true;
            twobtn.disabled = true;
            twoscore.classList.add("winner")
        }
    }
})

resetbtn.addEventListener("click",(event)=>{
    unoscore=0;
    dosscore=0;
    limit=0;
    winlimit.value="";
    lockbtn.disabled = false;
    winlimit.disabled = false;
    onebtn.disabled = false;
    twobtn.disabled = false;
    onescore.classList.remove("winner")
    twoscore.classList.remove("winner")
    onescore.innerText = "0"
    twoscore.innerText = "0"
})
