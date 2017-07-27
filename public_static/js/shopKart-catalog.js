/**
 * Created by av on 1/7/17.
 */

let catalogContainer;


$(function () {
    catalogContainer = $('#catalog-container');

    getCatalog();
    // refreshShoppingKart(true);

    let btnAdd = $(".kart");

    btnAdd.click(addToKartAndSave);

});


// To Save the Product to the Kart
function addToKartAndSave(ev) {
    let itemId = +($(ev.target).attr('data-id'));
    console.log("SaveFunction");
    if ($.isEmptyObject(Kartlog)) {
        Kartlog.push(new itemsObj(itemId));
    }
    else {
        let flag = 1;
        for (index in Kartlog) {
            if (Kartlog[index].id == itemId) {
                Kartlog[index].q++;
                flag = 0;
            }
        }
        if (flag) {
            Kartlog.push(new itemsObj(itemId));
        }
    }
    saveKart();
}


function itemsObj(catalogId) {
    return{
        "id": catalogId,
        "q": +"1"
    }
}

function refreshShoppingKart(firstPageLoad = false) {
    if(!firstPageLoad){
        saveKart();
    }


    catalogContainer.empty();
    for(i in catalog){
        let catalogItem = createCatalogElement(i);
        catalogContainer.append(catalogItem);
    }

}
function createCatalogElement(i) {
    let catalogElement = catalog[i];
        let catalogItem = $(`<div class="col-lg-4 kart" style="padding: 20px" ">
                                <div class="card text-center" >
                                    <img class="card-img-top" src="http://via.placeholder.com/350x150">
                                    <div class="card-block">
                                        <h4 class="card-tittle"><b>${catalogElement.product}</b></h4>
                                        <p class="card-text">${catalogElement.description}</p>
                                        <p class="card-text">Rs:${catalogElement.price}</p>
                                        <a href="#" class="btn btn-success btn-block" data-id="${catalogElement.prodId}">Add to Kart</a>
                                        <!--<p class="card-text">${catalogElement.inkart} in Kart</p>-->
                                    </div>                                                      
                                </div>
                            </div>`);
    return catalogItem;
}



