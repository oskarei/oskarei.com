/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import randomEmoji from 'random-emoji';
import '../styles/global.css';

export default class Layout extends React.Component {
  render() {
    const favicon = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3Ctext%20x='0'%20y='14'%3E" + randomEmoji.random(1)[0].character + "%3C/text%3E%3C/svg%3E";
    return (
      <>
        {this.props.seo ? (
          <Helmet
            title={this.props.seo.meta_title}
            meta={[
              { name: 'description', content: this.props.seo.description },
              { name: 'keywords', content: this.props.seo.keywords },
            ]}
          >
            <meta charset="UTF-8"></meta>
            <meta name="description" content={this.props.header.author}></meta>
            <html lang="en" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="icon" href={favicon} type="image/svg+xml" /> 
            <style>
                {`
                 body {
                    background-color #000000;
                    background-image: url("` + this.props.backgroundImage + `");
                  }
                `}
            </style>
            <body className="font-sans antialiased text-gray-900 leading-normal bg-black tracking-wider bg-cover"/>
            {/* <body className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"/> */}
          </Helmet>
        ) : (
          ''
        )}
        {this.props.children}
      </>
    );
  }
}
