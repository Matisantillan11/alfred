export default function Header({ title }: { title: string }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold mb-8">{title}</h1>
    </div>
  );
}
