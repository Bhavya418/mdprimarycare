# Development Guide

## Overview

This project is set up with industry-standard development tools focusing on code quality through linting and formatting.

## Available Scripts

### Development

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server

### Code Quality

- `npm run lint` - Run ESLint and fix issues
- `npm run lint:check` - Check for ESLint issues without fixing
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check Prettier formatting without fixing
- `npm run type-check` - Run TypeScript type checking
- `npm run validate` - Run all checks (type-check + lint + format)

## Pre-commit Hooks

The project uses Husky and lint-staged to automatically run quality checks before commits:

- Type checking
- ESLint
- Prettier formatting

## CI/CD Pipeline

GitHub Actions workflow automatically runs on push and pull requests:

- Type checking
- Linting
- Format checking
- Production build verification

## Team Component

The OurTeam component displays a grid of 3 team members:

- Dr. Chintan Shah (Founder & Medical Director)
- Sherise Molten (Nurse Practitioner)
- Jessica Jeanlouis (Medical Assistant)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack
- **Linting**: ESLint with modern flat configuration
- **Formatting**: Prettier with Tailwind CSS plugin
- **Git Hooks**: Husky + lint-staged
- **CI/CD**: GitHub Actions

## Development Workflow

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` to start development
4. Make changes and commit (pre-commit hooks will run automatically)
5. Push to trigger CI/CD pipeline

## Quality Assurance

The setup ensures code quality through:

- TypeScript strict mode for type safety
- ESLint for code quality and consistency
- Prettier for consistent code formatting
- Pre-commit hooks to prevent bad code from being committed
- CI/CD pipeline to verify all changes
