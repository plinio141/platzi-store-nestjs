import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { OrdersController } from './orders/orders.controller';
import { UsersController } from './users/users.controller';
import { CustomersController } from './customers/customers.controller';
import { BrandsController } from './brands/brands.controller';
import { ProductsService } from './products/products.service';
import { BrandsService } from './brands/brands.service';
import { CategoriesService } from './categories/categories.service';
import { CostumersService } from './costumers/costumers.service';
import { OrdersService } from './orders/orders.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController, UsersController, CustomersController, BrandsController],
  providers: [AppService, ProductsService, BrandsService, CategoriesService, CostumersService, OrdersService, UsersService],
})
export class AppModule {}
