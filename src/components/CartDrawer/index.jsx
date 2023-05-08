import { Drawer } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, setStatus } from "../../store/reduces/cart";
import Item from "./Item";
import style from "./style.module.scss";
import classNames from "classnames";

const cx = classNames.bind(style);

export default function CartDrawer() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const onClose = () => {
    dispatch(setStatus(false));
  };

  return (
    <div>
      <Drawer
        title="Giò hàng của bạn"
        placement="right"
        onClose={onClose}
        open={cart.status}
        closable={false}
        width={600}
      >
        <Item />
        <Item />
        <Item />
      

        <div className={cx(style["text-gotocart"])}>
          <h3>Total: 123.335 vnđ</h3>
          <div>
            <button>Thanh toán</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
