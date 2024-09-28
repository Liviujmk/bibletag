import { Lexend, Merriweather, Lato } from "next/font/google";

export const merry400 = Merriweather({subsets: ["latin"], weight: "400", variable: '--font-merry4'})
export const merry300 = Merriweather({subsets: ["latin"], weight: "300", variable: '--font-merry3'})
export const lexend = Lexend({subsets: ["latin"], variable: '--font-lexend'});
export const lato = Lato({
  subsets: ["latin"], variable: '--font-heading',
  weight: "700"
});