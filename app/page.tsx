import Hero from "@/components/Hero.component";


export default function Home() {
//-top-[15vw] -left-[5vw] absolute  lg:text-[15vw] lg:-top-[12vh] lg:-left-[2.5vw]
  return (
    <div className=' min-h-screen'>
      {/* <p className="text-[#1F01FF] font-bold text-[25vw] absolute z-10 -top-36 -left-8">ABCD</p>
      <div className="absolute min-w-[300px] border-[3px] border-[#116BAC] bg-[#C3D4FF] opacity-10 max-h-[245px] top-[3vh] left-[5vw] z-20 h-1/5 rounded-xl max-w-[683px] w-3/4 "></div> */}
      <Hero />
    </div>

  );
}
