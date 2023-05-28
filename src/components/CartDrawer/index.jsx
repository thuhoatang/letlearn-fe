import { Drawer } from "antd";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, setStatus, updateCarts } from "../../store/reduces/cart";
import Item from "./Item";
import style from "./style.module.scss";
import classNames from "classnames";
import { formatNumber } from "../../untils";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

export default function CartDrawer() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const navigate = useNavigate()
  const onClose = () => {
    dispatch(setStatus(false));
  };
  useEffect(() => {
    dispatch(updateCarts());
  }, []);
  const total = useMemo(() => {
    // console.log(cart.items.reduce((pre,item)=>{console.log(item.course.price); return item.course.price+pre},0));
   return cart.items.reduce((pre,item)=>{ return item.course.price+pre},0)
  }, [cart]);
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
        {cart?.items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
        {/* <Item />
        <Item />
        <Item /> */}

        <div className={cx(style["text-gotocart"])}>
          <h3>{`Total: ${formatNumber(total)} vnđ`}</h3>
          <div>
            <button onClick={()=>{
              navigate("/cart-checkout")
            }} >Thanh toán</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
