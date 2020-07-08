import React from "react";
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <Container className="uk-container uk-container-large">
          <h1>Strategic Management</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </Container>
      </div>
    </div>
  );
};

export default Home;
