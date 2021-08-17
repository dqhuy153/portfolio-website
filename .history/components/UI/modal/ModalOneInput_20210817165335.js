import React from 'react';

export default function Modaloneinput({
    onSubmit,
    onClose,
    onTextChange,

    submitText = 'OK',
    closeText = 'Close',

    show,
    ...props
}) {
    return <></>;
}

const ModalOneInput = ({}) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onBackdropClick={props.onBackdropClick} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};
