import Cell from './Cell';

const Column = ({ day }) => {
  return (
    <div className="flex flex-col">
      <p className="text-center">{day}</p>
      <div className="flex-1 grid divide-y">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default Column;
