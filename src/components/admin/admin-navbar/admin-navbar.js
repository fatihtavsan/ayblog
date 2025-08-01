import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./admin-navbar.css";

function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3 admin-nav">
      <Container>
        <Nav className="w-100">
          <Row className="ms-0 w-100">
            <Col className="d-flex justify-content-center">
              <Button
                className="w-100 admin-nav-btn"
                onClick={() => navigate("/admin/posts")}
              >
                📄 Posts
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                className="w-100 admin-nav-btn" 
                onClick={() => navigate("/admin/tags")}
              >
                🏷️ Tags
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button
                className="w-100 admin-nav-btn"
                onClick={() => navigate("/admin/stats")}
              >
                📊 Stats
              </Button>
            </Col>
          </Row>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
