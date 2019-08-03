import typescript from 'rollup-plugin-typescript2';
import loadz0r from 'rollup-plugin-loadz0r';

export default {
    input: ['./src/main.ts'],
    output: {
        format: 'amd',
        dir: 'dist',
    },

    plugins: [typescript(), loadz0r()],
};
