import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentBadge from "../badges/CommentBadge";
import { useNavigate } from "react-router-dom";

function SingleBlogPrev({ title, content, commentCount, _id }) {
  const navigate = useNavigate();

  const openBlog = () => {
    navigate("/blogs/" + _id);
  };
  return (
    <Card className="mt-2">
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="secondary" onClick={openBlog}>
          View
        </Button>
        <CommentBadge count={commentCount} />
      </Card.Body>
    </Card>
  );
}

export default SingleBlogPrev;
