export class CreateProductDto {
  name: string;
  description?: string;
  price: number;
  categoryIds: bigint[];
  tagIds: bigint[];
}

export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  categoryIds?: bigint[];
  tagIds?: bigint[];
}
