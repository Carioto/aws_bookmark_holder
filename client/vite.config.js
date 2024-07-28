import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/




export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  // if (command === 'serve') {
  //   return {
  //     plugins: [react()],
  //       server: {
  //         port: 3000,
  //         open: true,
  //         proxy: {
  //           "/graphql": {
  //             target: "http://localhost:3001",
  //             changeOrigin: true,
  //             secure: false,
  //           },
  //         },
  //       },
  //   }
  // } else {
    // command === 'build'
    return {
      plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "https://bookmark-server-e0d8f2210d08.herokuapp.com/",
        changeOrigin: true,
        secure: false,
      },
    },
//   },    }
  }
}
})

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true,
//     proxy: {
//       "/graphql": {
//         target: "https://bookmark-holder-36a65b094507.herokuapp.com/",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });

// http://localhost:3001