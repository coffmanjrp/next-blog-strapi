import { Nav } from './';

const Layout = ({ children, categories }) => {
  return (
    <>
      <Nav categories={categories} />
      {children}
    </>
  );
};

export default Layout;
