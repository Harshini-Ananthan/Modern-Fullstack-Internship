
import Navbar from "@/components/Navbar";

export default function RootLayout({children} :{
  children : React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <h1>Welcome to My Portfolio</h1>
        <br />
        {children}
      </body>
    </html>
  );
}
