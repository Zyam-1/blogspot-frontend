import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { MessageCircle } from "lucide-react";

function CommentBadge({ count }) {
  return (
    <div style={{ float: "right" }}>
      <MessageCircle /> <Badge bg="secondary">{count}</Badge>
    </div>
  );
}

export default CommentBadge;
