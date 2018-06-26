import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import prodConfig from './prod.babel';


export default webpackMerge(
    prodConfig,
    {
        devtool: 'inline-source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('staging')
            }),
        ]
    }
);
