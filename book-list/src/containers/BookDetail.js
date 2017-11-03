import React from 'react';
import { connect } from 'react-redux';

const BookDetail = ({ activeBook }) => (
  <div className="col-sm-8">
    <p>Details for:</p>
    {
      activeBook &&
      <div>
        <h3>{activeBook.title}</h3>
        <p>Pages: {activeBook.pages}</p>
      </div>
    }
  </div>
);

const mapStateToProps = ({ activeBook }) => ({ activeBook });

export default connect(mapStateToProps)(BookDetail);
