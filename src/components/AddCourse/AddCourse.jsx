import React, { useState } from "react";
import "./AddCourse.css";
import { Select, Space } from "antd";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const AddCourse = () => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div className="add-course">
      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Create course
      </p>

      <p>Tạo khóa học của bạn</p>

      <div className="form-add">
        <p className="title-add-name-course">Tên khóa học</p>
        <input className="add-name-course" type="text" />
        <p className="title-add-name-course mt-3">Danh mục</p>
        <Select
          className="select-categories mt-"
          mode="multiple"
          style={{
            width: "600px",
            height: "60px",
            // border: "1px solid #EA4C89",
          }}
          placeholder="select one country"
          defaultValue={["china"]}
          onChange={handleChange}
          optionLabelProp="label"
        >
          <Option value="china" label="China">
            <Space>China (中国)</Space>
          </Option>
          <Option value="usa" label="USA">
            <Space>USA (美国)</Space>
          </Option>
          <Option value="japan" label="Japan">
            <Space>Japan (日本)</Space>
          </Option>
          <Option value="korea" label="Korea">
            <Space>Korea (韩国)</Space>
          </Option>
        </Select>

        <p className="title-add-name-course mt-3">Mô tả khóa học</p>
        <textarea
          className="add-detail-course"
          name="w3review"
          rows="4"
          cols="50"
        >
          At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies.
        </textarea>

        <p className="title-add-name-course mt-3">Giá tiền</p>
        <input className="price-course add-name-course" type="number" />

        <p className="title-add-name-course mt-3">Ảnh bìa</p>
        <ImgCrop rotationSlider>
          <Upload
            className="my-3"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>

        <div className="button-cancel-next">
          <button className="btn-cancel">Hủy</button>

          <button className="btn-next">Tiếp theo</button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
