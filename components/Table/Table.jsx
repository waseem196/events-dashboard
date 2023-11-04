'use client';

import { useState } from 'react';
import ModalContent from '../ModalContent';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ tableData }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const { results } = tableData;

  if (results?.length === 0) {
    return <div className="ml-10">No data</div>;
  }

  return (
    <>
      <div className="flex flex-col overflow-x-auto max-w-fit bg-white rounded-md shadow-sm mx-8">
        <div className="inline-block min-w-fit sm:px-6">
          <div className="overflow-x-auto max-h-60 p-2">
            <table className="min-w-fit text-center space-x-4 text-sm font-light">
              <TableHeader />
              <TableBody
                results={results}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                setOpenModal={setOpenModal}
              />
            </table>
          </div>
        </div>
      </div>
      {openModal && (
        <ModalContent
          title={results[hoveredId].title}
          description={results[hoveredId].description}
          setOpenModal={setOpenModal}
          type={results[hoveredId].private}
        />
      )}
    </>
  );
};

export default Table;
