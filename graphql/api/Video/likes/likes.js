import Video from "../../../model/Video";
import User from "../../../model/User";
import mongoose from "mongoose";

export default {
  Mutation: {
    likesToggle: async (_, args) => {
      const { videoId, userId } = args;

      const objectuserId = mongoose.Types.ObjectId(userId);
      try {
        const video = await Video.findOne({ _id: videoId }).populate({
          path: `likes`,
          model: User,
        });

        if (video.likes.length === 0) {
          console.log("좋아요 안눌렀으니까 추가해야돼 !!!");
          video.likes.push(userId);
          video.save();

          return true;
        }

        await Promise.all(
          video.likes.map((data) => {
            if (data._id === userId) {
              console.log("이미 좋아요 누름");

              return true;
            } else {
              console.log("안눌렀으니까 좋아요 추가해야돼 !!!");
              video.likes.push(userId);
              video.save();

              return true;
            }
          })
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
