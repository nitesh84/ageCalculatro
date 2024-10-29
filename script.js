let calculate=document.querySelector("button");
let date=document.querySelector("input");
calculate.addEventListener('click',()=>{
    console.log(date.value);
    console.dir(date);
    let today=new Date();
    console.log(today);
     let time=today- new Date( date.value);
    let days=time/(60*60*1000*24);
    let months=days/31;
    let year=months/12;
    
    let span=document.querySelectorAll("span");
    span[0].innerText=Math.floor(year);
    span[1].innerText=Math.floor( months)%12;
    span[2].innerText=Math.floor(days)%31;
    
    
    
})

