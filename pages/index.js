import { useState } from 'react';
import Calendar from '../components/Calendar/Calendar';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Home() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  return (
    <>
      <Head>
        <title>Course Scheduler</title>
      </Head>
      <Header
        selectedCourses={selectedCourses}
        setSelectedCourses={setSelectedCourses}
      />
      <main className="flex flex-col lg:flex-row h-screen pt-20">
        <Sidebar
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
        />
        <Calendar
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
        />
      </main>
    </>
  );
}
