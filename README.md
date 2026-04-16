# [Test] Build and Deploy using Discussions as a CMS

GitHub DiscussionsをCMSとして利用し、ウェブサイトをビルド・デプロイするワークフローのテスト

## Project Structure

SSGにAstroを使用し、GitHub ActionsとContent Collectionsでプロジェクトは構成されている

```text
/
├── .github/
│   └── workflows/
│       ├── deploy_github.yml
│       └── sync_article.yml
├── src/
│   └── ...
└── package.json
```

## License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)のもとで公開されています。
