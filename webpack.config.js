module.exports = {
	entry:{
		"step1" : "./step1/main.js",
		"step2" : "./step2/main.js",
		"step3" : "./step3/main.ts"
	},
	output: {	// ファイルの出力設定
		path: __dirname,	//  出力ファイルのディレクトリ名
		filename: "[name]/bundle.js"	// 出力ファイル名
	},
	module: {
		loaders: [	// Loaderの設定
			// CSSファイルの読み込み
			{
				test: /\.css/,	// 対象となるファイルの拡張子
				loaders: ["style-loader", "css-loader"]	// ローダー名
			},
			// Sassファイルの読み込みとコンパイル
			{
				test: /\.scss/,	// 対象となるファイルの拡張子
				loaders: ["style-loader", "css-loader", "sass-loader"]	// ローダー名
			},
			// TypeScriptファイルの読み込みとコンパイル
			{
				test: /\.ts/,	// 対象となるファイルの拡張子
				loaders: ["ts-loader"]	// ローダー名
			},
		]
	}
};