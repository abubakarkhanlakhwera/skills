# 🧩 SNIPPETS.md — NestJS Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Controller with guard
```typescript
@Controller('items')
@UseGuards(JwtAuthGuard)
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateItemDto, @CurrentUser() user: User) {
    return this.itemsService.create(dto, user);
  }
}
```

### DTO with validation
```typescript
export class CreateItemDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;
}
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(nestjs): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern
