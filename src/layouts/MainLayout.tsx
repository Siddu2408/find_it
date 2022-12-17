type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main className='layout-container'>{children}</main>
    </>
  );
};

export default MainLayout;
