import Header from "./header.tsx"
import Footer from "./footer.tsx"
import { Toaster } from "react-hot-toast";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
           <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            zIndex: 1000, 
          },
        }} 
      />
            <Header />
                {children}

            <Footer />
        </>
    );
}

export default Layout