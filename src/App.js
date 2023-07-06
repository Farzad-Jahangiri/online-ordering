import style from './App.module.css';
import LeftCart from './components/left-cart/LeftCart';
import RigthCart from './components/rigth-cart/RigthCart';
import Context from './components/Context';
import React, { useState } from 'react';

function App() {
  const [totalOrders, setTotalOrders] = useState(0)
  const discountCode = [{ code: "XD11CSF48V", percent: 10 },
  { code: "AXD11CSF4V", percent: 5 },
  { code: "5C254SWWF4V", percent: 12 },
  { code: "ENAQ58PL24V", percent: 20 }]
  return (
    <Context.Provider value={{ totalOrders: totalOrders, setTotalOrders: setTotalOrders, discountCodeList:discountCode, set_pricecount:null }}>
      <div className={style.main}>
        <RigthCart />
        <LeftCart />ّ
      </div>
    </Context.Provider>
  );
}

export default App;
