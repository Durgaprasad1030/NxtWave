let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');

let startBtn=document.getElementById('startBtn');
let stopBtn=document.getElementById('stopBtn');

startBtn.onclick=function(){
    let c=0;
    let r=0;
    let cm=0;
    let rm=0;
    let u=setInterval(function(){
        if(c===10){
            c=0;
            r+=1;
        }
        let text=r.toString();
        let v=text+c;
        seconds.textContent=v;
        c=c+1;
        
        if(c===9 && r===5){
            r=0;
            c=0;
            cm+=1;
        }
        else if(cm===9){
            rm+=1;
        }
        else if(cm===5 && rm===9){
            cm=0;
            rm=0;
        }
        let textm=rm.toString();
        let vm=textm+cm;
        minutes.textContent=vm;
    },1000);
    stopBtn.onclick=function(){
    clearInterval(u);
}
}

