import Company from "../../../model/Company";
import Snack from "../../../model/Snack";

export default {
  Query: {
    getAllCompany: async (_, args) => {
      try {
        const result = await Company.find({}, {}).populate({
          path: `snackList`,
          model: Snack,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getRealCompany: async (_, args) => {
      const { value } = args;
      try {
        const result = await Company.find({
          name: {
            $regex: `.*${value}.*`,
          },
        }).populate({
          path: `snackList`,
          model: Snack,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
