import { Schema, model, Document, InferSchemaType } from 'mongoose';

const googleAuthSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export interface GoogleAuth
  extends InferSchemaType<typeof googleAuthSchema>,
    Document {}

export default model('GoogleAuth', googleAuthSchema);
