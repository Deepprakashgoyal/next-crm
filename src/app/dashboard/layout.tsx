import PageHeader from '../components/page-header';
import Sidebar from '../components/sidebar';
// import SideNav from '../components/sidenav';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full bg-gray-300 flex-none md:w-64">
        {/* <SideNav /> */}
        <Sidebar />
      </div>
      <div className="flex-grow p-4 md:overflow-y-auto md:p-6">
        <PageHeader />
        {children}
      </div>
    </div>
  );
}