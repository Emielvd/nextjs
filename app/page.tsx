import Image from "next/image";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-24 flex flex-col text-center items-center  gap-8">
        <h1 className="text-4xl font-bold">Officia reprehenderit</h1>
        <p className="text-2xl text-muted-forground">
          {" "}
          Laboris proident et sunt aute aliqua ex nisi et do.
        </p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button variant={"secondary"}>Learn more</Button>
        <Button>Get now</Button>
      </div>
      <div className="py-20 justify-center flex">
        
      </div>
    </main>
  );
}
