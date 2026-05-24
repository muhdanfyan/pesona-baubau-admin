import { useState } from 'react';
import { Search, Plus, Download, ChevronLeft, ChevronRight, Eye, Edit, Trash2, Star } from 'lucide-react';

const destinations = [
  { no: '01', name: 'Benteng Keraton Buton', location: 'Kec. Murhum, Kota Baubau', category: 'Sejarah', status: 'Aktif', rating: 4.9 },
  { no: '02', name: 'Pantai Nirwana', location: 'Kec. Betoambari, Kota Baubau', category: 'Pantai', status: 'Aktif', rating: 4.8 },
  { no: '03', name: 'Masjid Agung Keraton', location: 'Kec. Murhum, Kota Baubau', category: 'Religi', status: 'Nonaktif', rating: 4.7 },
  { no: '04', name: 'Air Terjun Tirta Rimba', location: 'Kec. Wolio, Kota Baubau', category: 'Alam', status: 'Aktif', rating: 4.6 },
];

const categoryColors = {
  'Sejarah': 'bg-tertiary-fixed text-on-tertiary-fixed',
  'Pantai': 'bg-primary-fixed text-on-primary-fixed-variant',
  'Religi': 'bg-surface-variant text-on-surface-variant',
  'Alam': 'bg-secondary-container text-on-secondary-container',
};

export default function KelolaDestinasi() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  return (
    <div className="space-y-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Kelola Destinasi</h2>
          <p className="text-on-surface-variant mt-xs">Atur dan pantau data destinasi wisata di Kota Baubau</p>
        </div>
        <div className="flex gap-sm">
          <button className="flex items-center gap-sm bg-surface-container-highest text-primary font-title-lg px-md py-sm rounded-lg hover:bg-surface-container-high transition-all shadow-sm border border-outline-variant">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center gap-sm bg-primary text-white font-title-lg px-md py-sm rounded-lg hover:brightness-110 transition-all shadow-md active:scale-95">
            <Plus size={18} />
            <span>Tambah Destinasi</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant mb-lg flex flex-wrap items-center gap-md">
        <div className="flex items-center gap-sm">
          <span className="text-on-surface-variant font-label-md">Kategori:</span>
          <div className="flex gap-xs">
            {['Semua', 'Sejarah', 'Alam', 'Religi', 'Pantai'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-md py-xs rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-outline-variant'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="ml-auto flex items-center gap-sm">
          <span className="text-on-surface-variant font-label-md">Urutkan:</span>
          <select className="bg-transparent border-none text-sm font-medium text-primary focus:ring-0 cursor-pointer">
            <option>Terbaru</option>
            <option>Rating Tertinggi</option>
            <option>Nama A-Z</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high text-on-surface-variant font-label-md uppercase tracking-wider">
              <th className="px-lg py-md font-semibold">No</th>
              <th className="px-lg py-md font-semibold">Nama Destinasi</th>
              <th className="px-lg py-md font-semibold">Kategori</th>
              <th className="px-lg py-md font-semibold">Status</th>
              <th className="px-lg py-md font-semibold text-center">Rating</th>
              <th className="px-lg py-md font-semibold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {destinations.map((dest) => (
              <tr key={dest.no} className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-lg py-md text-on-surface-variant">{dest.no}</td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {dest.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-title-lg text-primary">{dest.name}</p>
                      <p className="text-xs text-on-surface-variant">{dest.location}</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-md">
                  <span className={`px-sm py-1 rounded text-xs font-medium ${categoryColors[dest.category] || ''}`}>
                    {dest.category}
                  </span>
                </td>
                <td className="px-lg py-md">
                  <div className="flex items-center gap-xs">
                    <span className={`w-2 h-2 rounded-full ${dest.status === 'Aktif' ? 'bg-green-500' : 'bg-outline'}`}></span>
                    <span className={`text-sm font-medium ${dest.status === 'Aktif' ? 'text-green-700' : 'text-on-surface-variant'}`}>{dest.status}</span>
                  </div>
                </td>
                <td className="px-lg py-md text-center">
                  <div className="flex items-center justify-center gap-xs text-secondary">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold">{dest.rating}</span>
                  </div>
                </td>
                <td className="px-lg py-md text-right">
                  <div className="flex justify-end gap-sm">
                    <button className="p-2 hover:bg-primary-fixed rounded-full transition-all text-primary" title="Lihat">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 hover:bg-secondary-fixed rounded-full transition-all text-secondary" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button className="p-2 hover:bg-error-container rounded-full transition-all text-error" title="Hapus">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-lg py-md bg-surface-container flex items-center justify-between">
          <p className="text-sm text-on-surface-variant">Menampilkan 1-4 dari 48 destinasi</p>
          <div className="flex items-center gap-xs">
            <button className="p-2 rounded-lg hover:bg-surface-container-high transition-all text-on-surface-variant disabled:opacity-30" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-sm font-medium">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-sm font-medium">3</button>
            <span className="px-sm text-on-surface-variant">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-sm font-medium">12</button>
            <button className="p-2 rounded-lg hover:bg-surface-container-high transition-all text-on-surface-variant">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mt-xl">
        <div className="bg-primary p-lg rounded-xl text-white shadow-md relative overflow-hidden group">
          <p className="text-white/80 font-label-md">Total Destinasi</p>
          <h3 className="text-3xl font-bold mt-sm">48</h3>
          <div className="mt-md flex items-center gap-xs text-secondary-container text-xs">
            <span>↑</span>
            <span>+2 Bulan ini</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm relative overflow-hidden group">
          <p className="text-on-surface-variant font-label-md">Status Aktif</p>
          <h3 className="text-3xl font-bold mt-sm text-primary">42</h3>
          <p className="text-xs text-on-surface-variant mt-md">87.5% dari total publikasi</p>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm relative overflow-hidden group">
          <p className="text-on-surface-variant font-label-md">Rata-rata Rating</p>
          <h3 className="text-3xl font-bold mt-sm text-secondary">4.82</h3>
          <p className="text-xs text-on-surface-variant mt-md">Berdasarkan 1.2k ulasan warga</p>
        </div>
      </div>
    </div>
  );
}
