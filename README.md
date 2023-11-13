# 自作ライブラリのサンプルソース

## 🌐 対象ライブラリ URL
### **https://www.npmjs.com/package/@class-p/appendwords**

## 💬 Usage
### サーバ起動
①voltaをインストールしておき、`npm ci` を実行
②`npm start` を実行
③サーバ起動後画面でボタンを押下し、コンソールを確認。

### パラメータ変更
index.htmlのパラメータを変更しながら楽しんで下さい。
'あいうえお', 123

### index.jsの変更
js内の処理を変更したいという場合は、以下の処理手順を踏んでください。
①index.tsを編集
②`npx webpack` を実行し、main.jsが更新されたことを確認
③その後`npm start` を実行