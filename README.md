# Markdown エディタ

リアルタイムで Markdown を編集＆プレビューできる、初心者向けのシンプルなエディタです。  
このプロジェクトは「フルスタックエンジニアを目指す学習ロードマップ」の一部です！

---

## 🚀 使用技術（Tech Stack）

- **フロントエンド**：React + Vite（高速＆シンプルな構成）
- **スタイリング**：Tailwind CSS（もしくは CSS Modules）
- **Markdown 変換**：`marked`（または `markdown-it`）
- **テスト（任意）**：Vitest（軽量なテストツール）
- **パッケージ管理**：npm / pnpm / yarn（どれでも OK）

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
- 初期表示時にサンプル Markdown を表示
- フロントエンドのみで完結（バックエンドなし）
- （任意）コピー用ボタンの追加

---

## ✅ やるべきこと（To Do）

- [x] Vite + React プロジェクトの初期化
- [x] `marked` または `markdown-it` をインストールして設定
- [ ] Markdown 入力用のコンポーネント作成（`<textarea>`）
- [ ] HTML プレビュー用のコンポーネント作成（`dangerouslySetInnerHTML` など）
- [ ] Tailwind CSS や CSS Modules でレイアウト＆装飾
- [ ] 初期表示時にサンプル Markdown を表示
- [ ] （任意）コピー用ボタンの実装
- [ ] （任意）Vitest で簡単なテストを記述

---

## 📁 ディレクトリ構成（例）

```
markdown-editor/
├── src/
│   ├── components/
│   │   ├── Editor.tsx        # Markdown入力エリア
│   │   └── Preview.tsx       # HTML表示エリア
│   ├── App.tsx               # アプリ全体
│   ├── main.tsx              # エントリーポイント
│   └── index.css             # グローバルCSS（Tailwindならここ）
├── public/
├── vite.config.ts
└── README.md
```

---

## 🎓 このプロジェクトで学べること

- React の基本的なコンポーネント構造
- `useState` による状態管理
- Markdown → HTML の変換処理
- Tailwind CSS（または CSS Modules）での簡単なレイアウト設計
- （任意）ユニットテストの書き方

---

## 📝 補足

このアプリは最初の一歩として最適です！
次のステップでは「入力履歴の保存（バックエンド導入）」や「ユーザー認証」を追加することで、フルスタックの練習につなげることもできます。
