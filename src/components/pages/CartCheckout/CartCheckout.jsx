import React, { useMemo, useRef } from "react";
import "./CartCheckout.css";
import ListCardPay from "../../ListCardPay/ListCardPay";
import logovnpay from "./vnpay-icon.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../../store/reduces/cart";
import { formatNumber } from "../../../untils";
import { selectUser } from "../../../store/reduces/auth";

const CartCheckout = () => {
  const cart = useSelector(selectCart);
  const form = useRef();
  const user = useSelector(selectUser);

  const total = useMemo(() => {
    // console.log(cart.items.reduce((pre,item)=>{console.log(item.course.price); return item.course.price+pre},0));
    return cart.items.reduce((pre, item) => {
      return item.course.price + pre;
    }, 0);
  }, [cart]);

  return (
    <div className="cart-checkout">
      <ListCardPay items={cart.items} />

      <div className="total-pay">
        <h3>Tổng cộng</h3>
        <div className="line-cart"></div>
        <h5>{formatNumber(total)} VNĐ</h5>
        <br />

        <h3>Phương thức thanh toán</h3>

        <div className="box-total">
          <div className="box-total-header">
            <img src={logovnpay} alt="" />
            <p className="text-white">
              <b> VN PAY</b>
            </p>
          </div>
          <div className="box-total-body text-center">
            <p>
              Để hoàn tất giao dịch của bạn, chúng tôi sẽ chuyển bạn đến các máy
              chủ an toàn của VN Pay.
            </p>

            <p>
              <b>Số tiền bạn sẽ bị VN Pay tính là:</b>
            </p>

            <p>
              <b>{formatNumber(total)} vnđ</b>
            </p>
          </div>
          <div className="box-total-footer text-center py-2">
            <form
              ref={form}
              hidden
              action="http://localhost:8000/payment"
              method="post"
            >
              <input type="text" value={total} name="amount" />
              <input type="text" value={"VNBANK"} name="bankCode" />
              <input type="text" value={"vn"} name="language" />
              <input type="text" value={user?.sub} name="userId" />
              <button type="submit">Thanh toan</button>
            </form>
            <button
              onClick={() => {
                form.current.submit();
              }}
              className="payment-procedures bg-transparent"
            >
              Thủ tục thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
