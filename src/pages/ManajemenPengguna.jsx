import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Eye, Edit, Trash2, UserPlus, Bell, HelpCircle } from 'lucide-react';

const users = [
  { no: 1, name: 'Andi Pratama', email: 'andi.pratama@baubau.go.id', role: 'Super Admin', status: 'Aktif', lastLogin: '12 Okt 2023, 08:30' },
  { no: 2, name: 'Siti Rahmawati', email: 'siti.rahmawati@baubau.go.id', role: 'Admin', status: 'Aktif', lastLogin: '12 Okt 2023, 07:15' },
  { no: 3, name: 'Budi Santoso', email: 'budi.santoso@baubau.go.id', role: 'Editor', status: 'Aktif', lastLogin: '11 Okt 2023, 16:45' },
  { no: 4, name: 'Dewi Lestari', email: 'dewi.lestari@baubau.go.id', role: 'Viewer', status: 'Nonaktif', lastLogin: '05 Okt 2023, 09:00' },
  { no: 5, name: 'Hendra Gunawan', email: 'hendra.gunawan@baubau.go.id', role: 'Editor', status: 'Aktif', lastLogin: '12 Okt 2023, 10:20' },
];

const roleColors = {
  'Super Admin': 'bg-primary/10 text-primary',
  'Admin': 'bg-secondary/10 text-secondary',
  'Editor': 'bg-primary-fixed text-on-primary-fixed-variant',
  'Viewer': 'bg-surface-variant text-on-surface-variant',
};

export default function ManajemenPengguna() {
  const [roleFilter, setRoleFilter] = useState('Semua');

  const filtered = roleFilter === 'Semua' ? users : users.filter(u => u.role === roleFilter);

  return (
    <div className="space-y-lg">
      {/* Header */}
      <div className="flex justify-between items-end mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Kelola Pengguna</h2>
          <p className="text-on-surface-variant">Manajemen hak akses dan profil operator sistem Pesona Baubau.</p>
        </div>
        <button className="flex items-center gap-sm bg-primary text-white px-lg py-3 rounded-lg font-title-lg hover:opacity-90 active:scale-95 transition-all shadow-md">
          <UserPlus size={18} />
          <span>Tambah Pengguna</span>
        </button>
      </div>

      {/* Role Filters */}
      <div className="grid grid-cols-12 gap-lg mb-xl">
        <div className="col-span-12 lg:col-span-8 bg-white p-2 rounded-xl custom-shadow flex items-center gap-1">
          {['Semua', 'Super Admin', 'Admin', 'Editor', 'Viewer'].map((role) => (
            <button
              key={role}
              onClick={() => setRoleFilter(role)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium text-body-md transition-all ${
                roleFilter === role ? 'bg-primary text-white' : 'hover:bg-surface-container text-on-surface-variant'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="relative w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Cari nama atau email..." type="text" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg mb-xl">
        {[
          { label: 'Total Pengguna', value: '24', color: 'bg-primary/10 text-primary', icon: '👥' },
          { label: 'Super Admin', value: '2', color: 'bg-primary-fixed text-primary', icon: '⭐' },
          { label: 'Aktif Hari Ini', value: '8', color: 'bg-green-100 text-green-700', icon: '✅' },
          { label: 'Nonaktif', value: '3', color: 'bg-surface-container-high text-on-surface-variant', icon: '⛔' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-lg rounded-xl custom-shadow flex items-center gap-md">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg ${stat.color}`}>{stat.icon}</div>
            <div>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">{stat.label}</p>
              <h3 className="font-headline-md text-headline-md text-primary">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl custom-shadow border border-outline-variant overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-surface-container border-b border-outline-variant">
            <tr>
              <th className="px-lg py-md font-label-md text-xs text-on-surface-variant uppercase tracking-wider">No</th>
              <th className="px-lg py-md font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Nama</th>
              <th className="px-lg py-md font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Email</th>
              <th className="px-lg py-md font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Role</th>
              <th className="px-lg py-md font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="px-lg py-md font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Terakhir Login</th>
              <th className="px-lg py-md font-label-md text-xs text-on-surface-variant uppercase tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {filtered.map((user) => (
              <tr key={user.no} className="hover:bg-primary/5 transition-colors">
                <td className="px-lg py-md text-on-surface-variant">{String(user.no).padStart(2, '0')}</td>
                <td className="px-lg py-md font-bold text-primary">{user.name}</td>
                <td className="px-lg py-md text-on-surface">{user.email}</td>
                <td className="px-lg py-md">
                  <span className={`px-sm py-1 rounded text-xs font-medium ${roleColors[user.role] || ''}`}>{user.role}</span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs">
                    <span className={`w-2 h-2 rounded-full ${user.status === 'Aktif' ? 'bg-green-500' : 'bg-outline'}`}></span>
                    <span className="text-sm">{user.status}</span>
                  </div>
                </td>
                <td className="px-lg py-md text-on-surface-variant">{user.lastLogin}</td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm">
                    <button className="p-2 hover:bg-primary-fixed rounded-full transition-all text-primary" title="Lihat"><Eye size={16} /></button>
                    <button className="p-2 hover:bg-secondary-fixed rounded-full transition-all text-secondary" title="Edit"><Edit size={16} /></button>
                    <button className="p-2 hover:bg-error-container rounded-full transition-all text-error" title="Hapus"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-lg py-md bg-surface-container border-t border-outline-variant flex items-center justify-between">
          <p className="text-sm text-on-surface-variant">Menampilkan 1-5 dari 24 pengguna</p>
          <div className="flex items-center gap-xs">
            <button className="p-2 rounded-lg hover:bg-surface-container-high transition-all text-on-surface-variant disabled:opacity-30" disabled><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-sm font-medium">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-sm font-medium">3</button>
            <span className="px-sm text-on-surface-variant">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-sm font-medium">5</button>
            <button className="p-2 rounded-lg hover:bg-surface-container-high transition-all text-on-surface-variant"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
