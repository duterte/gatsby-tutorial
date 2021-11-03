import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost = ({ data }) => {
  const { mdx } = data;
  const image = getImage(mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <p>{mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={mdx.frontmatter.hero_image_alt} />
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
