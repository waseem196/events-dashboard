'use client';

import { RxCross2 } from 'react-icons/rx';
const ModalContent = ({ title, description, setOpenModal, type }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-0 backdrop-brightness-50 ease-linear transition-all duration-1000">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="w-[550px] min-h-[300px] bg-white rounded-sm text-sm">
            <div className="py-3 px-4 flex justify-between">
              <div className="flex flex-col w-full">
                <h1 className="text-lg font-bold">Title : </h1>
                <p className="text-blue-900">{title || 'No Title'}</p>
              </div>
              <RxCross2
                className="text-xl cursor-pointer text-blue-600"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className="flex flex-col w-full py-3 px-4">
              <h1 className="text-lg font-bold">Description : </h1>
              <p className="text-blue-900 max-h-20 overflow-y-auto">
                {description || 'No Description'}
              </p>
            </div>
            <div className="flex flex-col w-full py-3 px-4">
              <h1 className="text-lg font-bold">Status : </h1>
              <p className="text-blue-900">
                {type === false ? 'Public' : 'Private' || 'No Status'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
