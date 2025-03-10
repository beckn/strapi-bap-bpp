module.exports = async function updatePriceBreakupValue(priceBreakupId) {
    try {
      const priceBreakup = await strapi.entityService.findOne("api::price-bareakup.price-bareakup", priceBreakupId, {
        populate: { price_breakup_category: true, sc_retail_product: true }
      });
  
      if (!priceBreakup || !priceBreakup.price_breakup_category) return;
      const { is_item_qty_dependent, sc_retail_product, price_breakup_category } = priceBreakup;
      let newValue = 0;
      if (is_item_qty_dependent && !sc_retail_product) {
        if (parseFloat(priceBreakup.value) == newValue) {
          console.log(
            `Skipping update for price-bareakup ${priceBreakupId} as value is unchanged.`
          );
          return;
        }

        await strapi.entityService.update(
          "api::price-bareakup.price-bareakup",
          priceBreakupId,
          {
            data: { value: newValue.toString() },
          }
        );
      }
  
      if (!is_item_qty_dependent) return;
  
      if (price_breakup_category.value_type === "PERCENTAGE") {
        newValue = (parseFloat(sc_retail_product.base_fee) * parseFloat(price_breakup_category.value)) / 100;
      } else if (price_breakup_category.value_type === "FIXED") {
        newValue = parseFloat(price_breakup_category.value);
      }

      if (parseFloat(priceBreakup.value) === newValue) {
        console.log(`Skipping update for price-bareakup ${priceBreakupId} as value is unchanged.`);
        return;
      }
  
      await strapi.entityService.update("api::price-bareakup.price-bareakup", priceBreakupId, {
        data: { value: newValue.toString() }
      });
  
      console.log(`Updated value for price_bareakup ${priceBreakupId}: ${newValue}`);
      return newValue; 

    } catch (error) {
      console.error(`Error updating value for price_bareakup ${priceBreakupId}:`, error);
    }
  };
  