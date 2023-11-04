'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import SearchField from '@/components/SearchField';
import RechartBarChart from '@/components/Charts/RechartBarChart';
import Table from '@/components/Table/Table';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemName, setItemName] = useState('');

  const userSearchQueryHandler = async (searchItem) => {
    if (!searchItem) {
      return;
    }
    setItemName(searchItem);
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({ q: searchItem });
      const API_URL = 'https://api.predicthq.com/v1/events/';
      const res = await fetch(`${API_URL}?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log('error : ', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchField searchQueryHandler={userSearchQueryHandler} />
      {loading && <div className="italic ml-2">Loading...</div>}
      {data.length === 0 ? (
        !loading && <div className="ml-2">Nothing Searched</div>
      ) : (
        <>
          <Card
            name={itemName}
            events={data?.count}
            country={data?.results[0]?.country}
            category={data?.results[0]?.category}
          />
          <div className="w-full flex flex-wrap gap-4">
            <Table tableData={data} />
            <RechartBarChart chartData={data} />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
