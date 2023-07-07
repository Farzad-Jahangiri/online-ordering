import React, { useState, useContext } from "react";
import style from "./RightCart.module.css";
import hamberdefault from "../image-hamberger/hamber1.png";
import Context from "../Context";

function Cart(props) {
  const myContext = useContext(Context);
  const [count_hamberger, setCount_hamberger] = useState(0);
  const [priceCount, setPricecount] = useState(0);
  const { setTotalOrders } = myContext;
  const price = props.price;
  myContext.set_Clear.push({setCount_hamberger:setCount_hamberger,setPricecount:setPricecount})

  const ChengeCount = (event) => {
    const action = event.target.innerHTML;
    if (action === "+") {
      setCount_hamberger(count_hamberger + 1);
      setPricecount((prevValue) => {
        if (prevValue === 0) {
          return price;
        }
        return prevValue + price;
      });
      setTotalOrders((prevValue) => {
        return prevValue + price;
      });
    } else {
      setCount_hamberger((preValue) => {
        if (preValue - 1 < 0) return preValue;
        return preValue - 1;
      });
      // setPricecount(price * count_hamberger);
      setPricecount((prevValue) => {
        if (prevValue === 0) {
          return prevValue;
        }
        return prevValue - price;
      });
      setTotalOrders((prevValue) => {
        if (count_hamberger <= 0) return prevValue;
        if (prevValue - price < 0) return prevValue;
        return prevValue - price;
      });
    }
  };

  return (
    <div className={style.hamberCart}>
      <div>
        <img src={hamberdefault} />
      </div>
      <div className={style.CartInfo}>
        <div>
          <p className={style.text}>{props.name}</p>
          <p className={style.textPrice}>{price.toLocaleString()} تومان</p>
        </div>
        <div className={style.CartInfo_count}>
          <div>
            <button className={style.btnCount} onClick={ChengeCount}>
              +
            </button>
            <input type="number" value={count_hamberger} />
            <button className={style.btnCount} onClick={ChengeCount}>
              -
            </button>
          </div>
          <p>{priceCount.toLocaleString()} تومان</p>
        </div>
      </div>
    </div>
  );
}

function RigthCart(props) {
  
  return (
    <div className={style.main}>
      <div className={style.head_title}>
        <h2>رستوران مک دونالد شعبه میناب</h2>
      </div>

      <div className={style.menu_list}>
        {props.myList.map((value) => (
          <Cart name={value.name} price={value.price} />
        ))}
      </div>
    </div>
  );
}

export default RigthCart;
