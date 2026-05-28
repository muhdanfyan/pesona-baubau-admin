import { useState } from 'react';
import { Search, Download, ChevronLeft, ChevronRight, Eye, CheckCircle, XCircle, RotateCcw, Plus, Store, Clock } from 'lucide-react';

const umkmList = [
  { no: '01', name: 'Tenun Buton Bahari', owner: 'Andi Setiawan', category: 'Kerajinan', status: 'Aktif', date: '12 Okt 2023' },
  { no: '02', name: 'Warung Ikan Bakar Wolio', owner: 'Siti Aminah', category: 'Kuliner', status: 'Menunggu', date: '28 Okt 2023' },
  { no: '03', name: 'Jasa Tour Benteng Buton', owner: 'Rahmat Hidayat', category: 'Jasa', status: 'Aktif', date: '05 Nov 2023' },
  { no: '04', name: 'Oleh-oleh Khas Kamali', owner: 'Maria Ulfa', category: 'Kuliner', status: 'Ditolak', date: '10 Nov 2023' },
  { no: '05', name: 'Bengkel Maritim Baubau', owner: 'Budi Santoso', category: 'Lainnya', status: 'Menunggu', date: '15 Nov 2023' },
  { no: '06', name: 'Homestay Nirwana', owner: 'Samsul Bahri', category: 'Penginapan', status: 'Aktif', date: '20 Nov 2023' },
  { no: '07', name: 'ButonLens', owner: 'Rizal', category: 'Jasa Fotografi', status: 'Aktif', date: '21 Nov 2023' },
];

