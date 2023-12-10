import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MyWinnings() {
  return (
    <div className="m-4">
      <Card style={{ borderRadius: "20px", cursor: "pointer" }}>
        <Card.Body>
          <Card.Title>
            <h1>My Winnings</h1>
          </Card.Title>
          <Card.Text className="mt-5">
            <h3>40% Discount Voucher</h3>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button style={{ backgroundColor: "#ec5c28", border: "none" }}>Receive</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
