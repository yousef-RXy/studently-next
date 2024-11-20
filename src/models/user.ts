import { Schema, model, Document, InferSchemaType } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    folderId: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
    major: {
      type: String,
      default: 'general',
    },
    totalHours: {
      type: Number,
      default: 0,
    },
    totalGpa: {
      type: Number,
      default: 0,
    },
    newSemester: {
      type: Boolean,
      default: false,
    },
    files: [
      {
        type: Schema.Types.ObjectId,
        ref: 'File',
      },
    ],
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
    finishedCourses: [
      {
        course: { type: Schema.Types.ObjectId, ref: 'Course' },
        grade: { type: String, required: true },
        total: { type: Number, required: true },
        GPA: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export interface User extends InferSchemaType<typeof userSchema>, Document {}

export default model('User', userSchema);
