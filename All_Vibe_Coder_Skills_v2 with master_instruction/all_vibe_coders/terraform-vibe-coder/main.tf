# main.tf — root module
# Never hardcode credentials, account IDs, or secrets here.
# All sensitive values must come from variables or environment.

terraform {
  required_version = "~> 1.8"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.50"
    }
  }

  # Always use remote state in production
  # backend "s3" {
  #   bucket         = "my-tf-state"
  #   key            = "env/prod/terraform.tfstate"
  #   region         = "us-east-1"
  #   dynamodb_table = "my-tf-locks"
  # }
}

provider "aws" {
  region = var.aws_region
}

locals {
  common_tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "terraform"
  }
}
