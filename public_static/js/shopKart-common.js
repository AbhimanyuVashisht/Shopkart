/**
 * Created by av on 1/7/17.
 */
var Kartlog = [];
var catalog = [];

$.getJSON("data/products.json",function (data) {
    getCatalog(data);
});


function getCatalog(JSONfetch) {
    for( i in JSONfetch){
        let dataObj = JSONfetch[i];
        catalog.push(dataObj);
    }
}

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
