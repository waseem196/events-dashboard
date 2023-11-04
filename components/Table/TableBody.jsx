'use client';

import { useState } from 'react';
import { LuPackageOpen } from 'react-icons/lu';
import { properDateAndTime } from '@/utils/DateAndTime';

const TableBody = ({ results, setHoveredId, hoveredId, setOpenModal }) => {
  const [rowHover, setRowHover] = useState(false);
  return (
    <tbody>
      {results.map((elem, index) => (
        <tr
          className="border-b dark:border-neutral-500"
          onMouseEnter={() => {
            setRowHover(true);
            setHoveredId(index);
          }}
          onMouseLeave={() => setRowHover(false)}
          key={index}
        >
          <td
            className={`whitespace-nowrap py-4 text-xs md:text-base px-2 font-medium`}
          >
            {rowHover && index === hoveredId ? (
              <LuPackageOpen
                className={`cursor-pointer hover:scale-[1.2] ${
                  rowHover && index === hoveredId
                    ? 'bg-red-300 rounded-full'
                    : ''
                }`}
                onClick={() => setOpenModal(true)}
                title="Click here for more description"
              />
            ) : (
              `${index + 1}`
            )}
          </td>
          <td
            className="whitespace-nowrap py-4 text-xs md:text-base px-2"
            title={elem?.title}
          >
            {elem?.title.length > 15
              ? elem?.title.slice(0, 15) + '...'
              : elem?.title}
          </td>
          <td className="whitespace-nowrap py-4 text-xs md:text-base px-2">
            {elem?.timezone}
          </td>
          <td className="whitespace-nowrap py-4 text-xs md:text-base px-2">
            <div className="flex flex-col">
              <span>{properDateAndTime(elem.start)[0]}</span>
              <span>{properDateAndTime(elem.start)[1]}</span>
            </div>
          </td>
          <td className="whitespace-nowrap py-4 text-xs md:text-base px-2">
            <div className="flex flex-col">
              <span>{properDateAndTime(elem.end)[0]}</span>
              <span>{properDateAndTime(elem.end)[1]}</span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
