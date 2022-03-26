import SidebarCourse from './SidebarCourse';

const courses = [
  {
    id: 0,
    days: 'MoWe',
    startTime: 2,
    endTime: 3.5,
    instructor: 'Smith, John',
    room: 'Tech room',
  },
  {
    id: 1,
    days: 'TuTh',
    startTime: 12,
    endTime: 1,
    instructor: 'Doe, Jane',
    room: 'History building',
  },
];

const Sidebar = () => {
  return (
    <div className="md:w-1/4 border-4 border-yellow-500 rounded-2xl bg-green-50 m-5 p-4">
      <h2 className="text-center font-bold text-lg">Courses</h2>
      {courses.map((course) => {
        return <SidebarCourse key={course.id} course={course} />;
      })}
    </div>
  );
};

export default Sidebar;
