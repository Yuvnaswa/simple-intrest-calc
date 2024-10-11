let timeout;

const delayedCalc = () =>{
    clearTimeout(timeout);

    timeout = setTimeout(()=>{
        calculateIntrest()
    },1000)
}

const calculateIntrest =async () =>{
    const prin = document.getElementById("princple").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;
    const intrest = document.getElementById("intrest");
    const totalIntrest= document.getElementById("totalIntrest");
   

    // const onlyIntrest=(parseFloat(prin) * parseFloat(rate) * parseFloat(time))/100;
    // const total =parseFloat(onlyIntrest) + parseFloat(prin);

    const res =await fetch("http://localhost:3000/calc?p=" + prin + "&r=" + rate + "&t=" + time);
    const data  = await res.json();
    

    intrest.innerHTML = data.intrest;
    totalIntrest.innerHTML = data.total;
}
    
    