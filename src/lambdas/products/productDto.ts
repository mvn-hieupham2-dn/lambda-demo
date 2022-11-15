import 'reflect-metadata'
import { IsISO8601, IsString, IsNumber, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

export class createProductlDto {
  @IsString()
  @IsOptional()
  name: string

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  size: number

  @IsISO8601()
  @IsOptional()
  description: string
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name: string

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  size: number

  @IsISO8601()
  @IsOptional()
  description: string
}
