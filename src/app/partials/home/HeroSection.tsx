import { Button } from "@nextui-org/button";
export default function HeroSection() {
  return (
    <section className="bg-slate-900  flex flex-col justify-center items-center h-screen">
      <div className="text-white text-4xl text-center font-semiBold ">
        ARCHIVE YOUR GOALS WITH A{" "}
        <span className="text-orange-500">HEALTHY DIET!</span>
      </div>
      <Button className="mt-5 bg-orange-500 text-white font-semibold">
        CHOSE A PLAN
      </Button>
    </section>
  );
}
