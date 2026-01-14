# Portfolio Development Guide

## プロジェクト概要
個人ポートフォリオサイト（Next.js 14 + Panda CSS + Cloudflare Pages）

## 現在の作業: デザイン刷新

### 目標
- ./tmp/my-appのデザインに合わせてUI刷新
- Park UIコンポーネントで統一
- ダークモード対応
- タイムラインセクション追加

---

## 実装計画

### Phase 1: 環境セットアップ
- [ ] tsconfig.jsonに`baseUrl: "."`を追加
- [ ] Park UI CLIを実行（`pnpx @park-ui/cli init`）
- [ ] next-themesをインストール

### Phase 2: テーマ設定
- [ ] panda.config.tsのカラートークンをOKLCh系に変更
- [ ] ダークモード用のセマンティックトークンを追加
- [ ] ThemeProviderコンポーネントを作成

### Phase 3: Park UIコンポーネント追加
```bash
pnpx @park-ui/cli add button badge card icon-button
```
- [ ] Button（ナビゲーション、リンク用）
- [ ] Badge（スキルタグ用）
- [ ] Card（Works、Blogs用）
- [ ] Icon Button（テーマトグル、SNSリンク用）

### Phase 4: 既存コンポーネント置き換え
- [ ] Navigation: bg-primary固定ヘッダー、テーマトグル追加
- [ ] Hero Section: グラデーションアバター、border-b区切り
- [ ] About Section: proseスタイル
- [ ] Skills Section: border-l-2、Badge表示
- [ ] Works Section: Park UI Card、ホバーアニメーション
- [ ] Blogs Section: Park UI Card、矢印アイコン
- [ ] タイムライン（新規）: 縦の点線+ドット

### Phase 5: ダークモード対応
- [ ] theme-provider.tsx作成
- [ ] theme-toggle.tsx作成
- [ ] layout.tsxでThemeProviderをラップ
- [ ] panda.config.tsでダークモードセマンティックトークン

### Phase 6: グローバルスタイル調整
- [ ] globals.cssでマークダウンスタイル（h1, h2, code, pre等）

---

## カラー設計（OKLCh色空間）

### ライトモード
| 変数 | 値 |
|------|-----|
| background | oklch(0.95 0.005 240) |
| foreground | oklch(0.25 0.015 240) |
| primary | oklch(0.38 0.04 235) |
| primary-foreground | oklch(0.98 0.005 240) |
| secondary | oklch(0.5 0.03 240) |
| muted | oklch(0.87 0.008 240) |
| muted-foreground | oklch(0.48 0.015 240) |
| border | oklch(0.83 0.01 240) |

### ダークモード
| 変数 | 値 |
|------|-----|
| background | oklch(0.17 0.015 240) |
| foreground | oklch(0.94 0.008 240) |
| primary | oklch(0.45 0.045 235) |
| border | oklch(0.28 0.025 240) |

---

## 修正ファイル一覧

```
src/
├── app/
│   ├── layout.tsx              # ThemeProvider追加
│   ├── page.tsx                # ホームページ全体刷新
│   ├── globals.css             # マークダウンスタイル追加
│   ├── blogs/
│   │   ├── page.tsx            # ブログ一覧デザイン変更
│   │   └── [slug]/page.tsx     # ブログ詳細デザイン変更
│   └── works/
│       └── page.tsx            # Works一覧デザイン変更
├── components/
│   ├── header/                 # Navigation刷新
│   ├── hero/                   # Hero刷新
│   ├── card/
│   │   ├── blog-card/          # Park UI Card使用
│   │   └── work-card/          # Park UI Card使用
│   ├── theme-provider.tsx      # 新規
│   ├── theme-toggle.tsx        # 新規
│   └── ui/                     # Park UIコンポーネント配置
├── panda.config.ts             # カラートークン変更
└── tsconfig.json               # baseUrl追加
```

---

## デザイン参考
- 新デザイン: `./tmp/my-app/`
- Tailwind → Panda CSSに変換して実装

---

## 将来の計画（保留中）
- Cloudflare R2: 画像・動画アップロード
- Cloudflare D1: ページ閲覧数カウント
- remark-directive: 自作Markdown構文（`::video[file.mp4]`）
- Astroへの移行検討

---

## コマンド
```bash
pnpm dev          # 開発サーバー起動
pnpm build        # ビルド
pnpm prepare      # Panda CSS codegen
pnpm fix          # Biomeフォーマット
```

## 検証方法
1. `pnpm dev`でローカル起動
2. 各ページの表示確認
3. ダークモード切り替え確認
4. レスポンシブ確認（モバイル、デスクトップ）
5. ホバーアニメーション確認
