const updateMinPrice = require("../../services/updateMinPrice");
const updatePriceBreakupValue = require("../../../price-bareakup/services/updatePriceBreakupValue");

module.exports = {
    
  async afterUpdate(event) {
    const { result } = event;

    // Check if price_bareakup_ids were modified
    const product = await strapi.entityService.findOne(
      "api::sc-product.sc-product",
      result.id,
      {
        populate: { price_bareakup_ids: true },
      }
    );
    if (product && product.id) {
        console.log("Updating price breakup value...");
        
        for (const priceBreakup of product?.price_bareakup_ids) {
          try {
            console.log(`Updating price-bareakup ID: ${priceBreakup.id}`);
            await updatePriceBreakupValue(priceBreakup.id);
            console.log(`Updated price-bareakup ID: ${priceBreakup.id}`);
          } catch (error) {
            console.error(`Error updating price-bareakup ${priceBreakup.id}:`, error);
          }
        }

        console.log("Updated all price breakup values.");

        // Now update min_price
        console.log("Updating min price...");
        await updateMinPrice(product.id);
        console.log(`Updated min price for product ID: ${product.id}`);
      }
  },
  async afterCreate(event) {
    const { result } = event;

    console.log(`afterCreate Lifecycle Hook Triggered for sc-product ID: ${result.id}`);
    const product = await strapi.entityService.findOne(
      "api::sc-product.sc-product",
      result.id,
      {
        populate: { price_bareakup_ids: true },
      }
    );

    if (product && product.id) {
      console.log("Updating price breakup values...");

      for (const priceBreakup of product?.price_bareakup_ids) {
        try {
          console.log(`Updating price-bareakup ID: ${priceBreakup.id}`);
          await updatePriceBreakupValue(priceBreakup.id);
          console.log(`Updated price-bareakup ID: ${priceBreakup.id}`);
        } catch (error) {
          console.error(`Error updating price-bareakup ${priceBreakup.id}:`, error);
        }
      }

      console.log("Updated all price breakup values.");
      console.log("Updating min price...");
      await updateMinPrice(product.id);
      console.log(`Updated min price for sc-product ID: ${product.id}`);
    }
  },
};
