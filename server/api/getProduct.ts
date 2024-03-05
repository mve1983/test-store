export default defineEventHandler(async (event) => {
  const id = event.node.req.originalUrl.split('?id=')[1];
  if (!id) {
    return createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }

  try {
    const product = await $fetch(`https://fakestoreapi.com/products/${id}`);
    return product;
  } catch (error) {
    // TODO: implement error handling
    console.log(error);
  }
});
