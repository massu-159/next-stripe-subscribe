# next-stripe-subscription

決済プラットフォームStripeを使い、サブスクリプションサービス開発を学ぶためのサンプルアプリを作成。

NextAuthを使った認証機能を実装。
GoogleのOAuth認証。

ORMにはPrismaを使用。

DBはDockerでPostgreSQLの環境を構築。

shadcn.uiを使用。CSSはtailwindCSSを使用。

状態管理はzustand。

データフェッチ・キャッシにはtanstackQuery。

urlはこちら
https : //github.com/massu-159/next-stripe-subscription


## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install
# または
yarn
# または
pnpm install
# または
bun install
```

### 1-2. アプリケーション実行

```
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- 認証
  - サインアップ
  - ログイン
  - ログアウト
  - ユーザー情報更新
- 決済
  - サブスクリプション登録
  - サブスクリプション更新
  - サブスクリプション解除

### 2-2. 構成技術
    @hookform/resolvers: ^3.3.1,
    @next-auth/prisma-adapter: ^1.0.7,
    @prisma/client: ^5.3.1,
    @stripe/react-stripe-js: ^2.3.0,
    @stripe/stripe-js: ^2.1.6,
    @tanstack/react-query: ^4.35.3,
    axios: ^1.5.1,
    class-variance-authority: ^0.7.0,
    clsx: ^2.0.0,
    date-fns: ^2.30.0,
    encoding: ^0.1.13,
    next: latest,
    next-auth: ^4.23.1,
    openai: ^4.10.0,
    react: latest,
    react-hook-form: ^7.46.2,
    stripe: ^13.8.0,
    zod: ^3.22.2,
    zustand: ^4.4.1
    autoprefixer: latest,
    eslint: latest,
    postcss: latest,
    prisma: ^5.3.1,
    tailwindcss: latest,
    typescript: latest