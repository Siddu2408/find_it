import Header from "../components/header/Header";

type MainLayoutProps = {
    children: React.ReactNode
} 

const MainLayout = ({ children}: MainLayoutProps) => {
    return (
       <>
         <Header />
         <main className="layout-container">
            {children}
         </main>
       </>
    )
}

export default MainLayout;
