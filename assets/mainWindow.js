document.querySelector("#closeBtn").addEventListener("click", () => {
    if(confirm("Do realy want to leave?", "Istanbul Downloader")){
        window.api.send("ist:quit");
    }
});

var checklistBtn738 = document.querySelector("#checklist737");
var checklistBtn320 = document.querySelector("#checklist320");
checklistBtn738.addEventListener("click", ()=>{
    window.api.send("ist:checklist", "738")
})

checklistBtn320.addEventListener("click", ()=>{
    window.api.send("ist:checklist", "320")
})





// var weatherLayer = {};
// var map = L.map('map', {
//     'center': [45.36157442645549, 34.590536499023445],
//     'zoom': 5,
//     'layers': [
//         L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//             subdomains: 'abcd',
//             maxZoom: 19
//         })
//     ]
// });
// e = new XMLHttpRequest;
// e.open("GET", "https://tilecache.rainviewer.com/api/maps.json", !0), e.onload = function(n) {
// var i = JSON.parse(e.response),
//     a = new L.TileLayer("https://tilecache.rainviewer.com/v2/radar/" + i.pop() + "/256/{z}/{x}/{y}/2/1_1.png", {
//         tileSize: 256,
//         opacity: .5,
//         zIndex: 999
//     });
//     map.addLayer(a), weatherLayer !== {} && map.removeLayer(weatherLayer), weatherLayer = a
// }, e.send()

