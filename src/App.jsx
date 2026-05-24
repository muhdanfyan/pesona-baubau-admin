import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HeaderAdmin from './components/HeaderAdmin';
import LoginAdmin from './pages/LoginAdmin';
import DashboardUtama from './pages/DashboardUtama';
import KelolaDestinasi from './pages/KelolaDestinasi';
import TambahDestinasi from './pages/TambahDestinasi';
import DetailDestinasiAdmin from './pages/DetailDestinasiAdmin';
import KelolaEvent from './pages/KelolaEvent';
import KelolaUMKM from './pages/KelolaUMKM';
import BukuTamu from './pages/BukuTamu';
import Laporan from './pages/Laporan';
import ManajemenPengguna from './pages/ManajemenPengguna';

function AdminLayout({ children }) {
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Ringkasan Pariwisata';
    if (path.startsWith('/destinasi')) return 'Kelola Destinasi';
    if (path.startsWith('/event')) return 'Kelola Event';
    if (path.startsWith('/umkm')) return 'Kelola UMKM';
    if (path.startsWith('/buku-tamu')) return 'Buku Tamu & Ulasan';
    if (path.startsWith('/laporan')) return 'Laporan Pariwisata';
    if (path.startsWith('/pengguna')) return 'Manajemen Pengguna';
    return 'Dashboard';
  };

  return (
    <div className="flex min-h-screen bg-surface-container-low">
      <Sidebar />
      <main className="ml-sidebar-width min-h-screen flex-1">
        <HeaderAdmin title={getTitle()} />
        <section className="pt-24 px-xl pb-xl space-y-lg">
          {children}
        </section>
        <footer className="px-xl py-lg text-center text-on-surface-variant/60 text-xs">
          &copy; 2024 Dinas Pariwisata Kota Baubau. Powered by Digital Hub Infrastructure.
        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginAdmin />} />
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <DashboardUtama />
            </AdminLayout>
          }
        />
        <Route
          path="/destinasi"
          element={
            <AdminLayout>
              <KelolaDestinasi />
            </AdminLayout>
          }
        />
        <Route
          path="/destinasi/tambah"
          element={
            <AdminLayout>
              <TambahDestinasi />
            </AdminLayout>
          }
        />
        <Route
          path="/destinasi/:id"
          element={
            <AdminLayout>
              <DetailDestinasiAdmin />
            </AdminLayout>
          }
        />
        <Route
          path="/event"
          element={
            <AdminLayout>
              <KelolaEvent />
            </AdminLayout>
          }
        />
        <Route
          path="/umkm"
          element={
            <AdminLayout>
              <KelolaUMKM />
            </AdminLayout>
          }
        />
        <Route
          path="/buku-tamu"
          element={
            <AdminLayout>
              <BukuTamu />
            </AdminLayout>
          }
        />
        <Route
          path="/laporan"
          element={
            <AdminLayout>
              <Laporan />
            </AdminLayout>
          }
        />
        <Route
          path="/pengguna"
          element={
            <AdminLayout>
              <ManajemenPengguna />
            </AdminLayout>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
