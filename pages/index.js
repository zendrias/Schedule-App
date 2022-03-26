import Calendar from '../components/Calendar/Calendar';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-row flex-1 min-h-full m-5">
          <Sidebar />
          <Calendar />
        </div>
      </main>
    </div>
  );
}
