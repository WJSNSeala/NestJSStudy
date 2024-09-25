import { Schema, Document } from 'mongoose';

export interface Post {
  title: string;
  content: string;
  author: string;
  createdAt?: Date;
}

export interface PostDocument extends Post, Document {}

export const PostSchema = new Schema<Post>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
