import eslint from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: ["dist/", "node_modules/", "coverage/", "*.js", "*.cjs"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts", "scripts/**/*.ts", "examples/**/*.ts"],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // TypeScript specific
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-inferrable-types": "off",

      // Import ordering
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

      // General
      "no-console": "off",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
  {
    // Relaxed rules for generated files
    files: ["src/generated/**/*.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-irregular-whitespace": "off",
    },
  },
  {
    // Relaxed rules for scripts
    files: ["scripts/**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-useless-escape": "off",
    },
  }
)
