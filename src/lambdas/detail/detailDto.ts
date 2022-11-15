import 'reflect-metadata'
import { IsNumber, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

export class UpdateDetailDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  discount: number

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  unit_price: number

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  quantity: number
}
export class createDetailDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  discount: number

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  unit_price: number

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  quantity: number
}


