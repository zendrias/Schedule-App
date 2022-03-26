import Cell from './Cell';

const Column = ({ day }) => {
  return (
    <div className="flex flex-col">
      <p className="text-center">{day}</p>
      <div className="flex-1 grid divide-y mt-4 border-t">
        <Cell />
        <Cell />
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
