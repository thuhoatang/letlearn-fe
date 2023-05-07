import { Drawer } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, setStatus } from "../../store/reduces/cart";

export default function CartDrawer() {
//   const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart)
  const onClose = () => {
    dispatch(setStatus(false));
  };

  return (
    <div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={cart.status}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
