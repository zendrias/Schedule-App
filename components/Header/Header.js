import courseList from '../../public/data/courses.json';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '/images/logo.jpg';
import {
  addCourse,
  formatCourseAvailability,
  formatTime,
} from '../../shared/utils';

const SearchResult = ({ course, selectedCourses, setSelectedCourses }) => {
  const courseAvailability = formatCourseAvailability(course.CRS_DAYTIME);

  return (
    <button
      key={course.STVSUBJ_CODE}
      className="w-full bg-white my-2 border border-black z-10"
      onClick={() => addCourse(course, selectedCourses, setSelectedCourses)}
    >
      <p className="">{course.COURSE_ID}</p>
      <p className="">{course.TITLE}</p>
      <p>{courseAvailability.days}</p>
      {course.CRS_DAYTIME !== 'Not Available' ? (
        <p>{`${formatTime(courseAvailability.startTime)}-${formatTime(
          courseAvailability.endTime
        )}`}</p>
      ) : (
        'Not Available'
      )}
      <p>{course.INSTRUCTOR}</p>
    </button>
  );
};

const Header = ({ selectedCourses, setSelectedCourses }) => {
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

      <div className="relative w-1/3 h-2/3 rounded-xl">
        <input
          name="searchBar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className="bg-green-100 h-full w-full rounded-xl border-4 border-orange-300 p-2"
        />
        <div className="absolute overflow-auto max-h-96 bg-gray-200 px-2">
          {searchResults?.map((course) => (
            <SearchResult
              course={course}
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
