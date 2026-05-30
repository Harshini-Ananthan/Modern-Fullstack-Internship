function RootLayout({children} : {
  children : React.ReactNode
}){
  return (
      <html>
        <body>
          <h1>Hello from Root Layout</h1>
          {children}
        </body>
      </html>
  );

}
export default RootLayout;