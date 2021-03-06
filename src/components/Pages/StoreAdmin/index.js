import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
// import { ErrorWrap } from './../../../components';

class StoreAdmin extends React.Component {
  render() {
    const title = ' - Blank Page';
    const description = 'desc';
    return (
      <div>
        <Helmet>
          <title>title</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        {/* <ErrorWrap title="Hi..!!" desc="Welcome to Rockin App Admin" /> */}
      </div>
    );
  }
}

export default StoreAdmin;
