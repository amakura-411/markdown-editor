import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// 未使用の変数を警告
			"no-unused-vars": "warn",
			// セミコロンの使用を強制
			semi: ["error", "always"],
			// シングルクォートを強制
			quotes: ["error", "single"],
			// インデントを2スペースに統一
			indent: ["error", 2],
			// 末尾のカンマを強制
			"comma-dangle": ["error", "always-multiline"],
			// オブジェクトのプロパティの間にスペースを強制
			"object-curly-spacing": ["error", "always"],
			// アロー関数の括弧を強制
			"arrow-parens": ["error", "always"],
			// 最大行の長さを制限
			"max-len": ["error", { code: 100 }],
			// インポートの順序を強制
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
					"newlines-between": "always",
					alphabetize: { order: "asc" },
				},
			],
		},
	},
];

export default eslintConfig;
