import * as React from 'react';
import { graphql } from 'gatsby'
import Frame from '@components/frame';
import Seo from '@components/seo';

const IndexPage = ({ data }) => {
  const links = [
    {
      description: "LinkedIn",
      homepageUrl: "https://linkedin.com/in/cae-su-ra"
    },
    {
      description: "Github",
      homepageUrl: "https://github.com/akpekig"
    }
  ].concat(data.github.viewer.starredRepositories.nodes)

  console.log(links)
  return (
    <Frame>
      <ul className='py-8'>
        {
          links.map((link, index) => (
            <li key={link.id || `link${index}`}>
              <a href={link.homepageUrl} target="_blank" rel="noreferrer" className='select-none'>{link.description}</a>
            </li>
          ))
        }
      </ul>
    </Frame>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    github {
      viewer {
        starredRepositories(
          orderBy: {field: STARRED_AT, direction: DESC}
          ownedByViewer: true
        ) {
          nodes {
            homepageUrl
            id
            description
          }
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <Seo />
    <html lang="en" />
  </>
)