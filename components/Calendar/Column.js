const Course = ({ course, selectedCourses, setSelectedCourses }) => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute w-full text-gray-600 px-2">
        <div className="flex justify-end">
          <button
            className="text-red-500"
            onClick={() =>
              setSelectedCourses(
                selectedCourses.filter((c) => c.id !== course.id)
              )
            }
          >
            x
          </button>
        </div>
        <p>{course.id}</p>
      </div>
    </div>
  );
};

const Cell = ({ offset, courses, selectedCourses, setSelectedCourses }) => {
  const hour = 8 + offset; // 8 am start time
  let course = null;

  let firstFilled,
    secondFilled,
    thirdFilled,
    fourthFilled = false;
  let isTop = -1;

  courses.forEach((c) => {
    if (c.startTime <= hour && c.endTime >= hour + 1 / 4) {
      firstFilled = true;
      if (hour === c.startTime) {
        isTop = 1;
        course = c;
      }
    }
    if (c.startTime <= hour && c.endTime >= hour + 2 / 4) secondFilled = true;
    if (
      (c.startTime <= hour && c.endTime >= hour + 3 / 4) ||
      (c.startTime > hour && c.startTime - hour < 1)
    ) {
      thirdFilled = true;
      if (hour + 1 / 2 === c.startTime) {
        isTop = 3;
        course = c;
      }
    }
    if (
      (c.startTime <= hour && c.endTime >= hour + 4 / 4) ||
      (c.startTime > hour && c.startTime - hour < 1)
    )
      fourthFilled = true;
  });

  return (
    <div>
      <div
        className={`h-1/4 ${
          firstFilled && 'bg-yellow-200 border-x border-blue-200'
        }`}
      >
        {firstFilled && isTop === 1 && (
          <Course
            course={course}
            selectedCourses={selectedCourses}
            setSelectedCourses={setSelectedCourses}
          />
        )}
      </div>
      <div
        className={`h-1/4 ${
          secondFilled && 'bg-yellow-200 border-x border-blue-200'
        }`}
      ></div>
      <div
        className={`h-1/4 ${
          thirdFilled && 'bg-yellow-200 border-x border-blue-200'
        }`}
      >
        {thirdFilled && isTop === 3 && (
          <Course
            course={course}
            selectedCourses={selectedCourses}
            setSelectedCourses={setSelectedCourses}
          />
        )}
      </div>
      <div
        className={`h-1/4 ${
          fourthFilled && 'bg-yellow-200 border-x border-blue-200'
        }`}
      ></div>
    </div>
  );
};

const Column = ({ day, selectedCourses, setSelectedCourses }) => {
  return (
    <div className="flex flex-col">
      <p className="text-center">{day}</p>
      <div className="flex-1 grid divide-dashed divide-y mt-4 border-t">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
          <Cell
            key={n}
            offset={n}
            courses={selectedCourses.filter((c) => c['days'].includes(day))}
            selectedCourses={selectedCourses}
            setSelectedCourses={setSelectedCourses}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
