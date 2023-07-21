import "../Recuperar.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function LoginForm(){    
    return(
        <Container className = "formularioRecover">
            <br></br>
            <Row>
                <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type = "text">
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Row>
        </Container>
    );
}

export default LoginForm;