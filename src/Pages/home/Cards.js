import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Cards = ({ data }) => {
  return (
    <div
      className={`${data.bgColor} w-[257px] h-[122px] rounded-md relative text-white`}
    >
      <div className='flex items-center justify-between  py-1 px-3'>
        <div className=''>
          <h1 className='text-[40px] font-bold'>{data.num}</h1>
          <p className='text-[14px] font-[500] tracking-wider translate-y-[-70%]'>
            {data.title}
          </p>
        </div>
        <data.icon className=' text-5xl text-gray-200' />
      </div>
      <div className='cursor-pointer absolute bottom-0 w-[100%]'>
        <p
          className={`${data.footerColor} py-[3px] text-center rounded-b-[6px] flex items-center justify-center gap-[.3rem]`}
        >
          More Info <BsFillArrowRightCircleFill />
        </p>
      </div>
    </div>
  );
};

export default Cards;
