const Course = ({ course }) => (
  <button
    className="bg-green-200 rounded-2xl p-4 w-full my-2 disabled:bg-green-100"
    onClick={() => console.log('select course')}
    disabled={course.OPEN_CLOSED === 'CLOSED'}
  >
    <p>{course.COURSE_ID}</p>
    <p>{course.TITLE}</p>
    <p>{course.CRS_DAYTIME}</p>
    <p>{course.INSTRUCTOR}</p>
    <p>{course.OPEN_CLOSED}</p>
  </button>
);

const CourseList = ({ selectedSubject }) => {
  const courses = require(`../../public/data/${selectedSubject}_courses.json`);
  console.log(courses);

  return (
    <div className="overflow-auto flex-1">
      {courses.map((course) => (
        <Course key={course.COURSE_ID} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
