import React from 'react';

import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div clLinkssNLinkme="Linkpp">
        <h1>ReLinkct Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">about</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
