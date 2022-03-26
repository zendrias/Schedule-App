import Calendar from '../components/Calendar/Calendar';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Course Scheduler</title>
      </Head>
      <Header />
      <main className="flex flex-col md:flex-row h-screen pt-20">
        <Sidebar />
        <Calendar />
      </main>
    </>
  );
}
