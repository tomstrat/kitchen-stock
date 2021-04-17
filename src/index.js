import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Category from "./components/Category/category";
import reportWebVitals from './reportWebVitals';
import Menu from "./components/Menu/menu";
import categoryData from "./testdata2.json";

ReactDOM.render(
  <React.StrictMode>
    {categoryData.map((cat, key) => {
      return (
        <Category title={cat.category} items={cat.items}/>
      );
    })}
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
