import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogService from "../../services/BlogService";
import { Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const SingleBlogComplete = () => {
  const [blog, setBlog] = useState(null);
  const { blogID } = useParams();
  console.log(blogID);

  useEffect(() => {
    blogService
      .getSingleBlog(blogID)
      .then((response) => {
        console.log(response.data);
        setBlog(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {blog != null ? (
        <Container>
          <h1>{blog[0].title}</h1>
          <p>{blog[0].content}</p>
          <hr />
          <h2>Comments</h2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {blog[0].comments.map((comment) => (
                <Grid size={12}>
                  <Item>
                    <h6>{comment.user.name}</h6>
                    <p>{comment.content}</p>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid container spacing={2}>
            <Grid size={12} className="mt-2">
              <Item>
                <h6>Leave a comment</h6>
                <TextField
                  fullWidth
                  label="Enter your comment"
                  id="fullWidth"
                />
                <Button variant="contained" color="success" className="mt-2">
                  Post Comment
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <div>The blog is either deleted or not found.</div>
      )}
    </div>
  );
};

export default SingleBlogComplete;
