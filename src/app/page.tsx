import Link from "next/link";
export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div>
        <h1 className="pb-10 text-4xl font-semibold">Guide App Initial Map</h1>
        <Link href="/Map" className=" flex justify-center text-2xl border-2 border-blue-500 p-5 rounded-3xl hover:bg-blue-200">Go to Map</Link>
      </div>
    </main>
  );
}
