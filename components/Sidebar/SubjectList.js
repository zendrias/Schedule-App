import subjectList from '../../public/data/subjectlist.json';

const Subject = ({ subject, setSelectedSubject }) => (
  <button
    className="bg-green-200 rounded-2xl p-4 w-full my-2"
    onClick={() => setSelectedSubject(subject.STVSUBJ_CODE)}
  >
    <p>{subject.STVSUBJ_CODE}</p>
    <p>{subject.STVSUBJ_DESC}</p>
  </button>
);

const SubjectList = ({ setSelectedSubject }) => (
  <div className="overflow-auto flex-1">
    {subjectList.map((subject) => (
      <Subject
        key={subject.STVSUBJ_CODE}
        subject={subject}
        setSelectedSubject={setSelectedSubject}
      />
    ))}
  </div>
);

export default SubjectList;
