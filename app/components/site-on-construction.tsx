import Link from "next/link";
import { Alert } from "../shared";
import { ROUTES } from "../shared";

export default function SiteOnConstruction() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <Alert className="text-red-500" size={55} />
        <h1 className="text-2xl font-bold">Site on construction</h1>
        <Link href={ROUTES.PATIENTS} className="px-4 rounded-lg py-2 shadow-md">
          Go back to home
        </Link>
      </div>
    </div>
  );
}
