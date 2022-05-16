class productCard{
    constructor(id,name,price,image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    render(){
        let sect = document.createElement('section');
        sect.id = `product-${this.id}`;
        sect.className = 'product-card';
        const img = new Image(this.image,this.name);
        const info = new ProdInfo(this.name,this.price);
        sect.appendChild(img.render());
        sect.appendChild(info.render());
        return sect;
    }
}
module.exports = productCard;

class Image{
    constructor(url,name){
        this.url = url;
        this.name = name;
    }

    render(){
        const img = document.createElement('img');
        img.src = this.url;
        img.title = this.name;
        img.alt = this.name;
        img.className = "product-image";
        img.width = 128;
        img.height = 128;
        return img;
    }
}
//module.exports = Image;

class Name{
    constructor(name){
        this.name = name;
    }

    render(){
        const h2 = document.createElement('h2');
        h2.innerHTML = this.name;
        h2.className = "prod-name"
        return h2;
    }
}

class Price{
    constructor(price){
        this.price = price;
    }

    render(){
        const h4 = document.createElement('h4');
        h4.innerHTML = this.price;
        h4.className = "prod-price";
        return h4;
    }
}


class ProdInfo{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    render(){
        const div = document.createElement('div');
        div.className = "prod-info";
        
        const name = new Name(this.name);
        const price = new Price(this.price);
        
        div.appendChild(name.render());
        div.appendChild(price.render());
        return div;
    }
}