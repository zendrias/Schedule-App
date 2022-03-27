const dayMap = {
  M: 'Mo',
  T: 'Tu',
  W: 'We',
  R: 'Th',
  F: 'Fr',
};

const formatDays = (days) => {
  return days.split('').map((day) => dayMap[day]);
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
  const days = formatDays(courseAvailability.split(':')[0]);
  const [startTime, endTime] = courseAvailability.split(':')[1].split('-');

  return {
    days,
    startTime,
    endTime,
  };
};

const calendarTime = (time) => {
  const hour = Number(time.slice(0, 2));
  const minute = Number(time.slice(2));
  return hour + minute / 60;
};

const handleCourseOnClick = (course, selectedCourses, setSelectedCourses) => {
  const days = formatDays(course.CRS_DAYTIME.split(':')[0]);
  const [startTime, endTime] = course.CRS_DAYTIME.split(':')[1].split('-');
  if (!selectedCourses.some((c) => c.id === course.COURSE_ID)) {
    setSelectedCourses([
      ...selectedCourses,
      {
        id: course.COURSE_ID,
        title: course.TITLE,
        days: days,
        startTime: calendarTime(startTime),
        endTime: calendarTime(endTime),
      },
    ]);
  }
};

const Course = ({ course, selectedCourses, setSelectedCourses }) => {
  const courseAvailability = formatCourseAvailability(course.CRS_DAYTIME);
  const courseAdded = selectedCourses.some((c) => c.id === course.COURSE_ID);

  return (
    <button
      className="bg-green-200 rounded-2xl p-4 w-full my-2 disabled:bg-green-100 text-left text-gray-700"
      onClick={() =>
        handleCourseOnClick(course, selectedCourses, setSelectedCourses)
      }
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
