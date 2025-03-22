import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // プロジェクトのルートディレクトリを指定
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 未使用の変kk数を警告
      "no-unused-vars": "warn",
      // セミコロンの使用を強制
      "semi": ["error", "always"],
      // シングルクォートを強制
      "quotes": ["error", "single"],
      // インデントを2スペースに統一
      "indent": ["error", 2],
      // 末尾のカンマを強制
      "comma-dangle": ["error", "always-multiline"],
      // オブジェクトのプロパティの間にスペースを強制
      "object-curly-spacing": ["error", "always"],
      // アロー関数の括弧を強制
      "arrow-parens": ["error", "always"],
      // 最大行の長さを制限
      // 1行の最大文字数を100文字に制限
      "max-len": ["error", { "code": 100 }],
      // インポートの順序を強制
      // - builtinモジュール
      // - 外部モジュール 
      // - 内部モジュール
      // - 親ディレクトリのモジュール
      // - 同じディレクトリのモジュール
      // - インデックスファイル
      // の順に並べ替え、グループ間に空行を入れ、アルファベット順にソート
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          "alphabetize": { "order": "asc" }
        }
      ]
    }
  }
];

export default eslintConfig;
