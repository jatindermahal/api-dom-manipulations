const { load } = require('./prodData');
const productCard = require('./components/product-card');
const btn = require('./components/button');

function start(){
    const main = document.querySelector('main');

    func();


    function func(){
        load()
        .then(products=>{
            if(!(products && products.length)){
                main.innerHTML = 'Could not get data';
                return;
            }
            products.forEach(prod => {
                const id = prod.id;
                const name = prod.title;
                const price = "$"+ prod.price;
                const image = prod.thumbnail;
                const card = new productCard(id, name,price,image);
                main.appendChild(card.render());

            });
        })
        

    }
    btn.createButton();
    
    let button = document.querySelector('#btn');
    button.addEventListener("click",func);

}
window.onload = start();
