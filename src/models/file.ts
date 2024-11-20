import { Schema, model, Document, InferSchemaType } from 'mongoose';

const fileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    driveId: {
      type: String,
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    isPrivate: {
      type: Boolean,
      required: true,
    },
    publisher: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export interface File extends InferSchemaType<typeof fileSchema>, Document {}

export default model('File', fileSchema);
