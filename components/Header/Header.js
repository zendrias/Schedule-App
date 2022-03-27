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
  const courseAdded = selectedCourses.some((c) => c.id === course.COURSE_ID);

  return (
    <button
      key={course.COURSE_ID}
      className="bg-green-200 border-2 hover:border-green-600 ease-in-out duration-150 disabled:border-none rounded-2xl p-4 w-full my-2 disabled:bg-green-100 text-left text-gray-700"
      //onClick={() => addCourse(course, selectedCourses, setSelectedCourses)}
      onClick={() => console.log('working')}
      disabled={
        course.OPEN_CLOSED === 'CLOSED' ||
        course.CRS_DAYTIME === 'Not Available' ||
        courseAdded
      }
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
    <header className="fixed inset-0 bg-green-100 h-20 flex items-center px-6 justify-between z-10">
      <div className="flex items-center h-full w-1/3">
        <Image src={Logo} width="80" alt="logo" height="80" />
        <a
          className="ml-8 font-bold text-yellow-700 text-2xl"
          href="https://www.wm.edu/"
          target="_blank"
          rel="noreferrer"
        >
          William & Mary Course Scheduler
        </a>
      </div>

      <div className="w-1/3 relative h-2/3">
        <input
          name="searchBar"
          placeholder="Search courses (Spring 2022)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className="bg-gray-100 h-full w-full rounded-md border-2 border-orange-300 px-4 focus:outline-none"
          onBlur={() => setSearchResults([])}
        />
        <div className="absolute overflow-auto max-h-96 w-full bg-yellow-50 px-2">
          {searchResults?.map((course) => (
            <SearchResult
              key={course.COURSE_ID}
              course={course}
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
            />
          ))}
        </div>
      </div>

      <a
        href="https://courselist.wm.edu/courselist/"
        className="bg-green-700 text-white py-3 px-4 rounded-lg hover:bg-green-600 ease-in-out duration-300"
        target="_blank"
        rel="noreferrer"
      >
        W&M Course Catalog
      </a>
    </header>
  );
};

export default Header;
