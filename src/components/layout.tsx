import Header from "./header.tsx"
import Footer from "./footer.tsx"

function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header />
                {children}

            <Footer />
        </>
    );
}

export default Layout