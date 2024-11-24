const createPeriodicElement=(symbol,atomicNumber,name)=>{
    const element=document.createElement("div");
    element.classList.add("element");
    element.innerText=symbol;
    element.setAttribute("element-number",atomicNumber);
    element.setAttribute("element-name",name);
    return element;
}

const handleClickEvent=(event)=>{
    // console.log(event);
    const target=event.target;
    if(target.classList.contains("element"))
    {
        let eleNumber=target.getAttribute("element-number");
        let eleName=target.getAttribute("element-name");
        alert(`Atomic Number : ${eleNumber}\nName : ${eleName}`);
    }
}

function initializePeriodicTable(){
    const mainBody=document.querySelector(".mainBody");
    for(let i=1;i<=50;i++)
    {
        const element=createPeriodicElement(`Ele${i}`,i,`Element ${i}`);
        mainBody.append(element);
        
    }
    mainBody.addEventListener("click",handleClickEvent);
}
// document.querySelector(".mainBody").addEventListener("click",handleClickEvent);

initializePeriodicTable();