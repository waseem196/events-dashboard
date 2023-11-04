const TableHeader = () => {
  return (
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col"></th>
        <th scope="col" className="p-1  md:p-4 text-xs md:text-base">
          Title
        </th>
        <th scope="col" className="p-1  md:p-4 text-xs md:text-base">
          Location
        </th>
        <th scope="col" className="p-1  md:p-4 text-xs md:text-base">
          Start Time
        </th>
        <th scope="col" className="p-1  md:p-4 text-xs md:text-base">
          End Time
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
