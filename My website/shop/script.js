 const product = [
    {
         id : 1,
         image : "image1.jpg",
         title : "Head Phone",
         price : '$60'
    },
    {
        id : 2,
        image : "image2.jpg",
        title : "Rode NT1 Microphone",
        price : "$90"
    },
    {
        id : 3,
        image : "image3.jpg",
        title : "Smart Watch",
        price : "$150"
    },
    {
        id : 4,
        image : "image4.jpg",
        title : "Hp Laptop",
        price : "$270"
    },
    {
        id : 5,
        image : "image5.jpg",
        title : "250D DSLR Camera",
        price : "$89"
    },
    {
        id : 6,
        image : "image6.jpg",
        title : "Metal Dask Lamp",
        price : "$30"
    },
    {
        id : 7,
        image : "image7.jpg",
        title : "Z flip foldable Mobile",
        price : "$370"
    },
    {
        id : 8,
        image : "image8.jpg",
        title : "Airpod Pro",
        price : "$70"
    },
    {
        id : 9,
        image : "image9.jpg",
        title : "I phone 15 pro max",
        price : "$600"
    },
    {
        id : 10,
        image : "image10.jpg",
        title : "Compture",
        price : "$1200"
    },
    {
        id : 11,
        image : "image11.jpg",
        title : "Bed",
        price : "$1700"
    },
    {
        id : 12,
        image : "image12.jpg",
        title : "Sofa",
        price : "$900"
    },
    
 ]
 const categories = [...new Set(product.map((item)=>{
    return item }))];
 document.getElementById("search-bar").addEventListener('keyup',(e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
       return(
        item.title.toLocaleLowerCase().includes(searchData)
       )
   }) 
     displayItem(filterData)
 })
 const displayItem = (item)=>{
    document.getElementById("root").innerHTML=item.map((item)=>{
        var {image,title,price} = item;
        return(
            `<div class="box">
               <div class="img-box">
                  <img src=${image}></img>
               </div>
               <div class="left">
                  <h5>${title}</h5>
                  <h3>${price}</h3>
                  <div class = "amount">
                      <i class="fa-solid fa-less-than" onclick="less()" id="decrease"></i>
                      <p id="total-product">0</p>
                      <i class="fa-solid fa-greater-than" onclick="great()" id="increase"></i>
                  </div>
                  <button id="add">Add to cart</button>
               </div>
            </div>`
        )
    }).join('')
 };
 displayItem(categories);