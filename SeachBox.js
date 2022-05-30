import React, { useState, useEffect } from 'react';
import axios from 'axios';
const SearchBox = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log('sssssssssss', data);
  console.log('ttttttttt', searchText);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h1>search filter autoComplete</h1>
      <input
        name="searchBox"
        value={searchText}
        onChange={handleChange}
        id="searchBox"
      />
      {
        searchText && data && data.filter(d=>d.name.toLowerCase().includes(searchText.toLowerCase())).map(n=>{
          return<>
          <p>{n.name}</p>
          </>
        })
      }
    </div>
  );
};

export default SearchBox;
