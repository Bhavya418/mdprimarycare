# MDPrimaryCare

A modern, responsive healthcare management platform built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Code Quality**: ESLint, Prettier, Husky pre-commit hooks
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions pipeline
- **Type Safety**: Strict TypeScript configuration
- **Accessibility**: Built with a11y best practices

## 📋 Prerequisites

- Node.js 18.x or 20.x
- npm or yarn package manager
- Git

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mdprimarycare
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

### Development

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start production server

### Code Quality

- `npm run lint` - Run ESLint and fix issues
- `npm run lint:check` - Check linting without fixing
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting without fixing
- `npm run type-check` - Run TypeScript type checking

### Testing

- `npm run test` - Run tests in watch mode
- `npm run test:ci` - Run tests with coverage for CI
- `npm run test:coverage` - Run tests with coverage report

### Quality Assurance

- `npm run validate` - Run all quality checks (type-check, lint, format, test)

## 🏗️ Project Structure

```
├── .github/workflows/     # GitHub Actions CI/CD
├── .husky/               # Git hooks
├── public/               # Static assets
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # React components
│   │   ├── __tests__/   # Component tests
│   │   ├── FeatureTab/  # Feature components
│   │   ├── MedicalInfo/ # Medical info components
│   │   └── Navigation/  # Navigation components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── .eslintrc.json       # ESLint configuration
├── .prettierrc.json     # Prettier configuration
├── jest.config.js       # Jest configuration
└── tsconfig.json        # TypeScript configuration
```

## 🔧 Configuration

### ESLint

Configured with:

- Next.js recommended rules
- TypeScript strict rules
- React hooks rules
- Accessibility (a11y) rules
- Import ordering rules

### Prettier

Configured for:

- Single quotes
- Semicolons
- 2-space indentation
- Tailwind CSS class sorting

### TypeScript

Strict configuration with:

- Strict null checks
- No implicit returns
- No fallthrough cases
- Exact optional property types

## 🧪 Testing

Tests are written using Jest and React Testing Library. Run tests with:

```bash
npm run test          # Watch mode
npm run test:ci       # Single run with coverage
npm run test:coverage # Coverage report
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 CI/CD Pipeline

The GitHub Actions pipeline includes:

- **Linting**: ESLint checks
- **Type Checking**: TypeScript validation
- **Testing**: Jest with coverage
- **Building**: Production build verification
- **Security**: npm audit checks
- **Deployment**: Automatic deployment to Vercel

## 🔒 Code Quality

### Pre-commit Hooks

Automatically runs before each commit:

- ESLint with auto-fix
- Prettier formatting
- Type checking

### Code Coverage

Minimum coverage thresholds:

- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Run quality checks: `npm run validate`
5. Commit your changes: `git commit -m 'Add new feature'`
6. Push to the branch: `git push origin feature/new-feature`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Testing Library Documentation](https://testing-library.com/docs)
