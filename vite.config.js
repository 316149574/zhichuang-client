import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import commonjs from "rollup-plugin-commonjs";
// import externalGlobals from "rollup-plugin-external-globals";
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8088
  },
  build:{
    // rollupOptions:{
    //   external:["vue","element-plus"],
    //   plugins:[
    //     externalGlobals({
    //       vue: "Vue",
    //       "element-plus": "ElementPlus"
    //     }),
    //   ]
    // }
  },
  plugins: [ 
  vue()],
  productionSourceMap: false
})
