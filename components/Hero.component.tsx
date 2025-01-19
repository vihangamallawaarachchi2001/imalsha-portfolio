import Image from 'next/image';
import Navbar from './Navbar.component';
import { ChevronDown } from 'lucide-react';

//TODO : mobile optimize
export default function Hero() {
  return (
    <section className="bg-no-repeat bg-cover bg-hero xl:bg-contain">
      <Navbar />
      <section className="relative mx-auto flex h-full max-h-screen min-h-screen w-full max-w-[1366px] items-center justify-center overflow-x-hidden px-3 py-2">
        <div className="relative flex h-fit w-fit items-start justify-center -mt-20">
          <button
            type="button"
            className="absolute -right-[40%] top-[7%] flex h-20 w-[300px] items-center justify-center rounded-2xl bg-[#1f01ff] text-4xl font-semibold"
          >
            Imalsha{' '}
            <Image
              src={'/star_.svg'}
              height={60}
              width={60}
              alt="star"
              className="absolute -top-1/3 right-[10%]"
            />
          </button>
          <h1 className="text-center text-[160px] font-semibold">Portfolio</h1>
            <div className='absolute -bottom-7 -left-1/4 flex items-center justify-center gap-4'>
                <div className='border border-white w-[300px] py-2 px-2 rounded-lg h-12 flex items-center justify-between ' >
                    <p className='font-medium text-[22px] '>Poppins</p>
                    <ChevronDown size={24} />
                </div>
                <div className='border border-white w-[212px] py-2 px-2 rounded-lg h-12 flex items-center justify-between ' >
                    <p className='font-medium text-[22px] '>SemiBold</p>
                    <ChevronDown size={24} />
                </div>
            </div>
        </div>
        
      </section>
      <div className='absolute bottom-0 right-0 max-w-[618px] w-full min-h-40 p-10'>
        <div className='flex items-center justify-between mb-6'>
            <div>
                <p className='text-xl font-medium mb-2'>Opacity</p>
                <div className='bg-[#2b2b2b] rounded-[10px] w-[254px] h-[52px] py-2 px-4 flex items-center gap-4 '>
                    <Image src='/opacity.svg' width={30} height={30} alt='img' />
                    <span className='text-xl font-medium'>100%</span>
                </div>
            </div>
            <div>
                <p className='text-xl font-medium mb-2'>Corner Radius</p>
                <div className='bg-[#2b2b2b] rounded-[10px] w-[254px] h-[52px] py-2 px-4 flex items-center gap-4 '>
                    <Image src='/radius.svg' width={30} height={30} alt='img' />
                    <span className='text-xl font-medium'>15</span>
                </div>
            </div>
        </div>
        <div className='relative w-full p-4 bg-[#2b2b2b] rounded-[10px] flex items-center justify-between '>
            <div className='w-2/3 border-r-[#00000035] border-2 border-t-0 border-l-0 border-b-0 outline-none  flex items-center gap-8 '>
                <Image src={'/imalsha.svg'} alt='logo' width={120} height={116} />
                <p className='text-[32px] font-semibold  '>Image</p>
            </div>
            <div className='w-1/3 h-full flex items-center justify-center'>
                <p className='text-[32px] font-semibold  '>100%</p>
            </div>
        </div>
      </div>
    </section>
  );
}
