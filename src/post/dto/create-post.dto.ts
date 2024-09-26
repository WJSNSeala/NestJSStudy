import { IsString, IsNotEmpty } from 'class-validator';
import { Post } from '../schema/post.schema';

export class CreatePostDto implements Post {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  author: string;
}
