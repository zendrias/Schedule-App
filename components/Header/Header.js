import subjectList from '../../public/data/subjectlist.json';
import  {useState} from 'react'
import Image from 'next/image';
import Logo from '/images/logo.jpg'

const Header = () => {
  const [searchData, setSearchData] = useState({
    searchBar: ''
  })

  function handleChange(e) {
    setSearchData({...searchData, [e.target.name] : e.target.value})
  }
  return (
    <header className="fixed inset-0 bg-blue-400 h-20 flex justify-center items-center" >
      <Image src={Logo} width="95" alt='logo' height="95"/ >
      <p className='font-bold font-sans mx-5 text-2xl'>Search Courses</p>
      {/* <i className='absolute'>🔎</i> */}
      <input name='searchBar' value={searchData.searchBar} onChange={handleChange} type="text"className="bg-green-100 h-16  w-1/2 font-bold text-2xl rounded-xl border-4 border-orange-300 p-2" />
    </header>
  )
};

export default Header;
