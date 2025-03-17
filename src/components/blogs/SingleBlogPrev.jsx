import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleBLog() {
  return (
    <Card className="mt-2">
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body
        onClick={() => {
          console.log("Header Clicked");
        }}
      >
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="secondary">View</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBLog;
