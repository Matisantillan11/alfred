"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Header from "./header";
import Body from "./body";

export default function Table<T>({
  data,
  columns,
}: {
  data: Array<T>;
  columns: Array<ColumnDef<T>>;
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2 w-full rounded-lg shadow-b-gray-300 shadow-lg">
      <table className="w-full">
        <Header table={table} />
        <Body table={table} />
      </table>
      {/* paginator */}
    </div>
  );
}
