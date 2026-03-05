# 🧩 SNIPPETS.md — Terraform Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Module call
```hcl
module "api_server" {
  source = "./modules/ecs-service"

  name          = "api"
  image         = var.api_image
  desired_count = var.environment == "prod" ? 3 : 1
  tags          = local.common_tags
}
```

### for_each resource
```hcl
resource "aws_s3_bucket" "data" {
  for_each = toset(var.bucket_names)
  bucket   = "${var.project}-${each.key}-${var.environment}"
  tags     = local.common_tags
}
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(terraform): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern
