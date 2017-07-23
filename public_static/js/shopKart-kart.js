/**
 * Created by av on 1/7/17.
 */
let kartContainer;
let Total = 0;
$(function () {
    kartContainer = $('#kart-container');

    retrieveKart();
    displayKart();


});

function displayKart() {
    kartContainer.empty();

    let kartElement = $(`
                          <thead>
                          <tr>
                            <th>Item ID</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                          </tr>
                          </thead>`);
    kartContainer.append(kartElement);
    addKartElements();
}


function addKartElements() {
    Total = 0;
    for(i in Kartlog){
        createKartElement(i);
    }
    kartContainer.append($(`<tr>
                            <td colspan="4"><b>Total:</b></td>
                            <td><b>Rs. ${Total}</b></td>
                         </tr>`));
}

function createKartElement(indexKatalog) {

    let element = catalog[Kartlog[indexKatalog].id - 1];
    let totalPrice = element.price * Kartlog[indexKatalog].q;
    Total += totalPrice;
    let kartElement = $(`<tr>
                            <td>${element.id}</td>
                            <td>${element.product}</td>
                            <td>${element.price}</td>
                            <td>
                                <i onclick="remove(${indexKatalog})" class="fa fa-minus-square"></i>
                                ${Kartlog[indexKatalog].q}
                                <i onclick="add(${indexKatalog})" class="fa fa-plus-square"></i>
                            </td>
                            <td>Rs. ${totalPrice}</td>
                        </tr>`);
    kartContainer.append(kartElement);

}


function add(prodId) {
    console.log("here start");
    addToKart(prodId);
    saveKart();
    displayKart();
}

function remove(prodId) {
    removeFromKart(prodId);
    saveKart();
    displayKart();
}

function retrieveKart() {
    let savedKart = localStorage.getItem("kart");
    if(savedKart){
        Kartlog = JSON.parse(savedKart);
    }
    
}