const dayMap = {
  M: 'Mo',
  T: 'Tu',
  W: 'We',
  R: 'Th',
  F: 'Fr',
};

const formatTime = (time) => {
  const hour = time.slice(0, 2);
  const minute = time.slice(2);
  if (Number(hour) > 12) {
    return `${hour - 12}:${minute}pm`;
  }
  return `${hour}:${minute}am`;
};

const formatCourseAvailability = (courseAvailability) => {
  if (courseAvailability === 'Not Available') return {};

  const days = courseAvailability
    .split(':')[0]
    .split('')
    .map((day) => dayMap[day]);
  const time = courseAvailability.split(':')[1];
  const [startTime, endTime] = time.split('-');

  return {
    days,
    startTime: formatTime(startTime),
    endTime: formatTime(endTime),
  };
};

const handleCourseOnClick = (course) => {
  console.log('select course');
};

const Course = ({ course }) => {
  const courseAvailability = formatCourseAvailability(course.CRS_DAYTIME);

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
      <p>{courseAvailability.days}</p>
      <p>{`${courseAvailability.startTime}-${courseAvailability.endTime}`}</p>
      <p>{course.INSTRUCTOR}</p>
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
