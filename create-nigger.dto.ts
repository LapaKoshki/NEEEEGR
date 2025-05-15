import { IsString } from 'class-validator';

export class CreateNiggerDto {
  @IsString()
  name: string;
}