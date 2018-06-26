import path from 'path';
import merge from 'webpack-merge';
import common from './common';

const ROOT_PATH = path.resolve('./');

export default merge(
    common,
    {
        mode: 'production',
        output: {
            filename: '[name].bundle.js?[hash]',
        },
        devtool: 'hidden-source-map',
    }
);
