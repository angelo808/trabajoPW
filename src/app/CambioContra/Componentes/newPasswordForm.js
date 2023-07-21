import "../CambioContra.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function newPasswordRecover(){    
    return(
        <Container className = "nuevaContraseña">
            <br></br>
            <Row>
                <Form.Group>
                    <Form.Label id = 'password1'>Ingrese la contraseña actual</Form.Label>
                    <Form.Control type = "password"></Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label id = 'password2'>Ingrese una contraseña nueva</Form.Label>
                    <Form.Control type="password"></Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label id = 'password3'>Confirme la nueva contraseña</Form.Label>
                    <Form.Control type="password"></Form.Control>
                </Form.Group>
            </Row>
        </Container>
    );
}
export default newPasswordRecover;