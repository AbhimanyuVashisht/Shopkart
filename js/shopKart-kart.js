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

    let kartElement = $(`<tr>
                            <th>Item ID</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                          </tr>`);
    kartContainer.append(kartElement);
    addKartElements();
}


function addKartElements() {
    for(i in Kartlog){
        createKartElement(i);
    }
    kartContainer.append($(`<tr>
                            <td colspan="4"><b>Total:</b></td>
                            <td>${Total}</td>
                         </tr>`));
}

function createKartElement(indexKatalog) {

    var element = catalog[Kartlog[indexKatalog].id - 1];
    let totalPrice = element.price * Kartlog[indexKatalog].q;
    Total += totalPrice;
    let kartElement = $(`<tr>
                            <td>${element.id}</td>
                            <td>${element.product}</td>
                            <td>${element.price}</td>
                            <td>${Kartlog[indexKatalog].q}</td>
                            <td>${totalPrice}</td>
                        </tr>`);
    kartContainer.append(kartElement);

}

function retrieveKart() {
    let savedKart = localStorage.getItem("kart");
    if(savedKart){
        Kartlog = JSON.parse(savedKart);
    }
    
}