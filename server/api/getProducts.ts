

export default defineEventHandler(async (event) => {
  
  console.log(process.env.NODE_ENV)

  try {
   const products = await $fetch('https://fakestoreapi.com/products')
   return products

  } catch (error) {
    // TODO: implement error handling
    console.log(error)
  }

});