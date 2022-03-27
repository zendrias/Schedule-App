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

const calendarTime = (time) => {
  const hour = Number(time.slice(0, 2));
  const minute = Number(time.slice(2));
  return hour + minute / 60;
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

const addCourse = (course, selectedCourses, setSelectedCourses) => {
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

export { addCourse, formatCourseAvailability, formatTime };
