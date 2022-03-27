import subjectList from '../../public/data/subjectlist.json';
import  {useState, useRef, useEffect} from 'react'
import Image from 'next/image';
import Logo from '/images/logo.jpg'

const Header = () => {
  const [searchData, setSearchData] = useState({
    searchBar: ''
  })
  const [courses, setCourses] = useState(subjectList) 
  const [searchResult, setSearchResult] = useState([])
  function handleChange(e) {
    setSearchData({...searchData, [e.target.name] : e.target.value})
  }
  useEffect(() =>{
  const course =  courses.filter(c =>{
    // console.log(searchData.searchBar.length)
    if (searchData.searchBar.length === 0) return false
   return c.STVSUBJ_DESC.includes(searchData.searchBar);
    })
    setSearchResult(course)
  }, [searchData])
  const cardTemplate = useRef()
  const cardHeader = useRef()
  const cardBody = useRef()
  // console.log(cardTemplate)
  return (
    <header className="fixed inset-0 bg-blue-400 h-20 flex justify-center items-center" >
      <Image src={Logo} width="95" alt='logo' height="95"/ >
      <p className='font-bold font-sans mx-5 text-2xl'>Search Courses</p>

      <div className='flex flex-col fixed items-center' style={{marginTop: '600px'}}>
        <input name='searchBar' value={searchData.searchBar} onChange={handleChange} type="search"className="bg-green-100 h-16  w-1/2 font-bold text-2xl rounded-xl border-4 border-orange-300 p-2 text-lg" />
        <div className='result-cards border-4 rounded-xl font-bold overflow-auto' style={{maxHeight: '40vh'}}  ref={cardTemplate}>
        {searchResult?.map((s,  i)=>{
          return(
          <div key={i} className="card bg-white m-2 border-4 border-black z-10">
            <div className='header' ref={cardHeader}>{s.STVSUBJ_DESC}</div>
            <div className='body' ref={cardBody}>{s.STVSUBJ_CODE}</div>
          </div>
          )
        })}
        </div>

      </div>
    </header>
  )
};

export default Header;
