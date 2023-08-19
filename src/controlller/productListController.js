import ProductCartModel from "../models/ProductCartModel";

class ProductCartController{
    static async getProduct(){
        try{
const productsResponse = await fetch("https://dummyjson.com/products")

const productsData = await productsResponse.json()

//console.log(productsData.products)

const product = productsData.products.map(pro=> new ProductCartModel(
    pro.title,
    pro.thumbnail,
    pro.description,
    pro.rating,
    pro.brand,
    pro.price,

))


return product

       }catch(error){
            console.log(error)
        }
    }

}
export default ProductListController