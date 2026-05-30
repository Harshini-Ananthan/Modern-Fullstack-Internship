import Navbar from "@/components/Navbar";


function RootLayout({children} : {
  children : React.ReactNode
}){
  return (
      <html>
        <body>
          <Navbar/>
          <h1>Hello from Root Layout</h1>
          {children}
        </body>
      </html>
  );

}
export default RootLayout;