"use client";
import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/ui/table";
import Header from "../components/header";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

export default function Dashboard() {
  const columns: Array<ColumnDef<Person>> = [
    {
      enableSorting: true,
      accessorKey: "firstName",
      id: "firstName",
      cell: ({ getValue }) => {
        return getValue() ?? "-";
      },
      header: "First name",
    },
    {
      enableSorting: true,
      accessorKey: "lastName",
      id: "lastName",
      cell: ({ getValue }) => {
        return getValue() ?? "-";
      },
      header: "Last name",
    },
    {
      enableSorting: true,
      accessorKey: "age",
      id: "age",
      cell: ({ getValue }) => {
        return getValue() ?? "-";
      },
      header: "Age",
    },
    {
      enableSorting: true,
      accessorKey: "visits",
      id: "visits",
      cell: ({ getValue }) => {
        return getValue() ?? "-";
      },
      header: "Visits",
    },
    {
      enableSorting: true,
      accessorKey: "status",
      id: "status",
      cell: ({ getValue }) => {
        return getValue() ?? "-";
      },
      header: "Status",
    },
    {
      enableSorting: true,
      accessorKey: "progress",
      id: "progress",
      cell: ({ getValue }) => {
        return getValue() ?? "-";
      },
      header: "Progress",
    },
  ];

  return (
    <>
      <Header title="Patients" />
      <Table data={defaultData} columns={columns} />
    </>
  );
}
