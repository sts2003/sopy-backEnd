import Video from "../../../model/Video";

export default {
  Query: {
    getAllVideos: async (_, args) => {
      try {
        const result = await Video.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
    getVideoOne: async (_, args) => {
      const { id } = args;
      try {
        const result = await Video.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },

  Mutation: {
    registVideo: async (_, args) => {
      const { title, description, thumbNailPath } = args;
      try {
        const result = await Video.create({
          title,
          description,
          thumbNailPath,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    updateVideo: async (_, args) => {
      const { id, title, description, thumbNailPath } = args;
      try {
        const result = await Video.updateOne(
          { _id: id },
          {
            $set: {
              title,
              description,
              thumbNailPath,
            },
          }
        );
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteVideo: async (_, args) => {
      const { id } = args;
      try {
        const result = await Video.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
