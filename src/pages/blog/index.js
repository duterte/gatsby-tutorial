import React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = (props) => {
  const { data } = props;
  console.log(props);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MM DD,YYYY")
          title
        }
        body
        id
        slug
      }
    }
  }
`;

export default BlogPage;
