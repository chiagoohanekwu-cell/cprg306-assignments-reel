import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-900">
      
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">New Item</h1>
        
        <NewItem />
      </div>

    </main>
  );
}