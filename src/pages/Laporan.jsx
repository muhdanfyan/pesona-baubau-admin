import { useState } from 'react';
import { Download, Search, ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', kunjungan: 1200, wisatawan: 800 }, { month: 'Feb', kunjungan: 1400, wisatawan: 950 },
  { month: 'Mar', kunjungan: 1800, wisatawan: 1100 }, { month: 'Apr', kunjungan: 1600, wisatawan: 1050 },
  { month: 'Mei', kunjungan: 2100, wisatawan: 1300 }, { month: 'Jun', kunjungan: 2400, wisatawan: 1500 },
];

const categoryData = [
  { name: 'Alam', value: 35 }, { name: 'Sejarah', value: 28 }, { name: 'Pantai', value: 20 }, { name: 'Religi', value: 12 }, { name: 'Lainnya', value: 5 },
];

const COLORS = ['#003b5a', '#1a5276', '#745a27', '#fedb9b', '#c1c7cf'];

export default function Laporan() {
  const [period, setPeriod] = useState('Bulanan');
  const [activeTab, setActiveTab] = useState('kunjungan');

  return (
    <div className="space-y-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-lg">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Laporan Pariwisata</h2>
          <p className="text-on-surface-variant">Analisis data kunjungan, destinasi, dan UMKM Kota Baubau</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="appearance-none bg-white border border-outline-variant rounded-lg px-md py-sm pr-10 text-body-md font-medium cursor-pointer focus:ring-2 focus:ring-primary/20"
            >
              <option>Bulanan</option>
              <option>Triwulan</option>
              <option>Tahunan</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">▼</span>
          </div>
          <button className="flex items-center gap-sm bg-primary text-white px-md py-sm rounded-lg font-medium hover:opacity-90 transition-all shadow-sm">
            <Download size={16} /> Export PDF
          </button>
          <button className="flex items-center gap-sm bg-white border border-outline-variant text-primary px-md py-sm rounded-lg font-medium hover:bg-surface-container transition-all">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-surface border-b border-outline-variant flex gap-lg">
        {[
          { key: 'kunjungan', label: 'Kunjungan' },
          { key: 'destinasi', label: 'Destinasi' },
          { key: 'umkm', label: 'UMKM' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-xl py-md font-medium transition-all border-b-2 ${
              activeTab === tab.key ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Kunjungan Tab */}
      {activeTab === 'kunjungan' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {/* Line Chart */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-xl rounded-xl custom-shadow border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-lg">Tren Kunjungan Wisatawan</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e2df" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#72787f' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#72787f' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="kunjungan" stroke="#003b5a" strokeWidth={2} name="Kunjungan" />
                  <Line type="monotone" dataKey="wisatawan" stroke="#745a27" strokeWidth={2} name="Wisatawan" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="space-y-lg">
            <div className="bg-surface-container-lowest p-xl rounded-xl custom-shadow border border-outline-variant">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-lg">Ringkasan</h3>
              <div className="space-y-lg">
                {[
                  { label: 'Total Kunjungan', value: '12,450', change: '+15%', color: 'text-green-600' },
                  { label: 'Wisatawan Mancanegara', value: '1,890', change: '+8%', color: 'text-green-600' },
                  { label: 'Wisatawan Domestik', value: '10,560', change: '+18%', color: 'text-green-600' },
                  { label: 'Rata-rata Per Bulan', value: '2,075', change: '+12%', color: 'text-green-600' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-lg border-b border-outline-variant/30 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm text-on-surface-variant">{item.label}</p>
                      <p className="font-bold text-lg text-on-surface">{item.value}</p>
                    </div>
                    <span className={`text-xs font-bold ${item.color}`}>{item.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Destinasi Tab */}
      {activeTab === 'destinasi' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          <div className="bg-surface-container-lowest p-xl rounded-xl custom-shadow border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-lg">Distribusi Kategori Destinasi</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-xl rounded-xl custom-shadow border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-lg">Destinasi Terpopuler</h3>
            {[
              { name: 'Benteng Keraton Buton', visits: '4,200', percent: 85 },
              { name: 'Pantai Nirwana', visits: '3,100', percent: 65 },
              { name: 'Hutan Pinus Samparona', visits: '2,800', percent: 58 },
              { name: 'Gua Lakasa', visits: '1,900', percent: 42 },
              { name: 'Masjid Agung Keraton', visits: '1,200', percent: 25 },
            ].map((dest, i) => (
              <div key={i} className="mb-lg">
                <div className="flex justify-between text-sm mb-xs">
                  <span className="font-medium">{dest.name}</span>
                  <span className="text-primary font-bold">{dest.visits}</span>
                </div>
                <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${dest.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* UMKM Tab */}
      {activeTab === 'umkm' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          <div className="bg-surface-container-lowest p-xl rounded-xl custom-shadow border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-lg">Pertumbuhan UMKM</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { month: 'Jul', baru: 45, total: 1100 },
                  { month: 'Agu', baru: 52, total: 1152 },
                  { month: 'Sep', baru: 48, total: 1200 },
                  { month: 'Okt', baru: 63, total: 1248 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e2df" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#72787f' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#72787f' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="baru" fill="#003b5a" name="UMKM Baru" />
                  <Bar dataKey="total" fill="#745a27" name="Total UMKM" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-xl rounded-xl custom-shadow border border-outline-variant">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-lg">Kategori UMKM</h3>
            <div className="space-y-lg">
              {[
                { label: 'Kuliner', value: 520, color: 'bg-primary' },
                { label: 'Kerajinan', value: 310, color: 'bg-primary-container' },
                { label: 'Jasa', value: 248, color: 'bg-secondary' },
                { label: 'Lainnya', value: 170, color: 'bg-secondary-container' },
              ].map((cat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-xs">
                    <span className="font-medium">{cat.label}</span>
                    <span className="text-on-surface-variant">{cat.value} UMKM</span>
                  </div>
                  <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${cat.color}`} style={{ width: `${(cat.value / 1248) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
