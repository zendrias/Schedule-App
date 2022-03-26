import Column from './Column';
import TimeColumn from './TimeColumn';

const Calendar = () => {
  return (
    <div className="border border-black rounded-md flex flex-1 m-5 p-4">
      <TimeColumn />
      <div className="flex-1 grid grid-cols-5">
        <Column key="Mo" day="Mo" />
        <Column key="Tu" day="Tu" />
        <Column key="We" day="We" />
        <Column key="Th" day="Th" />
        <Column key="Fr" day="Fr" />
      </div>
    </div>
  );
};

export default Calendar;
