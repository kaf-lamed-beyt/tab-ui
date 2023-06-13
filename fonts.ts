import { Fira_Code } from "next/font/google";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["400"],
});
