const data = [
    {
        id: 1,
        productname: "HUAWEI Band 8 Smart Watch",
        image: "https://m.media-amazon.com/images/I/71lMPFopeSL._AC_SL1500_.jpg",
        productprice: 200,
        cat: "Watches",
    },

    {
        id: 2,
        productname: "Nike Air Monarch Iv mens Sneaker",
        image: "https://m.media-amazon.com/images/I/81NtrD+T6sL._AC_SX695_.jpg",
        productprice: 350,
        cat: "Sneakers",
    },

    {
        id: 3,
        productname: "Lymio Casual Shirt for Men",
        image: "https://m.media-amazon.com/images/I/71On2XSPuRL._AC_SY879_.jpg",
        productprice: 50,
        cat: "Shirts",
    },

    {
        id: 4,
        productname: "Men's Classic Business Dress Shoes",
        image: "https://m.media-amazon.com/images/I/51U-GVdy+VL._AC_SY695_.jpg",
        productprice: 70,
        cat: "Shoes",
    },

    {
        id: 5,
        productname: "Curren 8225 Casual Decorative Sub-dial Male",
        image: "https://m.media-amazon.com/images/I/71yBAEn656L._AC_SX679_.jpg",
        productprice: 270,
        cat: "Watches",
    },

    {
        id: 6,
        productname: "New Balance 574 unisex-adult Sneaker",
        image: "https://m.media-amazon.com/images/I/51+aUlcLnwL._AC_SY695_.jpg",
        productprice: 350,
        cat: "Sneakers",
    },  
]

const productcontainer = document.querySelector(".products");
const search = document.querySelector(".search");
const categoriescontainer = document.querySelector(".categories");
const pricerange = document.querySelector(".pricerange");
const pricevalue = document.querySelector(".pricevalue");

const display = (show)=>{
productcontainer.innerHTML = show.map(product=>

    `
    <div class="product">
                <img src="${product.image}" class=“image”>
                <span class="productname">${product.productname}</span>
                <span class="productprice">$${product.productprice}</span>
            </div>

    `
).join("");
};
display(data)

search.addEventListener("keyup", (e)=>{
    const searchinput = e.target.value.toLowerCase(); 
    
    if(searchinput){

        display(data.filter((item=>item.productname.toLowerCase().indexOf(searchinput)!==-1)))
    }else{
        display(data);

    }

});

const setcategories = ()=>{
   const allcategories = data.map(item=>item.cat);
   const category = allcategories.filter((item,i)=>{
    return allcategories.indexOf(item) === i;
   })
   category.unshift("All");

   categoriescontainer.innerHTML = category.map(cat=>
    `
     <span class="cat">${cat}</span>
    `
   ).join("")

   categoriescontainer.addEventListener("click", (e)=>{
    const selectedcat = e.target.textContent;

    if(selectedcat === "All"){
        display(data)
    }else{
        display(data.filter((item)=> item.cat === selectedcat))
    }
   })
   
}
setcategories()

setprice = ()=>{
    const productprice = data.map(item=>item.productprice);
    const minprice = Math.min(...productprice);
    const maxprice = Math.max(...productprice);
    
    pricerange.min = minprice;
    pricerange.max = maxprice;
    pricerange.value = maxprice;
    pricevalue.textContent = "$" + maxprice;

    pricerange.addEventListener("input", (e)=>{
       pricevalue.textContent = "$" + e.target.value;
       display(data.filter((item)=>item.productprice <= e.target.value))

    })

}
setprice()