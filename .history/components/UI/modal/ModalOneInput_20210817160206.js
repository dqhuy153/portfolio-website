import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalOneInput({
    onSubmit,
    onClose,
    submitText = 'OK',
    closeText = 'Close',

    show,
    ...props
}) {
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
                    {closeText}
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    {submitText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalOneInput;
