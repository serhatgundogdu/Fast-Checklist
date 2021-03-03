document.querySelector("#btnCheckClose").addEventListener("click", ()=>{
    window.api.send("checklist:quit")
})