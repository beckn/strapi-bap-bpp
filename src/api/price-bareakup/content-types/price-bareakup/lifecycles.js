const updateMinPrice = require("../../../sc-product/services/updateMinPrice");
const updatePriceBreakupValue = require("../../services/updatePriceBreakupValue");

module.exports = {
  async afterUpdate(event) {
    const { result } = event;
    // First, update price-bareakup value
    const priceBreakup = await strapi.entityService.findOne(
      "api::price-bareakup.price-bareakup",
      result.id,
      {
        populate: { sc_retail_product: true },
      }
    );
    if (priceBreakup && priceBreakup.id) {
      await updatePriceBreakupValue(priceBreakup.id);
      // Then, update min_price in sc_retail_product if sc_retail_product is linked
      await updateMinPrice(priceBreakup?.sc_retail_product?.id);
    }
  },
};
