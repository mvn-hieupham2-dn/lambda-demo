import { StatusCodes } from 'http-status-codes'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { render } from '../../layers/shared/nodejs/node_modules/shared/utils/custom_response'
import {
  DetailRepository
} from '../../layers/shared/nodejs/node_modules/models/repositories'
import { createDetailDto, UpdateDetailDto } from './detailDto'
import { plainToInstance } from 'class-transformer'

const detailRepository = new DetailRepository()
export const handleCreateDetail = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { discount, quantity, unit_price} = plainToInstance(
      createDetailDto,
      JSON.parse(event.body)
    )
    await detailRepository.createDetail(discount, quantity, unit_price)
    return render(StatusCodes.OK, { message: 'Create detail success!' }, {})
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
  export const handleUpdateDetail = async (
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> => {
    try {
      const detail = plainToInstance(
        UpdateDetailDto,
        JSON.parse(event.body)
      )
      await detailRepository.updateDetail(event['id'], detail)
      return render(StatusCodes.OK, { message: 'Update detail success!' }, {})
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
