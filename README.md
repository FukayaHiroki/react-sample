# フロントエンド課題

## 使用技術

|       feature       | version |
| :-----------------: | :-----: |
|       node.js       | v12.13  |
|        react        | v16.11  |
|        yarn         |  v1.19  |
|  create-react-app   |  v3.2   |
|        redux        |  v4.0   |
|     redux-thunk     |  v2.3   |
|     redux-form      |  v8.2   |
| @materiai-ui/styles |  v4.6   |
| @material-ui/icons  |  v4.5   |
|  @material-ui/core  |  v4.6   |
|        axios        |  v0.19  |
|    react-router     |  v5.1   |

## 環境構築手順

#### node.js の導入

```
# nodebrewのinstall
curl -L git.io/nodebrew | perl - setup

# PATHを通す
echo 'PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile

# 推奨versionのnode.jsをinstall
nodebrew install v12.13.0
nodebrew use v12.13.0

```

#### yarn の install

```
# node.jsを除いてinstall
brew install yarn --ignore-dependencies

# ディレクトリの移動
cd fukaya-frontend

# node.modulesのインストール
yarn install

# server起動
yarn start

```

#### モックサーバーの起動方法

```
起動コマンド
yarn json-server

```
