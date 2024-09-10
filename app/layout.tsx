import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'flexibble',
  description: 'Showcase your portfolio projects with Dribble Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}
