import { useEffect, useState } from "react";
import Pegination from "../components/Pegination";

import Table from "../components/ordersComponents/Table";
import FilterDropdown from "../components/ordersComponents/FilterDropdown";

import { parse, compareAsc, compareDesc } from "date-fns";

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
    date: "12/05/24",
    status: "Processing",
    price: "80₾",
    customer: "Alicia Mary",
  },
  {
    id: 3,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "13/03/24",
    status: "Declined",
    price: "75₾",
    customer: "Alicia Mary",
  },
  {
    id: 4,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/03/24",
    status: "Processing",
    price: "60₾",
    customer: "Alicia Mary",
  },
  {
    id: 5,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "14/02/24",
    status: "Received",
    price: "15₾",
    customer: "Alicia Mary",
  },
  {
    id: 6,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "18/03/24",
    status: "Processing",
    price: "15₾",
    customer: "Alicia Mary",
  },
  {
    id: 7,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "12/06/24",
    status: "Declined",
    price: "25₾",
    customer: "Alicia Mary",
  },
  {
    id: 8,
    image: "images/bottle.png",
    product: "Qindzmarauli",
    date: "11/03/24",
    status: "Declined",
    price: "23₾",
    customer: "Alicia Mary",
  },
  {
    id: 9,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "24/02/24",
    status: "Received",
    price: "20₾",
    customer: "Alicia Mary",
  },
  {
    id: 10,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "25/03/24",
    status: "Declined",
    price: "35₾",
    customer: "Alicia Mary",
  },
  {
    id: 11,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "15/06/24",
    status: "Received",
    price: "50₾",
    customer: "Alicia Mary",
  },
  {
    id: 12,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "12/07/24",
    status: "Received",
    price: "40₾",
    customer: "Alicia Mary",
  },
  {
    id: 13,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "18/08/24",
    status: "Received",
    price: "15₾",
    customer: "Alicia Mary",
  },
  {
    id: 14,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "17/04/24",
    status: "Declined",
    price: "45₾",
    customer: "Alicia Mary",
  },
  {
    id: 15,
    image: "images/bottle.png",
    product: "Qindzmarauli",
    date: "19/01/24",
    status: "Declined",
    price: "23₾",
    customer: "Alicia Mary",
  },
  {
    id: 16,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "16/06/24",
    status: "Received",
    price: "55₾",
    customer: "Alicia Mary",
  },
  {
    id: 17,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "19/09/24",
    status: "Declined",
    price: "120₾",
    customer: "Alicia Mary",
  },
  {
    id: 18,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "11/04/24",
    status: "Processing",
    price: "65₾",
    customer: "Alicia Mary",
  },
  {
    id: 19,
    image: "images/bottle.png",
    product: "Saperavi",
    date: "13/07/24",
    status: "Declined",
    price: "70₾",
    customer: "Alicia Mary",
  },
  {
    id: 20,
    image: "images/bottle.png",
    product: "Tvishi",
    date: "07/10/24",
    status: "Processing",
    price: "75₾",
    customer: "Alicia Mary",
  },
  {
    id: 21,
    image: "images/bottle.png",
    product: "Qindzmarauli",
    date: "01/03/24",
    status: "Declined",
    price: "80₾",
    customer: "Alicia Mary",
  },
];

function Orders() {
  const [peginatedOrders, setPeginatedOrders] = useState([]);
  const ordersPerPage = 8;
  const [showFilter, setShowFilter] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [activeFilters, setActiveFilters] = useState({
    date: "",
    status: "",
    price: "",
  });

  useEffect(() => {
    setPeginatedOrders(filteredOrders.slice(0, ordersPerPage));
  }, [filteredOrders]);

  const handleFilterClick = () => {
    setShowFilter((prev) => !prev);
  };

  const handleFilter = (filters) => {
    let filtered = [...orders];

    if (filters.date === "asc") {
      filtered.sort((a, b) => {
        const dateA = parse(a.date, "dd/MM/yy", new Date());
        const dateB = parse(b.date, "dd/MM/yy", new Date());
        return compareAsc(dateA, dateB);
      });
    } else if (filters.date === "desc") {
      filtered.sort((a, b) => {
        const dateA = parse(a.date, "dd/MM/yy", new Date());
        const dateB = parse(b.date, "dd/MM/yy", new Date());
        return compareDesc(dateA, dateB);
      });
    }

    if (filters.price === "asc") {
      filtered.sort(
        (a, b) => a.price.replace("₾", "") - b.price.replace("₾", "")
      );
    } else if (filters.price === "desc") {
      filtered.sort(
        (a, b) => b.price.replace("₾", "") - a.price.replace("₾", "")
      );
    }

    if (filters.status) {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    setFilteredOrders(filtered);
    setActiveFilters(filters);
    setShowFilter(false);
  };

  const handleRemoveFilters = () => {
    setFilteredOrders(orders);
    setActiveFilters({
      date: false,
      status: "",
      price: false,
    });
  };

  return (
    <div className="w-[78%] h-[850px] bg-white border-[3px] border-purple-300 rounded-xl text-purple-800 flex flex-col">
      <div className="flex justify-between mb-8 p-8 relative">
        <h1 className="text-2xl">All orders</h1>
        <div
          onClick={handleFilterClick}
          className="bg-purple-400 flex justify-around items-center text-white p-1 w-[90px] rounded-3xl cursor-pointer"
        >
          <img src="images/filterIcon.svg" alt="icon" className="w-6 h-6" />
          <span className="text-lg">Filter</span>
        </div>
        {showFilter && (
          <FilterDropdown
            onFilter={handleFilter}
            onRemoveFilters={handleRemoveFilters}
            activeFilters={activeFilters}
          />
        )}
      </div>
      <Table data={peginatedOrders} />
      <div className="mt-auto pb-8">
        <Pegination
          itemsArray={filteredOrders}
          itemsPerPage={ordersPerPage}
          setPeginatedItems={setPeginatedOrders}
        />
      </div>
    </div>
  );
}

export default Orders;
