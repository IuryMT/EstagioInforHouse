import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./css/ImageUpload.scss";
import { UploadOutlined } from '@ant-design/icons';
import { Form, Button, Upload } from 'antd';

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


export const ImageUpload = () => {

    const [image, setImage] = useState();
    const [cropData, setCropData] = useState("#");
    const [cropper, setCropper] = useState();
    const onChange = (e) => {
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };

    return (
        <>
            <Form
                name="validate_other"
                {...formItemLayout}
                style={{ background: 'gray' }}
            >
                <div style={{ width: "100%", padding: 10, height: 'auto' }}>
                    <Form.Item
                        name="upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        onChange={onChange}
                    >
                        <Upload name="logo" action="#" listType="picture">
                            <Button icon={<UploadOutlined />} style={{ marginTop: '50%', transform: "translateX(-50%)", marginRight: '50%', position: 'relative' }}>Click to upload</Button>
                        </Upload>
                    </Form.Item>

                    <br />
                    <br />
                    <Cropper
                        style={{ height: 300, width: "100%", borderRadius: 0 }}
                        zoomTo={0.5}
                        initialAspectRatio={1}
                        preview=".img-preview"
                        src={image}
                        viewMode={1}
                        minCropBoxHeight={10}
                        cropBoxWidth={100}
                        cropBoxHeight={100}
                        minCropBoxWidth={10}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                        onInitialized={(instance) => {
                            setCropper(instance);
                        }}
                        guides={true}
                    />
                </div>
                <div>
                    <div
                        className="box"
                        style={{ width: "50%", margin: 'auto', height: 200 }}
                    >
                        <h1>
                            <button style={{ float: "center", background: 'white', cursor: 'pointer', border: 0, marginBottom: 10, padding: 5, borderRadius: 5, boxShadow: "2px 2px 10px black" }} onClick={getCropData}>
                                Recortar Imagem
                            </button>
                        </h1>
                        <img style={{ width: 200, borderRadius: 0, height: 200 }} src={cropData} alt="Selecione uma imagem" />
                    </div>

                </div>
                <br style={{ clear: "both" }} />
                <br style={{ clear: "both" }} />
                <br style={{ clear: "both" }} />
                <br style={{ clear: "both" }} />
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ marginTop: 60, margin: 'auto', transform: 'translateX(-50%)' }}>
                        Enviar
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
};

