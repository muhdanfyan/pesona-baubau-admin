import { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight, Eye, Edit, Trash2, Calendar, List, Search, X } from 'lucide-react';

const events = [
  { no: 1, name: 'Festival Buton Ke-10', date: '12 - 15 Okt 2023', location: 'Benteng Keraton Buton', status: 'Datang', icon: '🎭' },
  { no: 2, name: 'Pesta Adat Tutuia', date: '01 - 07 Okt 2023', location: 'Kecamatan Sorawolio', status: 'Aktif', icon: '🌊' },
  { no: 3, name: 'Lomba Perahu Tradisional', date: '20 - 22 Sep 2023', location: 'Pantai Kamali', status: 'Selesai', icon: '🛶' },
];

export default function KelolaEvent() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-lg max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Kelola Event Pariwisata</h2>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-secondary hover:bg-on-secondary-container text-white px-lg py-md rounded-lg flex items-center gap-sm transition-all shadow-md active:scale-95"
        >
          <Plus size={18} />
          <span className="font-title-lg">Tambah Event</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-surface border-b border-outline-variant flex mb-lg">
        <button
          onClick={() => setActiveTab('calendar')}
          className={`px-xl py-md flex items-center gap-sm transition-all ${
            activeTab === 'calendar' ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-on-surface-variant'
          }`}
        >
          <Calendar size={18} />
          Kalender
        </button>
        <button
          onClick={() => setActiveTab('list')}
          className={`px-xl py-md flex items-center gap-sm transition-all ${
            activeTab === 'list' ? 'text-secondary font-semibold border-b-2 border-secondary' : 'text-on-surface-variant'
          }`}
        >
          <List size={18} />
          Daftar
        </button>
      </div>

      {/* Calendar View */}
      {activeTab === 'calendar' && (
        <div className="grid grid-cols-12 gap-lg">
          <div className="col-span-12 md:col-span-4 bg-white p-lg rounded-xl shadow-sm border border-outline-variant">
            <div className="flex justify-between items-center mb-md">
              <h3 className="font-title-lg text-primary">Oktober 2023</h3>
              <div className="flex gap-xs">
                <button className="p-xs hover:bg-surface-container rounded-full"><ChevronLeft size={16} /></button>
                <button className="p-xs hover:bg-surface-container rounded-full"><ChevronRight size={16} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-y-md text-center text-label-md font-bold text-on-surface-variant mb-sm">
              <span>S</span><span>S</span><span>R</span><span>K</span><span>J</span><span>S</span><span>M</span>
            </div>
            <div className="grid grid-cols-7 gap-y-sm text-center text-body-md">
              {Array.from({ length: 16 }, (_, i) => i + 1).map((day) => (
                <span key={day} className={`py-sm font-bold ${
                  day === 7 ? 'bg-primary text-white rounded-full' :
                  day === 4 || day === 12 ? 'bg-secondary-container/30 text-secondary rounded-full' :
                  day <= 2 ? 'text-on-surface-variant/30' : ''
                }`}>{day}</span>
              ))}
            </div>
            <div className="mt-xl pt-lg border-t border-outline-variant">
              <p className="text-label-md font-bold mb-md uppercase tracking-wider text-on-surface-variant">Statistik Bulan Ini</p>
              <div className="flex items-center gap-md">
                <div className="bg-primary/10 p-md rounded-lg flex-1">
                  <p className="text-label-md text-primary">Total Event</p>
                  <p className="text-headline-sm font-bold text-primary">12</p>
                </div>
                <div className="bg-secondary/10 p-md rounded-lg flex-1">
                  <p className="text-label-md text-secondary">Akan Datang</p>
                  <p className="text-headline-sm font-bold text-secondary">5</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-lg">
            {events.slice(0, 2).map((event) => (
              <div key={event.no} className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-md transition-all group">
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary-container/20 flex items-center justify-center text-5xl">
                  {event.icon}
                  <span className={`absolute top-md right-md font-bold text-label-md px-md py-xs rounded-full ${
                    event.status === 'Datang' ? 'bg-secondary-container text-secondary' :
                    event.status === 'Aktif' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>{event.status}</span>
                </div>
                <div className="p-lg">
                  <p className="text-label-md text-secondary font-bold mb-xs">{event.date}</p>
                  <h4 className="font-title-lg text-primary mb-sm">{event.name}</h4>
                  <div className="flex items-center text-body-md text-on-surface-variant mb-md">
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="flex gap-sm">
                    <button className="flex-1 py-sm border border-outline text-primary rounded-lg text-body-md font-semibold hover:bg-surface-container transition-colors">Detail</button>
                    <button className="px-md py-sm bg-surface-container text-primary rounded-lg"><Edit size={18} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* List View */}
      {activeTab === 'list' && (
        <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-surface-container border-b border-outline-variant">
              <tr>
                <th className="px-lg py-md font-title-lg text-on-surface-variant text-body-md">No</th>
                <th className="px-lg py-md font-title-lg text-on-surface-variant text-body-md">Nama Event</th>
                <th className="px-lg py-md font-title-lg text-on-surface-variant text-body-md">Tanggal</th>
                <th className="px-lg py-md font-title-lg text-on-surface-variant text-body-md">Lokasi</th>
                <th className="px-lg py-md font-title-lg text-on-surface-variant text-body-md">Status</th>
                <th className="px-lg py-md font-title-lg text-on-surface-variant text-body-md">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {events.map((event) => (
                <tr key={event.no} className="hover:bg-surface-container-lowest transition-colors">
                  <td className="px-lg py-lg text-body-md">{event.no}</td>
                  <td className="px-lg py-lg">
                    <div className="flex items-center gap-md">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-lg">{event.icon}</div>
                      <span className="font-bold text-primary">{event.name}</span>
                    </div>
                  </td>
                  <td className="px-lg py-lg text-body-md">{event.date}</td>
                  <td className="px-lg py-lg text-body-md">{event.location}</td>
                  <td className="px-lg py-lg">
                    <span className={`font-bold text-label-md px-md py-xs rounded-full ${
                      event.status === 'Datang' ? 'bg-secondary-container text-secondary' :
                      event.status === 'Aktif' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-500'
                    }`}>{event.status}</span>
                  </td>
                  <td className="px-lg py-lg">
                    <div className="flex gap-sm">
                      <button className="p-xs text-primary hover:bg-primary/10 rounded-lg"><Eye size={18} /></button>
                      <button className="p-xs text-secondary hover:bg-secondary/10 rounded-lg"><Edit size={18} /></button>
                      <button className="p-xs text-error hover:bg-error/10 rounded-lg"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-lg" onClick={() => setModalOpen(false)}>
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container">
              <h3 className="font-headline-sm text-primary">Tambah Event Baru</h3>
              <button onClick={() => setModalOpen(false)} className="text-outline hover:text-error transition-colors"><X size={20} /></button>
            </div>
            <form className="p-lg grid grid-cols-2 gap-md">
              <div className="col-span-2">
                <label className="block text-label-md font-bold text-on-surface-variant mb-xs">Nama Event</label>
                <input className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-primary text-body-md" placeholder="Contoh: Festival Kuliner Pesisir" type="text" />
              </div>
              <div>
                <label className="block text-label-md font-bold text-on-surface-variant mb-xs">Rentang Tanggal</label>
                <input className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-primary text-body-md" placeholder="Pilih Tanggal" type="text" />
              </div>
              <div>
                <label className="block text-label-md font-bold text-on-surface-variant mb-xs">Lokasi</label>
                <input className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-primary text-body-md" placeholder="Nama Tempat" type="text" />
              </div>
              <div className="col-span-2">
                <label className="block text-label-md font-bold text-on-surface-variant mb-xs">Deskripsi Event</label>
                <textarea className="w-full px-md py-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-primary text-body-md" placeholder="Jelaskan detail event anda..." rows="3"></textarea>
              </div>
              <div className="col-span-2 flex justify-end gap-md mt-md pt-lg border-t border-outline-variant">
                <button className="px-lg py-md text-on-surface-variant font-bold hover:bg-surface-container rounded-lg transition-all" onClick={() => setModalOpen(false)} type="button">Batal</button>
                <button className="bg-primary text-white px-xl py-md rounded-lg font-bold shadow-md hover:bg-primary-container transition-all" type="submit">Simpan Event</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
