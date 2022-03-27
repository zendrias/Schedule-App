import { useState } from 'react';
import CourseList from './CourseList';
import SubjectList from './SubjectList';

const BackButton = ({ setSelectedSubject }) => (
  <button
    className="bg-red-500 text-white py-2 px-4 rounded-md w-16"
    onClick={() => setSelectedSubject('')}
  >
    Back
  </button>
);

const Sidebar = ({ selectedCourses, setSelectedCourses }) => {
  const [selectedSubject, setSelectedSubject] = useState('');

  return (
    <div className="flex flex-col h-96 lg:h-auto lg:w-1/4 border-2 border-yellow-500 rounded-2xl bg-green-50 m-5 p-4">
      {selectedSubject !== '' ? (
        <BackButton setSelectedSubject={setSelectedSubject} />
      ) : null}
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
        />
      )}
    </div>
  );
};

export default Sidebar;
