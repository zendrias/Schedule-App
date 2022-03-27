const formatCourseAvailability = (courseAvailability) => {
  const days = courseAvailability.split(':')[0];
  const time = courseAvailability.split(':')[1];
  const [startTime, endTime] = time.split('-');

  return {
    days,
    startTime,
    endTime,
  };
};

const handleCourseOnClick = (course) => {
  const courseAvailability = formatCourseAvailability(course.CRS_DAYTIME);
  console.log(courseAvailability);
};

const Course = ({ course }) => {
  return (
    <button
      className="bg-green-200 rounded-2xl p-4 w-full my-2 disabled:bg-green-100"
      onClick={() => handleCourseOnClick(course)}
      disabled={
        course.OPEN_CLOSED === 'CLOSED' ||
        course.CRS_DAYTIME === 'Not Available'
      }
    >
      <p>{course.COURSE_ID}</p>
      <p>{course.TITLE}</p>
      <p>{course.CRS_DAYTIME}</p>
      <p>{course.INSTRUCTOR}</p>
      <p>{course.OPEN_CLOSED}</p>
    </button>
  );
};

const CourseList = ({ selectedSubject }) => {
  const courses = require(`../../public/data/${selectedSubject}_courses.json`);

  return (
    <div className="overflow-auto flex-1">
      {courses.map((course) => (
        <Course key={course.COURSE_ID} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
