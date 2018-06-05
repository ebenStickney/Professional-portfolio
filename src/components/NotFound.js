import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
<div className="welcomePage">
  <div className="blurb">
  404! Not All Who Wander Are Lost. But you are. <Link to="/">Go home</Link>
  </div>
</div>
);

export default NotFoundPage;
