import React, { useState } from "react";
import "./AddSection.css";
import { Icon } from "@iconify/react";
import AddLesson from "../AddLesson/AddLesson";
import { Form, Input } from "antd";
import sectionService from "../../service/section";

const AddSection = ({
  sectionId,
  courseId,
  index,
  title = "",
  description = "",
  reload,
  ...props
}) => {
  const [showOption, setShowOption] = React.useState(false);
  const [lessonCounter, setLessonCounter] = React.useState(1);
  const [id, setId] = useState(sectionId);
  const [creating, setCreating] = useState(sectionId === undefined);
  function onChangeForm() {}

  function addLesson(event) {
    event.preventDefault();
    setShowOption(true);
    setLessonCounter((prev) => prev + 1);
  }
  return (
    <div className="add-section">
      <div className="header-section">
        <p className="title">
          Chương {1 + index}: {title}
        </p>
        <button className="button-delete">
          <Icon className="icon-detele" icon="mingcute:delete-2-fill" />
        </button>
      </div>
      <Form
        initialValues={
          sectionId !== undefined
            ? { title: title, description: description }
            : {}
        }
        onFinish={(values) => {
          const fun = async () => {
            const res = await sectionService.create({
              ...values,
              courseId: courseId,
            });
            setId(res.id);
            setCreating(true);
            if (sectionId === undefined) {
              reload();
            }
            // console.log(res);
          };
          fun();
        }}
      >
        <div className="description-section mx-4">
          <p className="mx-0">Tên chương học</p>
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              readOnly={!creating}
              className="input-name-section px-4"
              type="text"
              placeholder="Nhập tên chương"
            />
          </Form.Item>

          <p className="mx-0 mt-4">Mô tả chương học</p>
          <Form.Item
            name="description"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <input
              readOnly={!creating}
              className="input-name-section px-4"
              type="text"
              placeholder="Nhập mô tả"
            />
          </Form.Item>
        </div>

        <Form.Item>
          <button
            type="submit"
            hidden={!creating}
            className="button-submit-lesson"
          >
            Đồng ý
          </button>
        </Form.Item>
      </Form>

      {/* button them bài học nhỏ */}
      {/* {Array.from({ length: lessonCounter }, (_unused, index) => index + 1).map(
        (lessonIndex) => {
          const lessonId = `${lessonIndex}`;
          return <AddLesson lessonId={lessonId} />;
        }
      )} */}

      {props?.items?.map((item) => {
        return <AddLesson key={item.id} sectionId={sectionId} item={item} />;
      })}
      {showOption && <AddLesson sectionId={sectionId} />}
      {sectionId && (
        <button className="button-add-lesson" onClick={addLesson}>
          Thêm bài học
        </button>
      )}
    </div>
  );
};

export default AddSection;
