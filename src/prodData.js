let count = 0;

module.exports.load = function(){
    let btn = document.querySelector('#btn-2');
    let limit = 10;
    let skip = count;
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    return fetch(url)
    .then(res=>{
        if(res.ok){
            count == 90 ? count=0:  count+=10;
            return res.json();
        }
        else
            console.error("Error getting the products");
        
    })
    .then(result=>result.products)
    .catch((err)=>{
        console.log(err);
        return null;
    })
}