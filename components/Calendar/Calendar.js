import Column from './Column';
import TimeColumn from './TimeColumn';

const Calendar = ({ selectedCourses, setSelectedCourses }) => {
  return (
    <div className="border-4 border-yellow-500 rounded-2xl flex flex-1 m-5 p-4 bg-green-50">
      <TimeColumn />
      <div className="flex-1 grid grid-cols-5">
        {['Mo', 'Tu', 'We', 'Th', 'Fr'].map((day) => (
          <Column
            key={day}
            day={day}
            courses={selectedCourses.filter((c) => c['days'].includes(day))}
            setSelectedCourses={setSelectedCourses}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
