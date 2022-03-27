import { useState } from 'react';
import CourseList from './CourseList';
import SubjectList from './SubjectList';

const BackButton = ({ setSelectedSubject }) => (
  <button
    className="bg-red-500 text-white py-2 px-4 rounded-lg w-16 hover:bg-red-400 ease-in-out duration-300"
    onClick={() => setSelectedSubject('')}
  >
    Back
  </button>
);

const Sidebar = ({ selectedCourses, setSelectedCourses }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [showOnlyOpen, setShowOnlyOpen] = useState(false);

  const Checkbox = () => {
    return (
      <div>
        <input
          type="checkbox"
          id="open"
          name="open"
          value="open"
          checked={showOnlyOpen}
          onChange={() => setShowOnlyOpen(!showOnlyOpen)}
        />
        <label className="ml-2 text-gray-600" for="open">
          Only show open courses
        </label>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-96 lg:h-auto lg:w-1/4 border-2 border-yellow-500 rounded-2xl bg-green-50 m-5 p-4">
      <div className="w-full flex justify-between items-center">
        {selectedSubject !== '' ? (
          <BackButton setSelectedSubject={setSelectedSubject} />
        ) : null}
        {selectedSubject !== '' ? (
          <Checkbox setSelectedSubject={setSelectedSubject} />
        ) : null}
      </div>
      <h2 className="text-center text-2xl text-gray-600 my-2">
        {selectedSubject === '' ? 'SUBJECTS' : 'COURSES'}
      </h2>
      {selectedSubject === '' ? (
        <SubjectList setSelectedSubject={setSelectedSubject} />
      ) : (
        <CourseList
          selectedSubject={selectedSubject}
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          showOnlyOpen={showOnlyOpen}
        />
      )}
    </div>
  );
};

export default Sidebar;
