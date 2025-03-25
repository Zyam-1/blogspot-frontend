import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentBadge from "../badges/CommentBadge";

function SingleBlogPrev({ title, content, commentCount }) {
  return (
    <Card className="mt-2">
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button
          variant="secondary"
          onClick={() => console.log("View Button Clicked")}
        >
          View
        </Button>
        <CommentBadge count={commentCount} />
      </Card.Body>
    </Card>
  );
}

export default SingleBlogPrev;
