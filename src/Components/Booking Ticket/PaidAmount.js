import React from 'react';

const PaidAmount = ({ ticketFormik }) => {
  return (
    <div className='flex flex-col gap-[20px] mt-[40px]'>
      <input
        className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
        value={ticketFormik.values.indianCitizenPaidAmount}
        onChange={ticketFormik.handleChange}
        id='indianCitizenPaidAmount'
        name='indianCitizenPaidAmount'
        type='number'
        disabled={ticketFormik.values.indianCitizen ? false : true}
      />
      <input
        value={ticketFormik.values.foreignCitizenPaidAmount}
        onChange={ticketFormik.handleChange}
        id='foreignCitizenPaidAmount'
        name='foreignCitizenPaidAmount'
        type='number'
        className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
        disabled={ticketFormik.values.foreignCitizen ? false : true}
      />
      <input
        value={ticketFormik.values.indianStudentPaidAmount}
        onChange={ticketFormik.handleChange}
        id='indianStudentPaidAmount'
        name='indianStudentPaidAmount'
        type='number'
        className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
        disabled={ticketFormik.values.indianStudent ? false : true}
      />
      <input
        value={ticketFormik.values.foreignStudentPaidAmount}
        onChange={ticketFormik.handleChange}
        id='foreignStudentPaidAmount'
        name='foreignStudentPaidAmount'
        type='number'
        className='flex items-center justify-center truncate w-[89px] h-[33px] bg-white text-[#30303099] rounded-[5px] text-center'
        disabled={ticketFormik.values.foreignStudent ? false : true}
      />
    </div>
  );
};

export default PaidAmount;
