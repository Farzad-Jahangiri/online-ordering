import React, { useContext, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import style from "./leftCart.module.css";
import Context from "../Context";

function LeftCart() {
  const { totalOrders, discountCodeList } = useContext(Context);
  const [percent, setPercent] = useState(0);
  const [checkedPercent, setCheckedPercent] = useState(false);
  const DiscountCode_function = (state, action) => {
    const _discountCode = action.target.value;
    let check = true;
    discountCodeList.forEach((value) => {
      if (value.code === _discountCode) {
        setPercent(value.percent);
        check = false;
      }
    });
    if (check) setPercent(0);
    return _discountCode;
  };

  const [discountCode, dispatchDiscountCode] = useReducer(
    DiscountCode_function,
    ""
  );
  const serviceCharge = 40;

  const Submit = (event) => {
    if (totalOrders !== 0)
      document.getElementById("modale").style.display = "flex";
    setTimeout(() => {
      document.getElementById("modale").style.display = "none";
    }, 3000);
  };

  return (
    <div className={`${style.main}`}>
      <div className={`${style.d_flex} ${style.between}`}>
        <h4>جمع کل سفارشات:</h4>
        <h4>{totalOrders.toLocaleString()} تومان</h4>
      </div>

      <div className={`${style.d_flex} ${style.between}`}>
        <h4>حق سرویس و کارمزد:</h4>
        <h4>{serviceCharge} تومان</h4>
      </div>

      <div className={`${style.d_flex} ${style.between}`}>
        <h4>تخفیف:</h4>
        <h4>{percent} درصد</h4>
      </div>

      <div className={style.discount_code}>
        <input
          type="text"
          value={discountCode}
          onChange={dispatchDiscountCode}
          placeholder="کد تخفیف"
        />
        <input
          onChange={(e) => {
            setCheckedPercent(e.target.checked);
          }}
          type="checkbox"
        />
      </div>

      <div className={`${style.amount_payable}`}>
        <h4>مبلغ قابل پرداخت:</h4>
        {/* <h4>{totalOrders!==0?(serviceCharge+totalOrders):0} تومان</h4> */}
        <h4>
          {totalOrders !== 0
            ? (
                (percent !== 0 && checkedPercent
                  ? totalOrders - (totalOrders / 100) * percent
                  : totalOrders) + serviceCharge
              ).toLocaleString()
            : 0}{" "}
          تومان
        </h4>
      </div>

      <div className={style.button}>
        <button onClick={Submit}>ثبت سفارش</button>
      </div>
    </div>
  );
}

export default LeftCart;
