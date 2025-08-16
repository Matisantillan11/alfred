import { cn } from "@alfred/app/shared";
import { flexRender, Table } from "@tanstack/react-table";

export default function Body<T>({ table }: { table: Table<T> }) {
  const rows = table.getRowModel().rows;
  return (
    <tbody className="w-full">
      {rows.map((row, index) => {
        const visibleCells = row.getVisibleCells();
        return (
          <tr key={row.id}>
            {visibleCells.map((cell) => (
              <td
                key={cell.id}
                className={cn(
                  "h-16 px-4",
                  index !== rows.length - 1 ? "border-b-2 border-gray-100" : ""
                )}
              >
                <div className="text-sm text-gray-gray600">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}
