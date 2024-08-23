import { useEffect, useState } from "react";
import Table from "../components/ordersComponents/Table";
import Pegination from "../components/Pegination";

const orders = [
  {
    id: 1,
    image: "images/bottle.png",
    product: "Qindzmarauli",
    date: "12/03/24",
    status: "Declined",
    price: "23₾",
    customer: "Alicia Mary",
  },
  {
    id: 2,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 3,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 4,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 5,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 6,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 7,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 8,
    image: "images/bottle.png",
    product: "Qindzmarauli",
    date: "12/03/24",
    status: "Declined",
    price: "23₾",
    customer: "Alicia Mary",
  },
  {
    id: 9,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 10,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 11,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 12,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 13,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 14,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 15,
    image: "images/bottle.png",
    product: "Qindzmarauli",
    date: "12/03/24",
    status: "Declined",
    price: "23₾",
    customer: "Alicia Mary",
  },
  {
    id: 16,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 17,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 18,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 19,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 20,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 21,
    image: "images/bottle.png",
    product: "Qindzmarauli",
    date: "12/03/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
];

function Orders() {
  const [peginatedOrders, setPeginatedOrders] = useState([]);
  const ordersPerPage = 8;

  useEffect(() => {
    setPeginatedOrders(orders.slice(0, ordersPerPage));
  }, []);

  return (
    <div className="w-[78%] h-[850px] bg-white border-[3px] border-purple-300 rounded-xl text-purple-800 flex flex-col">
      <div className="flex justify-between mb-8 p-8">
        <h1 className="text-2xl">All orders</h1>
        <div className="bg-purple-400 flex justify-around items-center text-white p-1 w-[90px] rounded-3xl cursor-pointer">
          <img src="images/filterIcon.svg" alt="icon" className="w-6 h-6" />
          <span className="text-lg">Filter</span>
        </div>
      </div>
      <Table data={peginatedOrders} />
      <div className="mt-auto pb-8">
        <Pegination
          itemsArray={orders}
          itemsPerPage={ordersPerPage}
          setPeginatedItems={setPeginatedOrders}
        />
      </div>
    </div>
  );
}

export default Orders;
