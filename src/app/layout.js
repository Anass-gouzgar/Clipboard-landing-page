import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const bai_Jamjuree = Bai_Jamjuree({ subsets: ["latin"] 
  , weight: ["400", "700"]
  , style: ["normal"]
  , display: "swap"
});


export const metadata = {
  title: "Clipboard landing page",
  description: "Created by Anass GOUZGAR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bai_Jamjuree.className}>{children}</body>
    </html>
  );
}
