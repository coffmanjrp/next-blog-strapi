import { Layout, Seo } from '../components';
import { fetchAPI } from '../lib/api';

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <Layout categories={categories}>
        <Seo seo={homepage.seo} />
      </Layout>
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
