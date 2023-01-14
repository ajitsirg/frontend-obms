import { Calendar } from 'primereact/calendar';
import React, { useState } from 'react';

const TimingSection = () => {
  const [dateInputsnum, setDateInputNums] = useState([1]);
  const [holiday_session, setholiday_session] = useState(null);
  const [range, setRange] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row gap-[24px] px-[10px] lg:px-0 whitespace-nowrap'>
      {/* ------- left side table ------ */}
      <div className='w-[90vw] lg:w-[560px] bg-white mx-auto lg:mx-0 rounded-b-lg overflow-hidden'>
        {/* ------ heading row ------ */}
        <div className='grid grid-cols-3  rounded-md overflow-hidden bg-white'>
          <h1 className='font-semibold text-[20px] text-white text-center truncate bg-[#3C5071] py-2.5 border-r-2'>
            Session
          </h1>
          <h1 className='font-semibold text-[20px] text-white text-center truncate bg-[#3C5071] py-2.5 border-r-2'>
            Start Time
          </h1>
          <h1 className='font-semibold text-[20px] text-white text-center truncate bg-[#3C5071] py-2.5 border-r-2'>
            End Time
          </h1>
        </div>
        {/* ------ data row ------ */}
        <div className='grid grid-cols-3  gap-[1px] border-b-2'>
          <h1 className='font-semibold text-[20px] text-[#000000B2] text-center truncate py-2.5 border-r-2'>
            Summer
          </h1>
          <h1 className='font-semibold text-[16px] text-[#000000B2] text-center truncate py-2.5 border-r-2'>
            08:30:00 AM
          </h1>
          <h1 className='font-semibold text-[16px] text-[#000000B2] text-center truncate py-2.5 '>
            06:30:00 PM
          </h1>
        </div>
        {/* ------ data row ------ */}
        <div className='grid grid-cols-3  gap-[1px] border-b-2'>
          <h1 className='font-semibold text-[20px] text-[#000000B2] text-center truncate py-2.5 border-r-2'>
            Summer
          </h1>
          <h1 className='font-semibold text-[16px] text-[#000000B2] text-center truncate py-2.5 border-r-2'>
            08:30:00 AM
          </h1>
          <h1 className='font-semibold text-[16px] text-[#000000B2] text-center truncate py-2.5 '>
            06:30:00 PM
          </h1>
        </div>
      </div>
      {/* -------- right side table -------- */}
      <div className='w-[90vw] lg:w-[433px] mx-auto lg:mx-0 bg-white rounded-b-lg overflow-hidden'>
        <h1 className='font-semibold text-[20px] text-white text-center truncate bg-[#3C5071] py-2.5 rounded-md'>
          Session
        </h1>
        {/* ------ data row ------ */}
        <div className='grid grid-cols-2  gap-[1px] border-b-2'>
          <h1 className='font-semibold text-[20px] text-[#000000B2] text-center truncate py-2.5 border-r-2'>
            Summer
          </h1>
          <h1 className='font-semibold text-[16px] text-[#000000B2] text-center truncate py-2.5 '>
            06:30:00 PM
          </h1>
        </div>
        {/* ------ data row ------ */}
        <div className='grid grid-cols-2  gap-[1px] border-b-2'>
          <h1 className='font-semibold text-[20px] text-[#000000B2] text-center truncate py-2.5 border-r-2'>
            Summer
          </h1>
          <h1 className='font-semibold text-[16px] text-[#000000B2] text-center truncate py-2.5 '>
            06:30:00 PM
          </h1>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-x-2'>
        <div className='w-full flex items-start justify-center flex-col'>
          <h3 className='text-[20px] font-[600] pt-5 pb-3'>Holidays Date</h3>
          {dateInputsnum?.map(() => {
            return (
              <Calendar
                className='rounded-lg w-32'
                id='date'
                name='date'
                onChange={(e) => setholiday_session(e.value)}
                value={holiday_session}
                minDate={new Date()}
                selectionMode={range ? 'range' : undefined}
                placeholder='DD/MM/YYYY'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimingSection;
