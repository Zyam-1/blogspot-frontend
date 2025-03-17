import React from "react";
import { Container } from "react-bootstrap";
import SingleBLog from "./SingleBlogPrev";
import blogService from "../../services/BlogService";

const Blogs = () => {
  let [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    console.log(blogService.getAllPostBlogs);
    blogService
      .getAllPostBlogs()
      .then((response) => {
        console.log("Success");
        console.log(response);
      })
      .catch((error) => {
        console.log("error");
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <SingleBLog />
    </Container>
  );
};

export default Blogs;
