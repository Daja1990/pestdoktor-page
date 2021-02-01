import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as Contentful from 'contentful';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { BrowserRouter as Router, Redirect, Switch, Route, NavLink } from 'react-router-dom';
import './Nyheder.css';
import './SinglePost.css';
import '../../App.css';
import ListOfPost from './ListOfPosts';

function NewPage({ history, match }) { 

    const created = (timestamp) => new Date(timestamp).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });


      const options = {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => (
            <p>{children}</p>
          ),
          [INLINES.HYPERLINK]: (node, children) => (
          <a href={node.data.uri}>{children}</a>
          ),
          [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <img className="image" src={node.data.target.fields.file.url} alt={node.data.target.fields.title} />
          )
        },
        renderMark: {
        [MARKS.ITALIC]: text => <span className="italic">{text}</span>,
        }
      };

  
    const { state } = useLocation();
  
    useEffect(() => {
      console.log(state);
      console.log('denne state blir printet');
    }, []);  



      return (
        <div className="entry contentful wrapnews">
            <section>
              <ListOfPost />
            </section>
          <section>
          <h2 className="blog-orange blog-header">{state.fields.title}</h2>
          <div className="author">
            <img className="avatar" src={state.fields.author.fields.avatar.fields.file.url} alt={state.fields.author.fields.avatar.fields.title} />
            <div className="details">
              <div className="name">
                <p className="blog-orange">Forfatter:</p>
                {state.fields.author.fields.name}
              </div>
              <div className="created">
                <p className="blog-orange">Dato:</p>
                {created(state.sys.createdAt)}
              </div>
            </div>
          </div>
              {documentToReactComponents(state.fields.content, options)}
            <NavLink to="/news">
            <button className="returnbtn">Tilbage til Nyheder</button>
            </NavLink>
            </section>
        </div>
        );
    }

export default NewPage;