import { Landmark, ShoppingBag, Users, Calendar, Download, CalendarDays } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatCard from '../components/StatCard';

const weeklyData = [
  { day: 'Sen', domestik: 320, mancanegara: 120 },
  { day: 'Sel', domestik: 280, mancanegara: 160 },
  { day: 'Rab', domestik: 400, mancanegara: 200 },
  { day: 'Kam', domestik: 480, mancanegara: 240 },
  { day: 'Jum', domestik: 440, mancanegara: 280 },
  { day: 'Sab', domestik: 520, mancanegara: 360 },
  { day: 'Min', domestik: 560, mancanegara: 400 },
];

const popularDestinations = [
  { name: 'Benteng Keraton Buton', views: '4.2k', percent: 85 },
  { name: 'Pantai Nirwana', views: '3.1k', percent: 65 },
  { name: 'Hutan Pinus Samparona', views: '2.8k', percent: 58 },
  { name: 'Gua Lakasa', views: '1.9k', percent: 42 },
  { name: 'Masjid Agung Keraton', views: '1.2k', percent: 25 },
];

const activities = [
  { time: '10:45 WIB', activity: 'Verifikasi UMKM Kedai Kopi Buton', category: 'UMKM', status: 'Selesai', statusColor: 'bg-green-500', officer: 'Admin 01' },
  { time: '09:12 WIB', activity: 'Update Jadwal Event Festival Keraton', category: 'Event', status: 'Selesai', statusColor: 'bg-green-500', officer: 'Admin 02' },
  { time: '08:30 WIB', activity: 'Laporan Kerusakan Lampu Taman Nirwana', category: 'Destinasi', status: 'Diproses', statusColor: 'bg-yellow-500', officer: 'Admin 01' },
  { time: 'Kemarin, 16:20', activity: 'Pengajuan Sertifikasi Desa Wisata', category: 'Administrasi', status: 'Selesai', statusColor: 'bg-green-500', officer: 'Admin 04' },
];

export default function DashboardUtama() {
  return (
    <section className="space-y-lg">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Ringkasan Pariwisata</h2>
          <p className="text-on-surface-variant">Data terkini operasional pariwisata Kota Baubau, Sulawesi Tenggara.</p>
        </div>
        <div className="flex gap-sm">
          <button className="px-md py-sm bg-surface-container-highest border border-outline-variant rounded-lg flex items-center gap-sm hover:bg-surface-container-high transition-colors">
            <CalendarDays size={16} />
            <span className="text-body-md font-medium">7 Hari Terakhir</span>
          </button>
          <button className="px-md py-sm bg-primary text-on-primary rounded-lg flex items-center gap-sm hover:opacity-90 shadow-sm transition-all active:scale-95">
            <Download size={16} />
            <span className="text-body-md font-medium">Unduh Laporan</span>
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        <StatCard icon={Landmark} label="Total Destinasi" value="42 Objek" trend="+4% bln ini" iconBg="bg-primary/10" bgColor="text-primary" />
        <StatCard icon={ShoppingBag} label="UMKM Terdaftar" value="158 Mitra" trend="+12 UMKM" iconBg="bg-secondary-container/30" bgColor="text-secondary" />
        <StatCard icon={Users} label="Total Kunjungan" value="12.450" trend="-2% mg ini" iconBg="bg-primary-fixed/30" bgColor="text-primary" />
        <StatCard icon={Calendar} label="Event Aktif" value="8 Event" trend="3 Mendatang" iconBg="bg-secondary-container/30" bgColor="text-secondary" />
      </div>

      {/* Visual Data Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Line Chart Card */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-xl rounded-xl custom-shadow border border-surface-container-high">
          <div className="flex justify-between items-center mb-xl">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Kunjungan 7 Hari</h3>
              <p className="text-on-surface-variant text-sm">Tren kedatangan turis di pos utama</p>
            </div>
            <div className="flex gap-sm">
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-xs text-on-surface-variant">Domestik</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <span className="text-xs text-on-surface-variant">Mancanegara</span>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e4e2df" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#72787f' }} />
                <YAxis tick={{ fontSize: 12, fill: '#72787f' }} />
                <Tooltip />
                <Line type="monotone" dataKey="domestik" stroke="#003b5a" strokeWidth={2} dot={{ fill: '#003b5a' }} />
                <Line type="monotone" dataKey="mancanegara" stroke="#745a27" strokeWidth={2} dot={{ fill: '#745a27' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Card */}
        <div className="bg-surface-container-lowest p-xl rounded-xl custom-shadow border border-surface-container-high">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-xl">Destinasi Terpopuler</h3>
          <div className="space-y-lg">
            {popularDestinations.map((dest) => (
              <div key={dest.name} className="space-y-xs">
                <div className="flex justify-between text-xs font-semibold">
                  <span>{dest.name}</span>
                  <span className="text-primary">{dest.views} view</span>
                </div>
                <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${dest.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-xl p-md bg-secondary-container/10 border border-secondary-container/20 rounded-lg">
            <div className="flex items-center gap-sm">
              <span className="text-secondary font-bold text-sm">⟱</span>
              <p className="text-xs text-on-secondary-container font-medium">
                Benteng Keraton mendominasi 42% total kunjungan bulan ini.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Table */}
      <div className="bg-surface-container-lowest rounded-xl custom-shadow border border-surface-container-high overflow-hidden">
        <div className="p-xl border-b border-surface-container-high flex justify-between items-center">
          <h3 className="font-headline-sm text-headline-sm text-primary">Aktivitas Terbaru</h3>
          <button className="text-primary text-sm font-semibold hover:underline">Lihat Semua</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container text-on-surface-variant text-label-md">
                <th className="px-xl py-md font-semibold">Waktu</th>
                <th className="px-xl py-md font-semibold">Aktivitas</th>
                <th className="px-xl py-md font-semibold">Kategori</th>
                <th className="px-xl py-md font-semibold">Status</th>
                <th className="px-xl py-md font-semibold">Petugas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high text-body-md">
              {activities.map((act, i) => (
                <tr key={i} className="hover:bg-surface-container/30 transition-colors">
                  <td className="px-xl py-md text-on-surface-variant">{act.time}</td>
                  <td className="px-xl py-md font-medium">{act.activity}</td>
                  <td className="px-xl py-md">
                    <span className={`px-sm py-1 rounded-full text-xs ${
                      act.category === 'UMKM' ? 'bg-secondary-container/20 text-on-secondary-container' :
                      act.category === 'Event' ? 'bg-primary/10 text-primary' :
                      act.category === 'Destinasi' ? 'bg-error-container/20 text-error' :
                      'bg-surface-container-highest text-on-surface-variant'
                    }`}>
                      {act.category}
                    </span>
                  </td>
                  <td className="px-xl py-md">
                    <div className="flex items-center gap-xs">
                      <span className={`w-2 h-2 rounded-full ${act.statusColor}`}></span>
                      <span className="text-xs">{act.status}</span>
                    </div>
                  </td>
                  <td className="px-xl py-md">{act.officer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
