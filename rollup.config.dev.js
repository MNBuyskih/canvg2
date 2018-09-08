import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2'


export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/canvg2.js',
    sourcemap: true,
    format: "umd",
    exports: "default",
    name: "CanVG2",
  },

  plugins: [
    serve("."),
    livereload({
      watch: ['dist', 'examples'],
    }),
    typescript(),
  ]
}
