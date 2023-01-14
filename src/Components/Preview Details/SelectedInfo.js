import React from 'react';
import { useNavigate } from 'react-router-dom';
import FifthGroup from '../Booking Info/FifthGroup';
import FirstGroup from './FirstGroup';
import FourthGroup from './FourthGroup';
import SecondGroup from './SecondGroup';
import TableComp from './TableComp';
import ThirdGroup from './ThirdGroup';
import TimingSection from './TimingSection';
import { ButtonMd } from '../../Components/Shared/Constant';
const SelectedInfo = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-[24px]'>
      {/* ------ first group ------- */}
      <FirstGroup />
      {/* ------ second group ----- */}
      <SecondGroup />
      {/* ------ third group ------- */}
      <ThirdGroup />
      {/* ------ fourth group ------ */}
      <FourthGroup />
      {/* ------ fifth group ------ */}
      <FifthGroup />
      {/* ----- timing section ----- */}
      <div>
        <h1 className='ml-[20px] lg:ml-0 text-[24px] font-[600] text-[#626262] mb-[1rem]'>
          Timing
        </h1>
        <TimingSection />
      </div>
      {/* ----- bottom table ----- */}
      <div>
        <h1 className='ml-[20px] lg:ml-0 text-[24px] font-[600] text-[#626262] mb-[1rem]'>
          A/C Details
        </h1>
        <TableComp />
      </div>
      {/* bottom buttons  */}
      <div className='flex justify-center gap-[10px] lg:gap-[20px] w-[100%] mt-[88px]'>
        <ButtonMd text='Back' />
        <ButtonMd text='Cancel' />
        <span onClick={() => navigate('/')}>
          <ButtonMd text='Submit' />
        </span>
      </div>
    </div>
  );
};

export default SelectedInfo;
