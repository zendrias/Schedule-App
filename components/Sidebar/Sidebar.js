import subjectList from '../../public/data/subjectlist.json';
import SidebarSubject from './SidebarSubject';

const Sidebar = () => {
  return (
    <div className="md:w-1/4 border-4 border-yellow-500 rounded-2xl bg-green-50 m-5 p-4 overflow-auto">
      <h2 className="text-center font-bold text-lg">Courses</h2>
      {subjectList.map((subject) => {
        return <SidebarSubject key={subject.STVSUBJ_CODE} subject={subject} />;
      })}
    </div>
  );
};

export default Sidebar;
