import { Articles, Layout, Seo } from '../components';
import { fetchAPI } from '../lib/api';

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <Layout categories={categories}>
        <Seo seo={homepage.seo} />
        <div className="uk-selection">
          <div className="uk-container uk-container-large">
            <h1>{homepage.hero.title}</h1>
            <Articles articles={articles} />
          </div>
        </div>
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
