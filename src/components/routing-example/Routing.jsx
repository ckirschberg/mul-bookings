import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from './About';
import Home from './Home';
import Layout from './Layout';
import NoMatch from './NoMatch';
import {useState} from 'react';

export default function Routing() {

  return (
    <div>
      <h1>Routing root</h1>
      {test}
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}