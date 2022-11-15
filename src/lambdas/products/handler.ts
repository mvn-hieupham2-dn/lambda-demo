import { StatusCodes } from 'http-status-codes'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { render } from '../../layers/shared/nodejs/node_modules/shared/utils/custom_response'
import { ProductRepository } from '../../layers/shared/nodejs/node_modules/models/repositories'
import { createProductlDto } from './productDto'
import { plainToInstance } from 'class-transformer'

const productRepository = new ProductRepository()
export const handleCreateProduct = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { name, size, description } = plainToInstance(
      createProductlDto,
      JSON.parse(event.body)
    )
    await productRepository.createProduct(name, size, description)
    return render(StatusCodes.OK, { message: 'Create product success!' }, {})
  } catch (err) {
    console.log(err)
    return render(
      StatusCodes.INTERNAL_SERVER_ERROR,
      {
        message: err instanceof Error ? err.message : 'Some error happened'
      },
      {}
    )
  }
}
export const handleUpdateProduct = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { name, size, description } = plainToInstance(
      createProductlDto,
      JSON.parse(event.body)
    )
    await productRepository.createProduct(name, size, description)
    return render(StatusCodes.OK, { message: 'Create product success!' }, {})
  } catch (err) {
    console.log(err)
    return render(
      StatusCodes.INTERNAL_SERVER_ERROR,
      {
        message: err instanceof Error ? err.message : 'Some error happened'
      },
      {}
    )
  }
}
export const handleGetProduct = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const product = await productRepository.findOne({
      where: { id: event['id'] } ,
      relations: { detail: true } 
    })
    return render(StatusCodes.OK, product, {})
  } catch (err) {
    console.log(err)
    return render(
      StatusCodes.INTERNAL_SERVER_ERROR,
      {
        message: err instanceof Error ? err.message : 'Some error happened'
      },
      {}
    )
  }
}
export const handleGetAllProducts = async (): Promise<APIGatewayProxyResult> => {
  try {
    const products = await productRepository.find({
      relations: { detail: true }
    })
    return render(StatusCodes.OK, products, {})
  } catch (err) {
    console.log(err)
    return render(
      StatusCodes.INTERNAL_SERVER_ERROR,
      {
        message: err instanceof Error ? err.message : 'Some error happened'
      },
      {}
    )
  }
}
export const handleDeleteProduct = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { id } = await productRepository.findOne({
      where: { id: event['id'] }
    })
    await productRepository.softDeleteProduct(id)
    return render(StatusCodes.OK, { message: 'Delete product success!' }, {})
  } catch (err) {
    console.log(err)
    return render(
      StatusCodes.INTERNAL_SERVER_ERROR,
      {
        message: err instanceof Error ? err.message : 'Some error happened'
      },
      {}
    )
  }
}

