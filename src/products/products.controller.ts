// import { Controller, Get, Query, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { ProductsService } from './products.service';
// import type { CreateProductDto, UpdateProductDto } from './products.dto';
// import { Public } from 'src/modules/auth/decorators/public.decorator';

// @Controller('products')
// export class ProductsController {
//   constructor(private readonly productsService: ProductsService) {}

//   @Post()
//   @Public() 
//   create(@Body() createProductDto: CreateProductDto) {
//     return this.productsService.create(createProductDto);
//   }

//   @Get()
//   findAll(
//     @Query('skip') skip: string = '0',
//     @Query('take') take: string = '10',
//   ) {
//     return this.productsService.findAll(Number(skip), Number(take));
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.productsService.findOne(BigInt(id));
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
//     return this.productsService.update(BigInt(id), updateProductDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) { 
//     return this.productsService.remove(BigInt(id));
//   }
// }
