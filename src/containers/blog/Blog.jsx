import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Have a Look at <br /> some of our Ai models</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01}  text="ChatGPT and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02}  text="Claude. Let us exlore how it is?" />
        <Article imgUrl={blog03}  text="Gemini Let us exlore how it is?" />
        <Article imgUrl={blog04}  text="Copilot. Let us exlore how it is?" />
        <Article imgUrl={blog05} text=" And Many More......" />
      </div>
    </div>
  </div>
);

export default Blog;
