import TimeCell from './TimeCell';

const TimeColumn = () => {
  return (
    <div className="w-16 flex flex-col">
      <br />
      <div className="flex-1 grid">
        <TimeCell />
        <TimeCell />
        <TimeCell />
        <TimeCell />
        <TimeCell />
        <TimeCell />
        <TimeCell />
        <TimeCell />
        <TimeCell />
      </div>
    </div>
  );
};

export default TimeColumn;
