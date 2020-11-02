import Snack from "../../../model/Snack";
import Company from "../../../model/Company";

export default {
  Query: {
    getAllSnacks: async (_, args) => {
      try {
        const result = await Snack.find({ price: { $lte: 1500 } }, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
    getSnackGte: async (_, args) => {
      const { price } = args;

      try {
        const result = await Snack.find(
          {
            price: { $gte: price },
          },
          {}
        );
        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getSnackLte: async (_, args) => {
      const { price } = args;

      try {
        const result = await Snack.find(
          {
            price: { $lte: price },
          },
          {}
        );
        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
