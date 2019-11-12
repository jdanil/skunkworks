import { packagePath, rootPath, srcPath } from './utils';

module.exports = {
    module: {
        rules: [
            {
                parser: {
                    amd: false,
                },
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: packagePath('tsconfig.json'),
                            experimentalWatchApi: devMode,
                            transpileOnly: devMode,
                        },
                    },
                ],
                include: [srcPath()],
                exclude: [/node_modules/],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer({
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'static/css/[name].bundle.css',
        }),
};
