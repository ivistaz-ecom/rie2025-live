
import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: "Uniting Changemakers @RIE 2025",
  description: "Join us for an exclusive gathering of visionaries and leaders from around the world.",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body >
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" /> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" defer rel="preload"></script>
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
        
        {children}
        
      </body>
      {/* <script>
  AOS.init();
</script> */}
      
    </html>
  );
}
