import QRCode from 'react-native-qrcode-svg';
import React from 'react';

const QR = (props) => {
    return (
    <QRCode value={props.uuid}/>
    );
}

export default QR