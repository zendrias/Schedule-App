import courseList from '../../public/data/courses.json';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '/images/logo.jpg';

const Header = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = query
      ? courseList.filter((c) =>
          c.TITLE.toLowerCase().includes(query.toLowerCase())
        )
      : [];

    setSearchResults(results);
  }, [query]);

  return (
    <header className="fixed inset-0 bg-blue-400 h-20 flex flex-row justify-center items-center">
      <Image src={Logo} width="95" alt="logo" height="95" />
      <p className="font-bold mx-5 text-2xl">Search Courses</p>

      <div className="relative w-1/4 h-2/3 rounded-xl">
        <input
          name="searchBar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className="bg-green-100 h-full w-full font-bold text-2xl rounded-xl border-4 border-orange-300 p-2"
        />
        <div className="absolute overflow-auto max-h-96 w-full bg-gray-200">
          {searchResults?.map((course) => (
            <div
              key={course.STVSUBJ_CODE}
              className="card bg-white m-2 border-4 border-black z-10"
            >
              <div className="">{course.COURSE_ID}</div>
              <div className="">{course.TITLE}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
