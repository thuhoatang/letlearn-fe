import React, { useState } from "react";
import "./CommentAction.css";
import { Icon } from "@iconify/react";
import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";

const CommentAction = ({ comment }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  const [form] = Form.useForm();

  return (
    <div className="comment-action">
      <div className="input-content">
        <p className="mx-0">
          <b>Nhập bình luận của bạn</b>
        </p>

        <Form
          onFinish={(value) => {
            comment(value.content);
            form.resetFields(["content"]);
          }}
          form={form}
        >
          <Form.Item name={"content"} rules={[{ required: true }]}>
            <TextArea title="Nhập bình luận của bạn" rows={4} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" onClick={() => {}} type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </Form>
        {/* <textarea className="input-comment" /> */}
      </div>

      <div className="rating-heart">
        <button
          style={{
            backgroundColor: isActive ? "transparent" : "",
            color: isActive ? "#EA4C89" : "",
          }}
          onClick={handleClick}
        >
          <Icon icon="ph:heart-fill" className="icon-heart" />
        </button>
      </div>
    </div>
  );
};

export default CommentAction;
