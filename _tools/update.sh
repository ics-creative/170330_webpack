# 更新したいプロジェクトフォルダーを定義
declare -a array=(
    "tutorial-babel"
    "tutorial-babel-esnext"
    "tutorial-babel-gsap"
    "tutorial-babel-jquery"
    "tutorial-babel-pixijs"
    "tutorial-babel-react"
    "tutorial-babel-rxjs6"
    "tutorial-babel-three"
    "tutorial-babel-vue"
    "tutorial-bootstrap-min"
    "tutorial-bootstrap-style"
    "tutorial-bootstrap-style-js"
    "tutorial-chunk"
    "tutorial-css"
    "tutorial-css-extract-plugin"
    "tutorial-css-extract-plugin-dev-server"
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
    "tutorial-typescript-babylonjs"
    "tutorial-typescript-gsap"
    "tutorial-typescript-pixijs"
    "tutorial-typescript-react"
    "tutorial-typescript-three"
    "tutorial-typescript-three-es5"
    "tutorial-typescript-urlloader"
    "tutorial-typescript-vue"
    "tutorial-webpack-dev-server"
)

# とりあえず階層を潜っておく
cd ../${array[0]}

# 配列をまとめて実行
for e in ${array[@]}; do
    cd ../${e} && ncu -u && yarn install && yarn upgrade && yarn run build
done
