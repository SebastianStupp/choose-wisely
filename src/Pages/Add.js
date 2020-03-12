import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/NextPageButton";
import AddInput from "../components/Cards/AddInput";
import "../components/Cards/AddInput.css";
function Add() {
  return (
    <Footer>
      <AddInput></AddInput>
      <Button>
        <Link to="/Vote">Next</Link>
      </Button>
    </Footer>
  );
}

export default Add;
