import { useState } from 'react';
import { Download, Search, ChevronLeft, ChevronRight, Eye, EyeOff, Trash2, Star, Filter } from 'lucide-react';

const reviews = [
  { initials: 'AN', name: 'Andi Nurfian', email: 'andi.nurf@gmail.com', rating: 5, comment: '"Situsnya sangat informatif! Membantu sekali dalam merencanakan kunjungan ke Benteng Keraton Buton. Data sejarahnya lengkap."', date: '12 Okt 2023', time: '14:32 WIB', status: 'Ditampilkan' },
  { initials: 'AN', name: 'Anonim', email: 'ID: #BAU-9921', rating: 4, comment: '"Navigasi peta digital di situs Budaya agak lambat diakses lewat HP saya, mohon ditingkatkan kembali kecepatannya."', date: '11 Okt 2023', time: '09:15 WIB', status: 'Ditampilkan' },
  { initials: 'RM', name: 'Rahmat Maulana', email: 'rahmat.m@provider.com', rating: 2, comment: '"Konten videonya tidak bisa diputar, sudah coba refresh berkali-kali tetap sama. Tolong diperbaiki admin."', date: '10 Okt 2023', time: '21:44 WIB', status: 'Disembunyikan' },
  { initials: 'SD', name: 'Siti Dahlia', email: 'siti.d@outlook.com', rating: 5, comment: '"Bangga sekali dengan kemajuan digital Kota Baubau. Interface-nya keren dan sangat merepresentasikan budaya Buton!"', date: '09 Okt 2023', time: '10:05 WIB', status: 'Ditampilkan' },
];

export default function BukuTamu() {
  const [filter, setFilter] = useState('Semua');

  const filtered = filter === 'Semua' ? reviews : reviews.filter(r => {
    if (filter === 'Positif') return r.rating >= 4;
    if (filter === 'Netral') return r.rating === 3;
    if (filter === 'Negatif') return r.rating <= 2;
    return true;
  });

  return (
    <div className="space-y-lg max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-label-md text-on-surface-variant mb-lg">
        <span className="hover:text-primary transition-colors cursor-pointer">Dashboard</span>
        <span className="text-[14px]">›</span>
        <span className="text-on-surface font-semibold">Buku Tamu & Ulasan</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-lg mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-1">Buku Tamu Digital</h2>
          <p className="text-on-surface-variant">Pantau dan kelola apresiasi serta saran dari pengunjung situs.</p>
        </div>
        <button className="flex items-center gap-sm bg-primary text-white px-lg py-3 rounded-xl hover:opacity-90 transition-all font-semibold shadow-md active:scale-95">
          <Download size={18} />
          Export Laporan Ulasan
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
        <div className="bg-surface-container-lowest p-lg rounded-xl custom-shadow border border-outline-variant/30 flex items-center gap-lg">
          <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center text-primary">
            <span className="text-2xl font-bold">★</span>
          </div>
          <div>
            <p className="text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Total Ulasan</p>
            <h3 className="font-display-lg text-display-lg text-primary">1,284</h3>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl custom-shadow border border-outline-variant/30 flex items-center gap-lg">
          <div className="w-14 h-14 bg-secondary-fixed rounded-xl flex items-center justify-center text-secondary">
            <span className="text-2xl font-bold">⭐</span>
          </div>
          <div>
            <p className="text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Rating Rata-rata</p>
            <div className="flex items-baseline gap-xs">
              <h3 className="font-display-lg text-display-lg text-primary">4.8</h3>
              <span className="text-secondary font-bold">/ 5.0</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-lg rounded-xl custom-shadow border border-outline-variant/30 flex items-center gap-lg">
          <div className="w-14 h-14 bg-tertiary-fixed rounded-xl flex items-center justify-center text-tertiary">
            <span className="text-2xl font-bold">⏳</span>
          </div>
          <div>
            <p className="text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Ulasan Baru Hari Ini</p>
            <div className="flex items-center gap-sm">
              <h3 className="font-display-lg text-display-lg text-primary">24</h3>
              <span className="bg-error/10 text-error text-[10px] font-bold px-2 py-0.5 rounded-full">+12%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-surface-container-lowest rounded-xl custom-shadow p-md mb-lg border border-outline-variant/30">
        <div className="flex flex-col lg:flex-row justify-between gap-md">
          <div className="flex flex-wrap items-center gap-xs">
            {['Semua', 'Positif', 'Netral', 'Negatif'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-lg py-2 rounded-lg font-medium transition-all ${
                  filter === f ? 'bg-primary text-white font-semibold' : 'hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {f === 'Semua' ? f : `${f} (${f === 'Positif' ? '4-5' : f === 'Netral' ? '3' : '1-2'})`}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-sm">
            <div className="relative flex-1 lg:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 text-body-md outline-none" placeholder="Cari nama atau teks ulasan..." type="text" />
            </div>
            <button className="flex items-center gap-xs px-lg py-2 border border-outline-variant rounded-lg hover:bg-surface-container-high transition-all font-medium">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="bg-surface-container-lowest rounded-xl custom-shadow border border-outline-variant/30 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-high border-b border-outline-variant">
            <tr>
              <th className="px-lg py-4 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Pengunjung</th>
              <th className="px-lg py-4 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Rating & Komentar</th>
              <th className="px-lg py-4 text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Tanggal</th>
              <th className="px-lg py-4 text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-center">Status</th>
              <th className="px-lg py-4 text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/40">
            {filtered.map((review, i) => (
              <tr key={i} className="hover:bg-surface-container-low/50 transition-colors group">
                <td className="px-lg py-lg align-top">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary font-bold border-2 border-surface">
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{review.name}</p>
                      <p className="text-xs text-on-surface-variant">{review.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-lg py-lg max-w-md">
                  <div className="flex gap-0.5 mb-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={`text-sm ${star <= review.rating ? 'text-secondary' : 'text-outline-variant'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-body-md text-on-surface leading-relaxed">{review.comment}</p>
                </td>
                <td className="px-lg py-lg align-top">
                  <p className="text-body-md text-on-surface-variant whitespace-nowrap">{review.date}</p>
                  <p className="text-[10px] text-on-surface-variant/60">{review.time}</p>
                </td>
                <td className="px-lg py-lg align-top text-center">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    review.status === 'Ditampilkan' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-surface-container-high text-on-surface-variant border-outline-variant/30'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${review.status === 'Ditampilkan' ? 'bg-green-500' : 'bg-outline'}`}></span>
                    {review.status}
                  </span>
                </td>
                <td className="px-lg py-lg align-top text-right">
                  <div className="flex items-center justify-end gap-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg text-on-surface-variant transition-colors" title={review.status === 'Ditampilkan' ? 'Sembunyikan' : 'Tampilkan'}>
                      {review.status === 'Ditampilkan' ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <button className="p-2 hover:bg-error-container hover:text-error rounded-lg text-on-surface-variant transition-colors" title="Hapus">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-lg py-md bg-surface border-t border-outline-variant flex items-center justify-between">
          <p className="text-label-md text-on-surface-variant">Menampilkan 1-10 dari 1,284 ulasan</p>
          <div className="flex items-center gap-xs">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant text-outline hover:bg-surface-container-high transition-colors disabled:opacity-30" disabled><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-xs">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-xs font-bold">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-xs font-bold">3</button>
            <span className="px-1 text-outline">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-xs font-bold">129</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
