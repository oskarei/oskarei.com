/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout
    header={data.contentstackHeaderv2}
    // footer={data.allContentstackFooter.nodes}
    seo={data.contentstackHeaderv2.seo}
    backgroundImage={data.contentstackFrontPage.background_image.url}
  >
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-rg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
        <div className="p-4 md:p-12 text-center lg:text-left">
          {/* Image for mobile view */}
          <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-no-repeat bg-opacity-100" style={{
              background: `url(${data.contentstackFrontPage.image.url}?width=200)`
            }}></div>

        <h1 className="text-3xl font-bold pt-8 lg:pt-0">{data.contentstackFrontPage.headline}</h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d={data.contentstackFrontPage.occupation.svg[0].path}/></svg> {data.contentstackFrontPage.occupation.text}</p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d={data.contentstackFrontPage.location.svg[0].path}/></svg> {data.contentstackFrontPage.location.text}</p>

          <p className="pt-8 text-sm">{data.contentstackFrontPage.description}</p>

          <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
          {data.contentstackFrontPage.networks.map(({ node }, i) => (
            <Tippy key={i} content={<span>{data.contentstackFrontPage.networks[i].hover_text}</span>}>
              <a key={i} className="link" href={data.contentstackFrontPage.networks[i].url}>
                <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>{data.contentstackFrontPage.networks[i].label}</title>
                    <path d={data.contentstackFrontPage.networks[i].svg[0].path}/>
                </svg>
              </a>
            </Tippy>
          ))}
          </div>
        </div>
      </div>

    <div className="w-full lg:w-2/5">
		{/*Big profile image for side bar (desktop)*/}
		<img alt={data.contentstackFrontPage.image.title} src={data.contentstackFrontPage.image.url} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"></img>
		
	</div>

    </div>

  </Layout>
);
export const pageQuery = graphql`
  {
    contentstackFrontPage {
        image {
          url
          title
        }
        background_image {
          url
        }
        headline
        occupation {
          text
          svg {
            path
          }
        }
        location {
          text
          svg {
            path
          }
        }
        description
        networks {
          label
          url
          hover_text
          svg {
            path
          }
        }
    }
    contentstackHeaderv2 {
      author 
      seo {
        meta_title
        description
        keywords
      }
      
    }
  }
`;

export default IndexPage;
