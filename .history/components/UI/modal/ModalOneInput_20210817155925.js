import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalOneInput(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    {submitText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalOneInput;
