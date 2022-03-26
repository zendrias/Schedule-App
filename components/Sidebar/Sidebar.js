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

const Sidebar = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  return (
    <div className="flex flex-col md:w-1/4 border-4 border-yellow-500 rounded-2xl bg-green-50 m-5 p-4">
      {selectedSubject !== '' ? (
        <BackButton setSelectedSubject={setSelectedSubject} />
      ) : null}
      <h2 className="text-center font-bold text-lg">Courses</h2>
      {selectedSubject === '' ? (
        <SubjectList setSelectedSubject={setSelectedSubject} />
      ) : (
        <CourseList selectedSubject={selectedSubject} />
      )}
    </div>
  );
};

export default Sidebar;
