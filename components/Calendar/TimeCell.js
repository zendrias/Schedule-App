const formatHour = (hour) => {
  if (hour < 12) return `${hour}am`;
  if (hour == 12) return '12pm';
  return `${hour - 12}pm`;
};

const TimeCell = ({ hour }) => {
  return (
    <div className="relative">
      <p className="absolute -top-3 left-4">{formatHour(hour)}</p>
    </div>
  );
};

export default TimeCell;
