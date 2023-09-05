import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductModel } from './product.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: 'Products',
        },
      },
    ]),
  ],
  providers: [ProductService],
})
export class ProductModule {}
