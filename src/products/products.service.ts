import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductsService {
  private products: Product[];

  findAll(limit: number, offset: number, brand: string) {
    return this.products;
  }

  findOne(id: number) {
    // return this.
  }

  create(product: CreateProductDto) {

  }

  update(id: number, product: UpdateProductDto) {

  }

  delete(id: number) {
    throw new NotFoundException('Not found');
  }
}
