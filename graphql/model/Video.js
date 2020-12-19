import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Video = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    thumbNailPath: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Video`, Video, `Video`);
