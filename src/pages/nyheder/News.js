import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import * as Contentful from 'contentful';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../../App.css';
import './Nyheder.css';
import { slide } from 'react-burger-menu';
import NewPage from './newpage';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

const client = Contentful.createClient({
  space: 'lqqnijo1yqgj',
  accessToken: '7sNbw42UHCnP7cEqKfXDfus2CLruZaIC2Q6UbRCfTWI'
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
  
  const created = (timestamp) => new Date(timestamp).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const ENTRIES_PER_PAGE = 4;
  
  function News({ match }) {
    const [entries, setEntries] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    let [entry, setTestEntry] = useState();
  
    useEffect(() => {
      client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt',
        skip: page * ENTRIES_PER_PAGE,
        limit: ENTRIES_PER_PAGE
      })
      .then((response) => {
        setEntries(response.items);
        console.log(response.items)
        setPageCount(Math.ceil(response.total / ENTRIES_PER_PAGE));
      });
  
      window.scrollTo(0, 0);
    }, [page, entry]);
  
    const Entries = entries.map((entry) => (
      <div className="entry" key={entry.sys.id}>
          <h2 className="blog-orange blog-header">{entry.fields.title}</h2>
          <div className="imgshrink">
          {documentToReactComponents(entry.fields.resume, options)}
          </div>
          <div className="author">
            <img className="avatar" src={entry.fields.author.fields.avatar.fields.file.url} alt={entry.fields.author.fields.avatar.fields.title} />
            <div className="details">
              <div className="name">
                <p className="blog-orange">Forfatter: </p>
                {entry.fields.author.fields.name}
              </div>
              <div className="created">
                <p className="blog-orange">Dato:</p>
                {created(entry.sys.createdAt)}
              </div>
            </div>
          </div>

          <NavLink to={{ pathname: `/newpage`, state: entry}}>
              <button className="readmorebutton" onClick={(e) => setTestEntry(entry.sys.id)}>Læs mere</button>
            </NavLink>

      </div>
    ));
  
    return (
      <div className="newswrapper">
      <h1 className="newsheader">Seneste nyheder omkring <span className="orange">Coronakrisen</span></h1>
      <div className="contentful">
        <div className="contentful-wrapper">
        {Entries}
        </div>
        <div className="hover">
        {pageCount > 1 && (
        <ReactPaginate
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => setPage(selected)}
          activeClassName={'active'}
        />
        )}
        </div>
      </div>
      </div>
      );
  }
  
  export default News;