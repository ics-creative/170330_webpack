# 更新したいプロジェクトフォルダーを定義
declare -a array=(
    "tutorial-babel"
    "tutorial-babel-es2017"
    "tutorial-babel-jquery"
    "tutorial-babel-react"
    "tutorial-babel-rxjs6"
    "tutorial-babel-three"
    "tutorial-babel-vue"
    "tutorial-babel-zero_config"
    "tutorial-bootstrap-min"
    "tutorial-bootstrap-style"
    "tutorial-bootstrap-style-js"
    "tutorial-chunk"
    "tutorial-chunkdist"
    "tutorial-css"
    "tutorial-css-extract-plugin"
    "tutorial-js"
    "tutorial-optimize"
    "tutorial-optimize-aggressive"
    "tutorial-sass"
    "tutorial-sass-extract-plugin"
    "tutorial-sass-image-file"
    "tutorial-sass-image-url"
    "tutorial-sass-image-url-limit"
    "tutorial-sass-postcss"
    "tutorial-typescript"
    "tutorial-typescript-react"
    "tutorial-typescript-three"
    "tutorial-typescript-urlloader"
    "tutorial-typescript-vue"
    "tutorial-typescript-zero_config"
    "tutorial-webpack-dev-server"
    "tutorial-webpack-serve"
)

# とりあえず階層を潜っておく
cd ../${array[0]}

# 配列をまとめて実行
for e in ${array[@]}; do
    cd ../${e} && ncu -u && yarn install && yarn upgrade && yarn run build
done