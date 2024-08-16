import localfont from "next/font/local"

export const firaGo = localfont({
  src: [
    {
      path: "../../public/fonts/firago-300.ttf",
      weight: "300"
    },
    {
      path: "../../public/fonts/firago-400.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/firago-500.ttf",
      weight: "500"
    },
    {
      path: "../../public/fonts/firago-700.ttf",
      weight: "700"
    },
  ],
  variable: "--font-firaGo"
})

export const gordeziani = localfont({
  src: [
    {
      path: "../../public/fonts/gl-gordeziani-regular.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/gl-gordeziani-medium.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/gl-gordeziani-bold.ttf",
      weight: "700"
    }
  ],
  variable: "--font-gordeziani"
})