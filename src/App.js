import style from './App.module.css';
import LeftCart from './components/left-cart/LeftCart';
import RigthCart from './components/rigth-cart/RigthCart';
import Context from './components/Context';
import React, { useState,useEffect } from 'react';
// [
//   {
//     name: "همبرگر معمولی",
//     price: 75000
//   },
//   {
//     name: "چیزبرگر ",
//     price: 85000
//   },
//   {
//     name: "کاراملایز برگر",
//     price: 95000
//   },
//   {
//     name: "دبل چیزبرگر ",
//     price: 105000
//   },
//   {
//     name: "چیکن برگر",
//     price: 80000
//   },
//   {
//     name: "اسلاید برگر",
//     price: 55000
//   },
//   {
//     name: "سالاد سزار",
//     price: 150000
//   },
//   {
//     name: "سالاد سیب زمینی",
//     price: 65000
//   },
//   {
//     name: "نوشابه",
//     price: 15000
//   },
//   {
//     name: "لیموناد",
//     price: 15000
//   },
//   {
//     name: "دلستر",
//     price: 15000
//   },
//   {
//     name: "آب",
//     price: 5000
//   }
// ]
const url="https://6479dd2aa455e257fa63ef13.mockapi.io/api/v1/online-Ordering"
function App() {
    const [apiList,setApiList] = useState([]); 
    const getAPI = ()=>{
      fetch(url).then(response=>response.json()).then(data=>{
        setApiList(data);
        document.getElementById("loading").style.display = "none";
      });
    }
    useEffect(()=>{
      getAPI();
      return ()=>{document.getElementById("loading").style.display = "block";} 
    },[])
  const [totalOrders, setTotalOrders] = useState(0)
  const discountCode = [{ code: "XD11CSF48V", percent: 10 },
  { code: "AXD11CSF4V", percent: 5 },
  { code: "5C254SWWF4V", percent: 12 },
  { code: "ENAQ58PL24V", percent: 20 }]
  return (
    <Context.Provider value={{ totalOrders: totalOrders, setTotalOrders: setTotalOrders, discountCodeList: discountCode, set_pricecount: null, set_Clear: [] }}>
      <div className={style.main}>
        <RigthCart myList={apiList} />
        <LeftCart />ّ
      </div>
    </Context.Provider>
  );
}

export default App;
