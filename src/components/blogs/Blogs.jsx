import React from "react";
import { Container } from "react-bootstrap";
import SingleBlogPrev from "./SingleBlogPrev";
import blogService from "../../services/BlogService";

const Blogs = () => {
  let [blogs, setBlogs] = React.useState([]);
  // let { commentCount, setcommentCount } = React.useState(0);

  React.useEffect(() => {
    // console.log(blogService.getAllPostBlogs);
    blogService
      .getAllPostBlogs()
      .then((response) => {
        // console.log("Success");/
        // console.log(response.data);
        setBlogs(response.data);
      })
      .catch((error) => {
        // console.log("error");
        console.error(error);
      });
  }, []);

  return (
    <Container>
      {blogs.map((blog, index) => {
        return (
          <SingleBlogPrev
            key={index}
            title={blog.title}
            content={blog.content.substr(0, 50)}
            commentCount={blog.comments.length}
          />
        );
      })}
    </Container>
  );
};

export default Blogs;
