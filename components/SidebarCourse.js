const SidebarCourse = ({ course }) => {
  return (
    <button
      className="bg-blue-300 rounded-md p-4 w-full my-2"
      onClick={() => console.log(course.time)}
    >
      <p>{course.days}</p>
      <p>{course.time}</p>
      <p>{course.instructor}</p>
      <p>{course.room}</p>
    </button>
  );
};

export default SidebarCourse;
