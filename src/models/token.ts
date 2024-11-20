import { Schema, model, Document, InferSchemaType } from 'mongoose';

const tokenSchema = new Schema(
  {
    refreshToken: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export interface Token extends InferSchemaType<typeof tokenSchema>, Document {}

export default model('Token', tokenSchema);
