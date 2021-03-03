document.querySelector("#btnCheckClose").addEventListener("click", ()=>{
    window.api.send("checklist:quit")
})
let item_key = 0,item_for_key = 0
document.querySelectorAll(".checklist input[type=checkbox]").forEach(element => {
    element.id = `item${item_key}` 
    item_key++
});

document.querySelectorAll(".checklist .checkedbutton").forEach(element => {
    console.log(item_for_key)
    element.setAttribute("for", `item${item_for_key}` );
    
    console.log(element.for)
    item_for_key++
});



document.querySelector("#btnNextChecklist").addEventListener("click" , () => {
    let item  = document.querySelector(".checklist .active"), count = 0

    item.querySelectorAll("input[type=checkbox]").forEach(element => {
        if(!element.checked){
            count++
        }
    });

    if(count > 0){
        alert("All items must be checked to see next checklist")
    }else{
        nextitem = item.nextElementSibling
        nextitem.classList.add("active")
        item.classList.remove("active")
        if(nextitem.nextElementSibling.nextElementSibling == null){
            document.querySelector("#btnNextChecklist").parentNode.removeChild(document.querySelector("#btnNextChecklist"))
        }
    }  
})


//console.log(document.querySelector(".checklist .active"))