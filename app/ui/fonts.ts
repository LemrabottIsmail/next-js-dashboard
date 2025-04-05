import { Inter, Lusitana } from "next/font/google";

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export { inter, lusitana };
