import Nav from './Nav';

const Layout = ({ children, categories }) => {
  return (
    <>
      <Nav categories={categories} />
      {children}
    </>
  );
};

export default Layout;
