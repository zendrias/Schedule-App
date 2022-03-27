import {
  addCourse,
  formatCourseAvailability,
  formatTime,
} from '../../shared/utils';

const Course = ({ course, selectedCourses, setSelectedCourses }) => {
  const courseAvailability = formatCourseAvailability(course.CRS_DAYTIME);
  const courseAdded = selectedCourses.some((c) => c.id === course.COURSE_ID);

  return (
    <button
      className="bg-green-200 border-2 hover:border-green-600 ease-in-out duration-150 disabled:border-none rounded-2xl p-4 w-full my-2 disabled:bg-green-100 text-left text-gray-700"
      onClick={() => addCourse(course, selectedCourses, setSelectedCourses)}
      disabled={
        course.OPEN_CLOSED === 'CLOSED' ||
        course.CRS_DAYTIME === 'Not Available' ||
        courseAdded
      }
    >
      {courseAdded && <p className="text-red-400">already added</p>}
      {course.OPEN_CLOSED === 'CLOSED' && (
        <p className="text-red-400">class full</p>
      )}
      <p>{course.COURSE_ID}</p>
      <p>{course.TITLE}</p>
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

const CourseList = ({
  selectedSubject,
  selectedCourses,
  setSelectedCourses,
}) => {
  const courses = require(`../../public/data/${selectedSubject}_courses.json`);

  return (
    <div className="overflow-auto flex-1">
      {courses.map((course) => (
        <Course
          key={course.COURSE_ID}
          course={course}
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
        />
      ))}
    </div>
  );
};

export default CourseList;
