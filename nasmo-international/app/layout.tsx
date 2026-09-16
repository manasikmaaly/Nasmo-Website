import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"NASMO International LLC",description:"Flexible workspaces and complete business support in Muscat, Oman."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
