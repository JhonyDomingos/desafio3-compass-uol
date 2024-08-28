// import { Injectable } from '@nestjs/common';
// import  { CreateProductDto, UpdateProductDto } from './products.dto';
// import  { PrismaService } from 'src/infra/database/prisma/prisma.service';

// @Injectable()
// export class ProductsService {
//   constructor(private prisma: PrismaService) {}

//   async create(createProductDto: CreateProductDto) {
//     return this.prisma.product.create({
//       data: createProductDto,
//     });
//   }

//   async findAll(skip: number = 0, take: number = 10) {
//     const [products, total] = await this.prisma.$transaction([
//       this.prisma.product.findMany({
//         skip,
//         take,
//         include: {
//           categories: true,
//           tags: true,
//         },
//       }),
//       this.prisma.product.count(),
//     ]);

//     return {
//       data: products,
//       total,
//       skip,
//       take,
//     };
//   }

//   async findOne(id: bigint) {
//     return this.prisma.product.findUnique({
//       where: { id },
//       include: {
//         categories: true,
//         tags: true,
//       },
//     });
//   }

//   async update(id: bigint, updateProductDto: UpdateProductDto) {
//     return this.prisma.product.update({
//       where: { id },
//       data: updateProductDto,
//     });
//   }

//   async remove(id: bigint) {
//     return this.prisma.product.delete({
//       where: { id },
//     });
//   }
// }
