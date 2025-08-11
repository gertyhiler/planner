import { IBM_Plex_Sans } from "next/font/google";


export const ibm_font = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic", "latin"],
  display: "swap",
  preload: true,
  variable: "--font-ibm",
});
