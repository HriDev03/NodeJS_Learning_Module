/*console.log("welcome user ");
function getdata(){
    setTimeout(()=>{
        console.log("Getting data....");
    },2000)
}

async function apicall(){
    try{
        let data = await getdata();
        let jsondata=await data.json();
        return jsondata;
    }catch(err){
        console.log("my error is",err.message);
    }finally{
        console.log("will aways run");
    }
} 



Given an array of product objects (with id, name, and price), write a JavaScript function to:
 
Filter products below a specified price.
 
Sort the filtered products alphabetically by name.
 
Example Input:
 
javascript
*/

const products = [

  { id: 1, name: "Laptop", price: 999 },

  { id: 2, name: "Mouse", price: 20 },

  { id: 3, name: "Keyboard", price: 50 },

  { id: 4, name: "Monitor", price: 200 },

];

const maxPrice = 100;

const filteredProducts=products.filter((obj)=>{
    if(obj.price<maxPrice){
        return obj;
    }
})

filteredProducts.sort((a, b) => a.name.localeCompare(b.name));

console.log(filteredProducts);


// console.log([11,2,22,1].sort((a, b) => a - b))