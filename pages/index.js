import Calendar from '../components/Calendar/Calendar';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-col md:flex-row flex-1 m-4">
          <Sidebar />
          <Calendar />
        </div>
      </main>
    </div>
  );
}
