import React, { useState, useEffect } from 'react';
import * as Contentful from 'contentful';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import '../../App.css';
import './Nyheder.css';
import './ListOfPosts.css';

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
  
  const ENTRIES_PER_PAGE = 10;
  
  function ListOfPosts({ match }) {
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
      <div key={entry.sys.id}>

            <NavLink to={{ pathname: `/newpage`, state: entry}}>
              <p onClick={(e) => setTestEntry(entry.sys.id)}>{entry.fields.title}</p>
            </NavLink>
      </div>
    ));
  
    return (
      <div className="latestposts">
          <p>Seneste artikler:</p>
        {Entries}
      </div>
      );
  }
  
  export default ListOfPosts;