import React from "react";
import "./App.css";

const books = [
  { id: 101, bname: "Master React", price: 670 },
  { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
  { id: 103, bname: "Mongo Essentials", price: 450 }
];

const blogs = [
  {
    id: 1,
    title: "React Learning",
    author: "Stephen Biz",
    content: "Welcome to learning React!"
  },
  {
    id: 2,
    title: "Installation",
    author: "Schwedenier",
    content: "You can install React from npm."
  }
];

const courses = [
  {
    id: 1,
    cname: "Angular",
    date: "4/5/2021"
  },
  {
    id: 2,
    cname: "React",
    date: "6/3/2021"
  }
];

function App() {
  return (
    <div className="container">

      <div className="box">
        <h1>Course Details</h1>

        {courses.map((course) => (
          <div key={course.id}>
            <h2>{course.cname}</h2>
            <h4>{course.date}</h4>
          </div>
        ))}
      </div>

      <div className="box">
        <h1>Book Details</h1>

        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </div>

      <div className="box">
        <h1>Blog Details</h1>

        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;