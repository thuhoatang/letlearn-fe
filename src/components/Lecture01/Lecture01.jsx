import React, { useContext, useRef, useState } from "react";
import "./Lecture01.css";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import lesson from "../../service/item";
import ReactPlayer from "react-player";
import { MangagementCourse } from "../../contexts";
import NotificationContext from "../../contexts/notification";
import { SmileOutlined } from "@ant-design/icons";

const fileList = [
  {
    uid: "0",
    name: "xxx.png",
    status: "uploading",
    percent: 33,
  },
  {
    uid: "-1",
    name: "yyy.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "zzz.png",
    status: "error",
  },
];

const Lecture01 = ({ sectionId, item }) => {
  const [fileList, setFileList] = useState([]);
  const { reload } = useContext(MangagementCourse);
  const { api } = useContext(NotificationContext);

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };
  const [form] = Form.useForm();

  return (
    <div className="add-lecture">
      <p className="mx-0 my-2" style={{ fontSize: "18px" }}>
        <b>Bài học: </b> {item?.id ? item.title : "Đang được thêm"}
      </p>
      {item?.id ? null : (
        <Form
          form={form}
          initialValues={item?.id ? { title: item.title } : {}}
          onFinish={(values) => {
            // console.log({
            //   ...values,
            //   description: "default",
            //   time: 2,
            //   file: fileList?.[0],
            // });
            lesson
              .create({
                ...values,
                description: "default",
                time: 2,
                itemTypeId: 1,
                sectionId: sectionId,
                file: fileList?.[0].originFileObj,
              })
              .then((res) => {
                console.log(res);
                if (res.id) {
                  reload();
                  form.resetFields(["title"]);
                  setFileList([]);
                  api.open({
                    message: "Thông báo",
                    description: "Đã thêm bài học thành công!",
                    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
                  });
                }
              });
          }}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="title-lecture my-2 px-4"
              placeholder="Nhập tiêu đề bài học"
            />
          </Form.Item>
          {/* <Form.Item>
          <Input
            // readsOnly
            name="title"
            className="title-lecture my-2 px-4"
            placeholder="Nhập tiêu đề bài học"
          />
        </Form.Item> */}
          {/* <input
          className="title-lecture my-2 px-4"
          type="text"
          placeholder="Nhập tiêu đề bài học"
        /> */}
          <br />
          <Upload
            accept="video/*"
            fileList={fileList}
            onChange={handleFileChange}
            maxCount={1}
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>Chọn video</Button>
          </Upload>
          <Form.Item>
            <button
              type="submit"
              // hidden={!creating}
              className="button-submit-lesson mx-0 mt-3"
            >
              Đồng ý
            </button>
          </Form.Item>
        </Form>
      )}

      {item?.typeItem?.id == 1 ? (
        <ReactPlayer url={item?.lecture?.video} controls={true} />
      ) : null}
      {/* <Button onClick={handleUpload}>Tải lên</Button> */}
      {/* {fileList.map((file) => (
        <Player key={file.uid} fluid={false} width={200} height={150}>
          <source src={URL.createObjectURL(file)} />
        </Player>
      ))} */}
      {/* <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        defaultFileList={[]}
      >
        <Button icon={<UploadOutlined />}>Tải video của bạn</Button>
      </Upload> */}
      <br />
    </div>
  );
};

export default Lecture01;