export default function KelolaUMKM() {
  const [filter, setFilter] = useState('Semua');

  const filtered = filter === 'Semua' ? umkmList : umkmList.filter(u => u.status === filter);

  const statusBadge = (status) => {
    switch (status) {
      case 'Aktif': return { bg: 'bg-green-100 text-green-700 border-green-200', dot: 'bg-green-500 animate-pulse', txt: 'Aktif' };
      case 'Menunggu': return { bg: 'bg-yellow-100 text-on-secondary-container border-secondary-container', dot: 'bg-secondary', txt: 'Menunggu' };
      case 'Ditolak': return { bg: 'bg-error-container/30 text-error border-error-container', dot: 'bg-error', txt: 'Ditolak' };
      default: return { bg: 'bg-gray-100 text-gray-500', dot: 'bg-gray-500', txt: status };
    }
  };

  return (
    <div className="space-y-lg max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-xl">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary">Kelola UMKM Terdaftar</h1>
          <p className="text-on-surface-variant mt-xs">Manajemen data pelaku usaha mikro, kecil, dan menengah di wilayah Baubau.</p>
        </div>
        <button className="flex items-center gap-sm px-lg py-md bg-secondary text-white rounded-lg font-title-lg hover:shadow-lg transition-all active:scale-95">
          <Plus size={18} />
          Daftarkan UMKM Baru
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-xl mb-xl">
        <div className="bg-surface-container-lowest p-lg rounded-xl custom-shadow border-l-4 border-primary relative overflow-hidden group">
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-on-surface-variant font-label-md uppercase tracking-wider mb-sm">Total UMKM</p>
              <h3 className="font-display-lg text-display-lg text-primary">1,248</h3>
              <p className="text-xs text-green-600 flex items-center gap-xs mt-sm font-medium">↑ +12% dari bulan lalu</p>
            </div>
            <div className="p-sm bg-primary/10 rounded-lg text-primary"><Store size={32} /></div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl custom-shadow border-l-4 border-secondary relative overflow-hidden group">
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-on-surface-variant font-label-md uppercase tracking-wider mb-sm">Menunggu Verifikasi</p>
              <h3 className="font-display-lg text-display-lg text-secondary">42</h3>
              <p className="text-xs text-on-surface-variant flex items-center gap-xs mt-sm">⏳ Perlu tindakan segera</p>
            </div>
            <div className="p-sm bg-secondary/10 rounded-lg text-secondary"><Clock size={32} /></div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl custom-shadow border-l-4 border-on-secondary-container relative overflow-hidden group">
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-on-surface-variant font-label-md uppercase tracking-wider mb-sm">UMKM Baru (Bulan Ini)</p>
              <h3 className="font-display-lg text-display-lg text-secondary">86</h3>
              <div className="w-full bg-surface-variant h-1 rounded-full mt-lg overflow-hidden">
                <div className="bg-secondary h-full w-[65%]"></div>
              </div>
            </div>
            <div className="p-sm bg-secondary-container/20 rounded-lg text-secondary"><Plus size={32} /></div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-surface-container-lowest rounded-xl custom-shadow mb-xl p-md flex flex-col md:flex-row items-center justify-between gap-md">
        <div className="flex p-base bg-surface-container-low rounded-lg">
          {['Semua', 'Aktif', 'Menunggu', 'Ditolak'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-lg py-sm rounded-md font-body-md text-body-md transition-all ${
                filter === f ? 'bg-white text-primary shadow-sm font-bold' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-md w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input className="w-full pl-10 pr-md py-sm border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Cari nama usaha atau pemilik..." type="text" />
          </div>
          <button className="flex items-center gap-sm px-lg py-sm bg-white border border-outline-variant text-primary rounded-lg hover:bg-surface-variant transition-all">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest rounded-xl custom-shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant">
                <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider w-16 text-center">No</th>
                <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Nama Usaha</th>
                <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pemilik</th>
                <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Kategori</th>
                <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Tanggal Daftar</th>
                <th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map((umkm) => {
                const badge = statusBadge(umkm.status);
                return (
                  <tr key={umkm.no} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-lg py-md text-center text-on-surface-variant">{umkm.no}</td>
                    <td className="px-lg py-md font-bold text-primary">{umkm.name}</td>
                    <td className="px-lg py-md">{umkm.owner}</td>
                    <td className="px-lg py-md">
                      <span className="px-sm py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-xs font-medium">{umkm.category}</span>
                    </td>
                    <td className="px-lg py-md">
                      <span className={`inline-flex items-center gap-xs px-md py-1 rounded-full text-xs font-bold border ${badge.bg}`}>
                        <span className={`w-2 h-2 rounded-full ${badge.dot}`}></span>
                        {badge.txt}
                      </span>
                    </td>
                    <td className="px-lg py-md text-on-surface-variant">{umkm.date}</td>
                    <td className="px-lg py-md">
                      <div className="flex items-center justify-center gap-sm">
                        <button className="p-xs text-primary hover:bg-primary/10 rounded-lg" title="Detail"><Eye size={18} /></button>
                        {umkm.status === 'Menunggu' ? (
                          <>
                            <button className="p-xs text-green-600 hover:bg-green-100 rounded-lg" title="Verifikasi"><CheckCircle size={18} /></button>
                            <button className="p-xs text-error hover:bg-error-container/20 rounded-lg" title="Tolak"><XCircle size={18} /></button>
                          </>
                        ) : umkm.status === 'Ditolak' ? (
                          <>
                            <button className="p-xs text-green-600 hover:bg-green-100 rounded-lg" title="Verifikasi"><CheckCircle size={18} /></button>
                            <button className="p-xs text-on-surface-variant hover:bg-surface-variant rounded-lg" title="Restore"><RotateCcw size={18} /></button>
                          </>
                        ) : (
                          <>
                            <button className="p-xs text-green-600 hover:bg-green-50 rounded-lg opacity-30 cursor-not-allowed" title="Verifikasi" disabled><CheckCircle size={18} /></button>
                            <button className="p-xs text-error hover:bg-error-container/20 rounded-lg" title="Tolak"><XCircle size={18} /></button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-lg py-lg bg-surface-container border-t border-outline-variant flex items-center justify-between">
          <p className="text-on-surface-variant text-body-md">Menampilkan <span className="font-bold text-on-surface">1 - 5</span> dari <span className="font-bold text-on-surface">1,248</span> UMKM</p>
          <div className="flex items-center gap-xs">
            <button className="p-sm rounded-lg border border-outline-variant bg-white text-on-surface-variant hover:bg-primary/5 transition-all disabled:opacity-50" disabled><ChevronLeft size={16} /></button>
            <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold shadow-sm">1</button>
            <button className="w-10 h-10 rounded-lg hover:bg-primary/5 text-on-surface transition-all">2</button>
            <button className="w-10 h-10 rounded-lg hover:bg-primary/5 text-on-surface transition-all">3</button>
            <span className="px-sm text-on-surface-variant">...</span>
            <button className="w-10 h-10 rounded-lg hover:bg-primary/5 text-on-surface transition-all">250</button>
            <button className="p-sm rounded-lg border border-outline-variant bg-white text-on-surface-variant hover:bg-primary/5 transition-all"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
