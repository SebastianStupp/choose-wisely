import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Button from '../components/Buttons/NextPageButton';

function Vote() {
  return <Footer>{<Button>{<Link to="/Result">Next</Link>}</Button>}</Footer>;
}

export default Vote;
