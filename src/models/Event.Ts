import { Schema, model, Document, InferSchemaType } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export interface Event extends InferSchemaType<typeof eventSchema>, Document {}

export default model('Event', eventSchema);
