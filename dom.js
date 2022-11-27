const addbtn = document.getElementById("addbtn");
const items = document.getElementById("items");
const cat = document.getElementById("prod");
const link = document.getElementById("link");
const odin = document.getElementById("paradox")


 addbtn.addEventListener('click',()=>{
    if(link.value==""){
        odin.innerText="No link present";
        setTimeout(()=>{
            odin.innerText="";
        },1000);
    }else{

    
    const itemDiv=document.createElement('div');
    const imgTag=document.createElement('img');
    const button=document.createElement('button');
    itemDiv.append(imgTag);
    itemDiv.append(button);
    imgTag.src=link.value;
    button.classList="delete-btn";
    itemDiv.classList=`store-item ${cat.value}`;
    // itemDiv.classList=cat.value;
    button.innerText="delete"
    items.appendChild(itemDiv);
    console.log(itemDiv);
    link.value="";
    }
});
items.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-btn')){
        e.target.parentNode.remove();
    }
});
