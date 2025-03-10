module.exports = async function updateMinPrice(productId) {
    try {
      const product = await strapi.entityService.findOne("api::sc-product.sc-product", productId, {
        populate: { price_bareakup_ids: true }
      });
  
      if (!product || !product.base_fee) return;
  
      let baseFee = parseFloat(product.base_fee) || 0;
      let totalPriceBreakup = 0;
  
      const priceBreakups = product.price_bareakup_ids || [];
  
      for (const breakup of priceBreakups) {
        const priceValue = parseFloat(breakup.value) || 0;
        if (priceValue > 0) {
          totalPriceBreakup += priceValue;
        }
      }
  
      const newMinPrice = baseFee + totalPriceBreakup;

      if (parseFloat(product.min_price) === newMinPrice) {
        console.log(`Skipping update for sc-product ${productId} as min_price is unchanged.`);
        return;
      }
      
      await strapi.entityService.update("api::sc-product.sc-product", productId, {
        data: { min_price: newMinPrice }
      });
  
      console.log(`Updated min_price for product ${productId}: ${newMinPrice}`);
  
    } catch (error) {
      console.error(`Error updating min_price for product ${productId}:`, error);
    }
  };
  