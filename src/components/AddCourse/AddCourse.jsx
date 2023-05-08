import React, { useState } from "react";
import "./AddCourse.css";
import { Form, Input, Select, Space } from "antd";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useSelector } from "react-redux";
import { selectCategoies } from "../../store/reduces/categories";
import courseService from "../../service/course";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const AddCourse = () => {
  const categories = useSelector(selectCategoies);
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    // console.log(fileList?.[0]?.originFileObj);
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
      <Form
        onFinish={(value) => {
          value["file"] = fileList?.[0]?.originFileObj;
          courseService.create(value).then((data) => {
            if (data.id) {
              navigate("/teacher/add-course/" + data.id);
            }
          });
        }}
        onFinishFailed={(value) => {
          console.log(value);
        }}
        autoComplete="off"
      >
        <div className="form-add">
          <p className="title-add-name-course">Tên khóa học</p>
          <Form.Item name={"title"}>
            <input className="add-name-course" type="text" />
          </Form.Item>
          <p className="title-add-name-course mt-3">Danh mục</p>
          <Form.Item name={"subCategoryId"}>
            <Select
              className="select-categories mt-"
              mode="multiple"
              style={{
                width: "600px",
                height: "60px",
              }}
              placeholder="select one country"
              onChange={handleChange}
              optionLabelProp="label"
            >
              {categories?.map((category) => {
                return category.subCategories?.map((sub) => (
                  <Option value={sub.id} label={sub.name}>
                    <Space>{sub.name}</Space>
                  </Option>
                ));
              })}
            </Select>
          </Form.Item>

          <p className="title-add-name-course mt-3">Mô tả khóa học</p>
          <Form.Item name="description">
            <Input.TextArea></Input.TextArea>
          </Form.Item>
          {/* <textarea
            className="add-detail-course"
            name="w3review"
            rows="4"
            cols="50"
          >
            At w3schools.com you will learn how to make a website. They offer
            free tutorials in all web development technologies.
          </textarea> */}

          <p className="title-add-name-course mt-3">Giá tiền</p>
          <Form.Item name={"price"}>
            <input className="price-course add-name-course" type="number" />
          </Form.Item>

          <p className="title-add-name-course mt-3">Ảnh bìa</p>
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

          <div className="button-cancel-next">
            <button className="btn-cancel">Hủy</button>

            <button className="btn-next">Tiếp theo</button>
          </div>
        </div>{" "}
      </Form>
    </div>
  );
};

export default AddCourse;
