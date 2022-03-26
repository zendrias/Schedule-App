const formatHour = (hour) => {
  if (hour < 12) return `${hour} am`;
  if (hour == 12) return '12 pm';
  return `${hour - 12} pm`;
};

const TimeCell = ({ hour }) => {
  return (
    <div className="relative">
      <p className="absolute -top-3 left-4">{formatHour(hour)}</p>
    </div>
  );
};

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
