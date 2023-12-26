import { Container, Row, Col} from "react-bootstrap"

const FooterComponent = () => {
    return (
        <footer>
        <Container fluid>
      <Row className="mt5">
        <Col className="bg-dark text-white text-center py-5">
        "Copyright &copy; SHOPYAY!"
        </Col>
      </Row>
    </Container>
    </footer>
       
    )
}
export default FooterComponent