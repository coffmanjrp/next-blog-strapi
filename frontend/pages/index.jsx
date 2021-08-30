import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { fetchAPI } from '../lib/api';

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <Layout categories={categories} />
    </>
  );
};

export const getStaticProps = async () => {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/categories'),
    fetchAPI('/homepage'),
  ]);

  return {
    props: {
      articles,
      categories,
      homepage,
    },
    revalidate: 1,
  };
};

export default Home;
