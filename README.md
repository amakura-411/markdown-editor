# Markdown エディタ

リアルタイムで Markdown を編集＆プレビューできる、シンプルなエディタです。
なお、簡単なフロントエンドのアプリ開発の一環として作成したサンプルアプリです。

---

## 🚀 使用技術（Tech Stack）

- **フロントエンド**：Next.js
- **スタイリング**：Tailwind CSS
- **Markdown 変換**：`marked`
- **パッケージ管理**：npm

---

## 📦 セットアップ手順

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーを起動
npm run dev
```

---

## 🎯 実装する機能

- Markdown をリアルタイムでプレビュー
- エディタとプレビューを左右に分けたレイアウト
- 読みやすいスタイルのプレビュー表示

---

## 📁 ディレクトリ構成（例）

```
markdown-editor/
├── README.md
├── app
│   ├── components
│   │   ├── Editor.tsx
│   │   └── Preview.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── biome.json
├── eslint.config.mjs
├── memo.md
├── next-env.d.ts
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json

```

---

## 🎓 このプロジェクトで学べること

- React の基本的なコンポーネント構造
- `useState` による状態管理
- Markdown → HTML の変換処理
- Tailwind CSS での簡単なレイアウト設計
