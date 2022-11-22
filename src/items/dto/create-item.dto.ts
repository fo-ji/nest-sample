import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsInt()
  @Min(1)
  // MEMO: class-validatorでバリデーションする前に定義した型に変換する
  @Type(() => Number) // MEMO: class-transformerで変換される
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
