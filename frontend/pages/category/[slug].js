import { Articles, Layout, Seo } from '../../components';
import { fetchAPI } from '../../lib/api';

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.name}</h1>
          <Articles articles={category.articles} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const categories = await fetchAPI('/categories');

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const categoryData = await fetchAPI(`/categories?slug=${params.slug}`);
  const category = categoryData[0];
  const categories = await fetchAPI('/categories');

  return {
    props: {
      category,
      categories,
    },
    revalidate: 1,
  };
};

export default Category;
