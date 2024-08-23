import { BsThreeDots } from "react-icons/bs";
import { useTable } from "react-table";

const columns = [
  { Header: "№", accessor: "id" },
  {
    Header: "Product",
    accessor: "product",
    Cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <img
          src={row.original.image}
          alt="Product"
          className="w-8 h-8 object-cover"
        />
        <span>{row.original.product}</span>
      </div>
    ),
  },
  { Header: "Date", accessor: "date" },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      let statusClass = "";
      if (value === "Declined") {
        statusClass =
          "text-red-500 border border-red-500 p-2 px-4 rounded-xl text-xs";
      } else if (value === "Processing") {
        statusClass =
          "text-purple-500 border border-purple-500 p-2 px-[12px] rounded-xl text-xs";
      }

      return <span className={`font-medium ${statusClass}`}>{value}</span>;
    },
  },
  { Header: "Price", accessor: "price" },
  { Header: "Customer", accessor: "customer" },
  {
    Header: "",
    accessor: "actions",
    Cell: () => (
      <div className="flex justify-center">
        <button className="cursor-pointer">
          <BsThreeDots className="text-gray-500 w-6 h-6" />
        </button>
      </div>
    ),
  },
];

export default function Table({ data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="container mx-auto p-4 text-black">
      <table className="min-w-full bg-white" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } =
              headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumnProps } = column.getHeaderProps();
                  return (
                    <th
                      key={key}
                      className="py-2 px-4 border-b-2 text-start font-normal"
                      {...restColumnProps}
                    >
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key, ...restRowProps } = row.getRowProps();
            return (
              <tr key={key} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key, ...restCellProps } = cell.getCellProps();
                  return (
                    <td key={key} className="py-4 px-4" {...restCellProps}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
