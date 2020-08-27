import React from 'react';
import Layout from './core/layout'

const App = () => {
  return (
    <Layout>
      <div className="col-d-6 offset-md-3 text-center">
        <h1 className='p-5'> React Node MongoDB Authentication Boilerplate </h1>
        <h2> MERN STACK </h2>
        <hr/>
        <p className="lead">
          Mern stack login register system with account activation, login with facebook and google as well as private and protected routes for authenticated user and users with role of admin.
        </p>
      </div>
    </Layout>
  )
}

export default App;
