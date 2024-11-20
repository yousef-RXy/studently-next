import { Schema, model, Document, InferSchemaType } from 'mongoose';

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    folderId: {
      type: String,
      required: true,
    },
    files: [
      {
        type: Schema.Types.ObjectId,
        ref: 'File',
      },
    ],
    perquisites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
  },
  { timestamps: true }
);

export interface Course
  extends InferSchemaType<typeof courseSchema>,
    Document {}

export default model('Course', courseSchema);
