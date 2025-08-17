"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Card, Table } from "../components/ui";
import { TrendingUp, TrendingDown } from "../shared";
import { ChartArea } from "./components/chart";

type EarningData = {
  date: string;
  patient: string;
  amount: number;
  status: "Paid" | "Not Paid";
};

const defaultEarningData: EarningData[] = [
  {
    date: "2024-04-01",
    patient: "John Doe",
    amount: 12550,
    status: "Paid",
  },
  {
    date: "2024-04-02",
    patient: "Jane Smith",
    amount: 12550,
    status: "Not Paid",
  },
  {
    date: "2024-04-03",
    patient: "Robert Johnson",
    amount: 9800,
    status: "Paid",
  },
  {
    date: "2024-04-05",
    patient: "Emily Davis",
    amount: 15700,
    status: "Paid",
  },
  {
    date: "2024-04-08",
    patient: "Michael Wilson",
    amount: 11200,
    status: "Not Paid",
  },
  {
    date: "2024-04-10",
    patient: "Sarah Miller",
    amount: 18900,
    status: "Paid",
  },
  {
    date: "2024-04-12",
    patient: "David Taylor",
    amount: 7600,
    status: "Not Paid",
  },
  {
    date: "2024-04-15",
    patient: "Jessica Brown",
    amount: 14300,
    status: "Paid",
  },
  {
    date: "2024-04-18",
    patient: "Thomas Anderson",
    amount: 9200,
    status: "Paid",
  },
  {
    date: "2024-04-20",
    patient: "Jennifer Martinez",
    amount: 11600,
    status: "Not Paid",
  },
];

const columns: ColumnDef<EarningData>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: (info: { getValue: () => unknown }) =>
      new Date(info.getValue() as string).toLocaleDateString(),
  },
  {
    accessorKey: "patient",
    header: "Patient",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (info: { getValue: () => unknown }) =>
      `$${Number(info.getValue()).toLocaleString()}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info: { getValue: () => unknown }) => {
      const value = info.getValue() as string;
      return (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            value === "Paid"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      );
    },
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex items-center justify-center flex-wrap gap-4 -mb-20">
        <Card title="Earnings" value="$12.550">
          <div className="flex items-center gap-1">
            <TrendingUp size={14} className="text-green-500" />
            <span className="text-xs text-green-500">+12.4%</span>
          </div>
        </Card>
        <Card title="Earnings" value="$12.550">
          <div className="flex items-center gap-1">
            <TrendingDown size={14} className="text-red-500" />
            <span className="text-xs text-red-500">-20%</span>
          </div>
        </Card>
        <Card title="Bills" value="153">
          <div className="flex items-center gap-1">
            <TrendingDown size={14} className="text-green-500" />
            <span className="text-xs text-green-500">+5%</span>
          </div>
        </Card>
        <Card title="Pending bills" value="33">
          <div className="flex items-center gap-1">
            <TrendingDown size={14} className="text-red-500" />
            <span className="text-xs text-red-500">+27%</span>
          </div>
        </Card>
        <Card title="Patients" value="125">
          <div className="flex items-center gap-1">
            <TrendingDown size={14} className="text-green-500" />
            <span className="text-xs text-green-500">+7%</span>
          </div>
        </Card>
      </div>

      <ChartArea />

      <div className="flex items-center justify-center mt-4">
        <Table data={defaultEarningData} columns={columns} />
      </div>
    </div>
  );
}
