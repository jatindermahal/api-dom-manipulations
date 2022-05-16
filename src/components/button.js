//Create a button element
module.exports.createButton = function(){
    let body = document.querySelector('body');
    let btn = document.createElement('button');
    btn.id = "btn";
    btn.type = "button";
    btn.innerHTML = "Show more";
    body.appendChild(btn);
}
