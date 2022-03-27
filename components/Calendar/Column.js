const Cell = ({ offset, courses }) => {
  const hour = 8 + offset; // 8 am start time

  let firstFilled,
    secondFilled,
    thirdFilled,
    fourthFilled = false;

  courses.forEach((c) => {
    const isFilled = c.startTime <= hour;
    firstFilled = isFilled && c.endTime >= hour + 1 / 4;
    secondFilled = isFilled && c.endTime >= hour + 2 / 4;
    thirdFilled = isFilled && c.endTime >= hour + 3 / 4;
    fourthFilled = isFilled && c.endTime >= hour + 4 / 4;
  });

  return (
    <div>
      <div className={`h-1/4 ${firstFilled && 'bg-orange-200'}`}>
        {firstFilled && courses.some((c) => c.startTime - hour < 1) && (
          <p className="absolute">{hour}</p>
        )}
      </div>
      <div className={`h-1/4 ${secondFilled && 'bg-orange-200'}`}></div>
      <div className={`h-1/4 ${thirdFilled && 'bg-orange-200'}`}></div>
      <div className={`h-1/4 ${fourthFilled && 'bg-orange-200'}`}></div>
    </div>
  );
};

const Column = ({ day, courses, setSelectedCourses }) => {
  return (
    <div className="flex flex-col">
      <p className="text-center">{day}</p>
      <div className="flex-1 grid divide-dashed divide-y mt-4 border-t">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
          <Cell key={n} offset={n} courses={courses} />
        ))}
      </div>
    </div>
  );
};

export default Column;
