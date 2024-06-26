let fromdate=document.querySelector("#from");
let todate=document.querySelector("#to");
let btn=document.querySelector("#btn");
let display=document.querySelector(".msg")

fromdate.addEventListener("change",()=>{
    if(fromdate.value){
        let mindate=new Date(fromdate.value);
        mindate.setDate(mindate.getDate()+1);
        todate.min=mindate.toISOString().split("T")[0];
    }
    else{
        todate.min="";
    }
})

btn.addEventListener("click",()=>{
    if(!fromdate.value || !todate.value){
        display.style.backgroundColor="red";
        display.textContent="Please provide both dates";
        return;
    }
    let from=new Date(fromdate.value);
    let d0=from.getDate();
    let m0=from.getMonth()+1;
    let y0=from.getFullYear();

    let to=new Date(todate.value);
    let d1=to.getDate();
    let m1=to.getMonth()+1;
    let y1=to.getFullYear();
    
     if(to<from){
        display.style.backgroundColor="red";
        display.textContent="The ' Age at the date of ' must be greater than that of Date of birth " ;
        return;
     }

    let d2,m2,y2;
    y2=y1-y0;
    if(m1>=m0){
        m2=m1-m0;
    }
    else{
        y2--;
        m2=12+m1-m0;
    }
    if(d1>=d0){
        d2=d1-d0;
    }
    else{
        m2--;
        if(m2<0){
            m2=11;
            y2--;
        }
        d2=getnumdays(y0,m0)+d1-d0;
    }
    display.style.backgroundColor="aqua";
    display.textContent=`${y2}  Years ${m2}  Months ${d2}  Days`

})

function getnumdays(year,month){
    return new Date(year,month,0).getDate();
}