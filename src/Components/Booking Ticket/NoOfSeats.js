import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NoOfSeats = ({ ticketFormik }) => {
  return (
    <div className='flex flex-col gap-[20px] mt-[40px]'>
      {/* --------- 50 per persons -------- */}
      <div className='flex items-center gap-[20px]'>
        <input
          value={ticketFormik.values.indianCitizenNo}
          onChange={ticketFormik.handleChange}
          id='indianCitizenNo'
          name='indianCitizenNo'
          type={'number'}
          inputProps={{ 'aria-label': 'Without label' }}
          className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
          defaultValue='1'
          disabled={ticketFormik.values.indianCitizen ? false : true}
        />
        <span className='text-[#30303099]'>Rs. 50 per person</span>
      </div>
      {/* --------- 200 per person -------- */}
      <div className='flex items-center gap-[20px]'>
        <input
          value={ticketFormik.values.foreignCitizenNo}
          onChange={ticketFormik.handleChange}
          id='foreignCitizenNo'
          name='foreignCitizenNo'
          type={'number'}
          inputProps={{ 'aria-label': 'Without label' }}
          className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
          defaultValue='1'
          disabled={ticketFormik.values.foreignCitizen ? false : true}
        />

        <span className='text-[#30303099]'>Rs. 200 per person</span>
      </div>
      {/* --------- 20 per person -------- */}
      <div className='flex items-center gap-[20px]'>
        <input
          value={ticketFormik.values.indianStudentNo}
          onChange={ticketFormik.handleChange}
          id='indianStudentNo'
          type={'number'}
          name='indianStudentNo'
          inputProps={{ 'aria-label': 'Without label' }}
          className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
          defaultValue='1'
          disabled={ticketFormik.values.indianStudent ? false : true}
        />

        <span className='text-[#30303099]'>Rs. 20 per person</span>
      </div>
      {/* --------- 100 per person -------- */}
      <div className='flex items-center gap-[20px]'>
        <input
          value={ticketFormik.values.foreignStudentNo}
          onChange={ticketFormik.handleChange}
          id='foreignStudentNo'
          name='foreignStudentNo'
          type={'number'}
          inputProps={{ 'aria-label': 'Without label' }}
          className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
          defaultValue='1'
          disabled={ticketFormik.values.foreignStudent ? false : true}
        />

        <span className='text-[#30303099]'>Rs. 100 per person</span>
      </div>
    </div>
  );
};

export default NoOfSeats;
