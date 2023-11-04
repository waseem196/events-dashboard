'use client';

import { FaFlag } from 'react-icons/fa';
import { TbCategoryFilled } from 'react-icons/tb';
import { RiCalendarEventFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';

const Card = ({ name, events, country, category }) => {
  return (
    <div>
      <div className="w-full flex flex-wrap justify-between items-center">
        <div className="w-[360px] h-40 md:w-72 md:h-60 m-2 mt-0 relative flex justify-center p-6 md:p-14 md:px-6">
          <div className="absolute w-20 h-20 bg-[#FC930A] top-3 left-12 md:top-10 md:left-10 rounded-[3px] shadow-xl flex justify-center items-center">
            <BsFillPersonFill className="text-white text-3xl" />
          </div>
          <div className="bg-white h-full w-full rounded-md shadow-sm text-right">
            <div className="p-4 py-2 font-light text-sm text-[#999999]">
              Name
            </div>
            <div
              className="p-4 py-0 font-light text-2xl text-[#3c4858]"
              title={name}
            >
              {window.innerWidth < 600 // Adjust the screen width threshold as needed
                ? name || 'No search'
                : name?.length > 10
                ? name.slice(0, 10) + '...'
                : name || 'No search'}
            </div>
          </div>
        </div>
        <div className="w-[360px] h-40 md:w-72 md:h-60 m-2 mt-0 relative flex justify-center p-6 md:p-14 md:px-6">
          <div className="absolute w-20 h-20 bg-[#E4316F] top-3 left-10 md:top-10 md:left-10 rounded-[3px] shadow-xl flex justify-center items-center">
            <TbCategoryFilled className="text-white text-3xl" />
          </div>
          <div className="bg-white h-full w-full rounded-md shadow-sm text-right">
            <div className="p-4 py-2 font-light text-sm text-[#999999]">
              Category
            </div>
            <div
              className="p-4 py-0 font-light text-2xl text-[#3c4858]"
              title={category}
            >
              {category?.length > 8
                ? category.slice(0, 8) + '...'
                : category || 'N/A'}
            </div>
          </div>
        </div>
        <div className="w-[360px] h-40 md:w-72 md:h-60 m-2 mt-0 relative flex justify-center p-6 md:p-14 md:px-6">
          <div className="absolute w-20 h-20 bg-[#5FB663] top-3 left-10 md:top-10 md:left-10 rounded-[3px] shadow-xl flex justify-center items-center">
            <RiCalendarEventFill className="text-white text-3xl" />
          </div>
          <div className="bg-white h-full w-full rounded-md shadow-sm text-right">
            <div className="p-4 py-2 font-light text-sm text-[#999999]">
              Total Events
            </div>
            <div className="p-4 py-0 font-light text-2xl text-[#3c4858]">
              {events > 0 ? events : 'N/A'}
            </div>
          </div>
        </div>
        <div className="w-[360px] h-40 md:w-72 md:h-60 m-2 mt-0 relative flex justify-center p-6 md:p-14 md:px-6">
          <div className="absolute w-20 h-20 bg-[#16BBD0] top-3 left-10 md:top-10 md:left-10 rounded-[3px] shadow-xl flex justify-center items-center">
            <FaFlag className="text-white text-3xl" />
          </div>
          <div className="bg-white h-full w-full rounded-md shadow-sm text-right">
            <div className="p-4 py-2 font-light text-sm text-[#999999]">
              Country
            </div>
            <div className="p-4 py-0 font-light text-2xl text-[#3c4858]">
              {country || 'N/A'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
