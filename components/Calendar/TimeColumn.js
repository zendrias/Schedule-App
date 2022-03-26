import TimeCell from './TimeCell';

const TimeColumn = () => {
  return (
    <div className="w-16 flex flex-col">
      <br />
      <div className="flex-1 grid mt-4">
        <TimeCell hour={8} />
        <TimeCell hour={9} />
        <TimeCell hour={10} />
        <TimeCell hour={11} />
        <TimeCell hour={12} />
        <TimeCell hour={13} />
        <TimeCell hour={14} />
        <TimeCell hour={15} />
        <TimeCell hour={16} />
        <TimeCell hour={17} />
        <TimeCell hour={18} />
      </div>
    </div>
  );
};

export default TimeColumn;
