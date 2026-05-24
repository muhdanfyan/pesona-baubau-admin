import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  MapPin,
  Calendar,
  Store,
  BookOpen,
  BarChart3,
  Users,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/destinasi', label: 'Kelola Destinasi', icon: MapPin },
  { path: '/event', label: 'Kelola Event', icon: Calendar },
  { path: '/umkm', label: 'Kelola UMKM', icon: Store },
  { path: '/buku-tamu', label: 'Buku Tamu', icon: BookOpen },
  { path: '/laporan', label: 'Laporan', icon: BarChart3 },
  { path: '/pengguna', label: 'Pengguna', icon: Users },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-sidebar-width h-screen fixed left-0 top-0 bg-primary-container flex flex-col py-lg border-r border-outline-variant shadow-sm z-50 custom-scrollbar">
      {/* Logo Section */}
      <div className="px-lg mb-xl">
        <h1 className="font-headline font-headline-md text-on-primary-container font-bold tracking-tight">
          Digital Hub
        </h1>
        <p className="text-on-primary-container/70 text-label-md font-label-md">
          Admin Baubau
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-sm">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
            (item.path === '/destinasi' && location.pathname.startsWith('/destinasi'));
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-md px-md py-3 rounded-lg transition-all cursor-pointer active:scale-95 group relative ${
                isActive
                  ? 'text-secondary-container bg-primary/30 border-l-4 border-secondary-container'
                  : 'text-on-primary-container/70 hover:text-on-primary-container hover:bg-primary/50'
              }`}
            >
              <Icon size={20} />
              <span className="font-body-md text-body-md">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Profile Section */}
      <div className="mt-auto px-lg pt-lg border-t border-on-primary-container/10">
        <div className="flex items-center gap-md">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-bold text-sm">
            AD
          </div>
          <div className="overflow-hidden">
            <p className="text-on-primary-container font-bold text-sm truncate">
              Admin Dinas
            </p>
            <p className="text-on-primary-container/50 text-xs truncate">
              Pariwisata Baubau
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
