// components/table.tsx
import { ReactNode } from "react";

type TableCell = {
  icon?: ReactNode;
  text?: string;
};

type TableRow = {
  header: TableCell;
  cells: TableCell[];
};

interface TableProps {
  data: TableRow[];
  className?: string;
}

const Table = ({ data, className = "" }: TableProps) => {
  return (
    <table
      className={`border-collapse border  border-gray-200 dark:border-gray-800 w-full  ${className}`}
    >
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-b  border-gray-200 dark:border-gray-800"
          >
            <th className="border border-gray-200 dark:border-gray-800 p-2">
              <div className="flex justify-start items-center gap-2">
                {row.header.icon && (
                  <span className="flex items-center justify-center">
                    {row.header.icon}
                  </span>
                )}
                {row.header.text && (
                  <span className="text-sm">{row.header.text}</span>
                )}
              </div>
            </th>
            <td className="p-2">
              <div className="flex flex-wrap gap-4 items-center justify-start px-4">
                {row.cells.map((cell, cellIndex) => (
                  <div
                    key={cellIndex}
                    className="flex items-center justify-center gap-2"
                  >
                    {cell.icon && <span>{cell.icon}</span>}
                    {cell.text && <span className="text-sm">{cell.text}</span>}
                  </div>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
