/**
 * Created by av on 1/7/17.
 */
let Kartlog = [];
let catalog = [];


/*** Initially Reading Products Catalog from JSON file
$.getJSON("../data/products.json",function (data) {
    getCatalog(data);
});
***/


function getCatalog() {
    $.get('/getcatalog', (data)=>{
        catalog = data;
        refreshShoppingKart(true);
    });
}


/*
function getCatalog(JSONfetch) {
    for( i in JSONfetch){
        let dataObj = JSONfetch[i];
        catalog.push(dataObj);
    }
}
***/

function addToKart(prodId) {
    Kartlog[prodId].q++;

}

function removeFromKart(prodId) {
    Kartlog[prodId].q--;
    if(Kartlog[prodId].q){
        return;
    }
    else{
        Kartlog.splice(prodId,1);
    }
}



function saveKart() {
    localStorage.setItem("kart",JSON.stringify(Kartlog));
}
