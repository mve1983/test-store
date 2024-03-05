export default defineEventHandler(async (event) => {
  
 try {
   const products = await $fetch('https://fakestoreapi.com/products')
   return products

  } catch (error) {
    // TODO: implement error handling
    console.log(error)
  }

});