import { Post } from '../schema/post.schema';

export class CreatePostDto implements Post {
  title: string;
  content: string;
  author: string;
}
