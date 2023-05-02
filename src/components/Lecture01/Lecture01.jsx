import React from "react";
import "./Lecture01.css";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

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

const Lecture01 = ({ lessonId }) => {
  return (
    <div className="add-lecture">
      <p className="mx-0">
        <b>Tiêu đề bài học {lessonId}</b>
      </p>

      <input
        className="title-lecture my-2 px-4"
        type="text"
        placeholder="Nhập tiêu đề bài học"
      />
      <br />
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        defaultFileList={[]}
      >
        <Button icon={<UploadOutlined />}>Tải video của bạn</Button>
      </Upload>
      <br />
    </div>
  );
};

export default Lecture01;
