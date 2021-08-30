import { Card } from './';

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s uk-grid">
        <div>
          {leftArticles.map((article) => (
            <Card key={`article__left__${article.slug}`} article={article} />
          ))}
        </div>
        <div>
          <div className="uk-child-width-1-2@s uk-grid-match uk-grid">
            {rightArticles.map((article) => (
              <Card key={`article__right__${article.slug}`} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
