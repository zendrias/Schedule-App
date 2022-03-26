const SidebarSubject = ({ subject }) => {
  return (
    <button
      className="bg-green-200 rounded-2xl p-4 w-full my-2"
      onClick={() =>
        console.log(`Course from ${subject.startTime}-${subject.endTime}`)
      }
    >
      <p>{subject.STVSUBJ_CODE}</p>
      <p>{subject.STVSUBJ_DESC}</p>
    </button>
  );
};

export default SidebarSubject;
