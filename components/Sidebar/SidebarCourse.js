const SidebarCourse = ({ course }) => {
  return (
    <button
      className="bg-green-200 rounded-2xl p-4 w-full my-2"
      onClick={() =>
        console.log(`Course from ${course.startTime}-${course.endTime}`)
      }
    >
      <p>{course.days}</p>
      <p>{course.time}</p>
      <p>{course.instructor}</p>
      <p>{course.room}</p>
    </button>
  );
};

export default SidebarCourse;
