import { Inject, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProdutosService {
  @Inject()
  private readonly prisma: PrismaService

  create(createProdutoDto: CreateProdutoDto) {
    return this.prisma.produtos.create({
      data: createProdutoDto,
    });
  }

  findAll() {
    return `This action returns all produtos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
