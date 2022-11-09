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
    console.log(e.file);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


export const ImageUpload = () => {

    const onFinish = (values) => {
        console.log(values, "32");
    };

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
            console.log(image)
        }
    };

    return (
        <>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
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
                            <Button icon={<UploadOutlined />} style={{ marginTop: '50%', marginRight: '50%', position: 'relative' }}>Click to upload</Button>
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
                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                        onInitialized={(instance) => {
                            setCropper(instance);
                        }}
                        guides={true}
                    />
                </div>
                <div>
                    <div
                        className="box"
                        style={{ width: "50%", float: 'left', height: 200 }}
                    >
                        <h1 style={{ marginBottom: 10 }}>Pré visualização</h1>
                        <div
                            className="img-preview"
                            style={{ width: "50%", float: "center", height: "200px" }}
                        />
                    </div>
                    <div
                        className="box"
                        style={{ width: "50%", float: "right", height: "200px" }}
                    >
                        <h1>
                            <button style={{ float: "center", background: 'white', cursor: 'pointer', border: 0, marginBottom: 10, padding: 5, borderRadius: 5 }} onClick={getCropData}>
                                Recortar Imagem
                            </button>
                        </h1>
                        <img style={{ width: "50%", borderRadius: 0, height: 200 }} src={cropData} alt="Selecione uma imagem" />
                    </div>

                </div>
                <br style={{ clear: "both" }} />
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ marginTop: 60, margin: 'auto' }}>
                        Enviar
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
};

