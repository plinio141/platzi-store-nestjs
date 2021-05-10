import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from '../dtos/product.dto';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private _productsService: ProductsService) {}

  @Get()
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this._productsService.findAll(limit, offset, brand);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this._productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this._productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Product updated',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Product removed',
      id,
    };
  }
}
