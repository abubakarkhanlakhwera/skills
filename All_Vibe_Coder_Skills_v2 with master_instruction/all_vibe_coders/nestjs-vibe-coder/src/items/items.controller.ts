import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ItemsService } from './items.service';
import { ItemResponseDto } from './dto/item-response.dto';

@Controller('items')
@UseGuards(JwtAuthGuard)
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<ItemResponseDto[]> {
    // Business logic lives in ItemsService — not here
    return this.itemsService.findAll();
  }
}
