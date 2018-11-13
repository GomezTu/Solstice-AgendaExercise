import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import { Link } from 'react-router-dom';
import Header from "./Header";

const Table = ({ rows, selectContact, fetching, title }) => {
  if (rows.length) {
    return (
      <div className="card">
        <div className="card-header">
          <Header title={title} isFavorite={false} className={'justify-content-left'} />
        </div>
        <ul className='list-group list-group-flush'>
          {rows.map((r, idx) => (
            <li className='list-group-item'>
              <Link key={idx} to={'/contact/' + r.id}>
                <Row onClick={selectContact} row={r} key={idx} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (fetching) {
    return <h2 className="">Loading ... </h2>
  } else {
    return <span>No results found. Please review the search criteria</span>
  }
};

Table.propTypes = {
  rows: PropTypes.array
};

export default Table;
