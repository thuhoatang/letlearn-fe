import React from "react";
import "./CartCheckout.css";
import ListCardPay from "../../ListCardPay/ListCardPay";
import logovnpay from "./vnpay-icon.jpg";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  return (
    <div className="cart-checkout">
      <ListCardPay />

      <div className="total-pay">
        <h3>Tổng cộng</h3>
        <div className="line-cart"></div>
        <h5>1.050.000 VNĐ</h5>
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
              <b>129.000 vnđ</b>
            </p>
          </div>
          <div className="box-total-footer text-center py-2">
            <button className="payment-procedures bg-transparent">
              Thủ tục thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
