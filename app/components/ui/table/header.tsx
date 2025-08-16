import { flexRender, Table } from "@tanstack/react-table";

export default function Header<T>({ table }: { table: Table<T> }) {
  return (
    <thead className="w-full border-b-2 border-gray-100">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="font-light">
          {headerGroup.headers.map((header) => (
            <th key={header.id} className="h-16 px-4 text-left">
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
