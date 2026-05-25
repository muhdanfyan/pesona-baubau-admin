import { Landmark, ShoppingBag, Users, Calendar } from 'lucide-react';

export default function DashboardUtama() {
  const stats = [
    { icon: Landmark, label: 'Total Destinasi', value: '42 Objek', trend: '+4%', color: '#003b5a', bg: 'rgba(0,59,90,0.1)' },
    { icon: ShoppingBag, label: 'UMKM Terdaftar', value: '158 Mitra', trend: '+12', color: '#745a27', bg: 'rgba(254,219,155,0.3)' },
    { icon: Users, label: 'Total Kunjungan', value: '12.450', trend: '-2%', color: '#003b5a', bg: 'rgba(203,230,255,0.3)' },
    { icon: Calendar, label: 'Event Aktif', value: '8 Event', trend: '3 Mendatang', color: '#745a27', bg: 'rgba(254,219,155,0.3)' },
  ];

  const weeklyData = [
    { day: 'Sen', value: 440 }, { day: 'Sel', value: 440 },
    { day: 'Rab', value: 600 }, { day: 'Kam', value: 720 },
    { day: 'Jum', value: 720 }, { day: 'Sab', value: 880 },
    { day: 'Min', value: 960 },
  ];

  const maxVal = Math.max(...weeklyData.map(d => d.value));

  const popularDest = [
    { name: 'Benteng Keraton Buton', views: '4.2k', percent: 85 },
    { name: 'Pantai Nirwana', views: '3.1k', percent: 65 },
    { name: 'Hutan Pinus Samparona', views: '2.8k', percent: 58 },
    { name: 'Gua Lakasa', views: '1.9k', percent: 42 },
    { name: 'Masjid Agung Keraton', views: '1.2k', percent: 25 },
  ];

  const activities = [
    { time: '10:45', activity: 'Verifikasi UMKM Kedai Kopi Buton', category: 'UMKM', status: 'Selesai' },
    { time: '09:12', activity: 'Update Jadwal Event Festival Keraton', category: 'Event', status: 'Selesai' },
    { time: '08:30', activity: 'Laporan Kerusakan Lampu Taman Nirwana', category: 'Destinasi', status: 'Diproses' },
    { time: 'Kemarin', activity: 'Pengajuan Sertifikasi Desa Wisata', category: 'Administrasi', status: 'Selesai' },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px'}}>
        <div>
          <h2 style={{fontSize: '24px', fontWeight: 600, color: '#003b5a', margin: 0}}>Ringkasan Pariwisata</h2>
          <p style={{color: '#41474e', margin: '4px 0 0'}}>Data terkini operasional pariwisata Kota Baubau</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px'}}>
        {stats.map((s, i) => (
          <div key={i} style={{background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e4e2df', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{width: '48px', height: '48px', borderRadius: '8px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <s.icon size={24} color={s.color} />
              </div>
              <div>
                <p style={{color: '#72787f', fontSize: '12px', margin: 0}}>{s.label}</p>
                <p style={{fontSize: '20px', fontWeight: 600, color: '#003b5a', margin: '4px 0 0'}}>{s.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '24px'}}>
        {/* Bar chart */}
        <div style={{background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e4e2df', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
          <h3 style={{fontSize: '18px', fontWeight: 600, color: '#003b5a', margin: '0 0 16px'}}>Kunjungan 7 Hari</h3>
          <div style={{display: 'flex', alignItems: 'flex-end', gap: '8px', height: '200px', padding: '8px 0'}}>
            {weeklyData.map((d, i) => (
              <div key={i} style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '32px', background: d.day === 'Sab' || d.day === 'Min' ? '#745a27' : '#003b5a', borderRadius: '6px 6px 0 0', height: `${(d.value / maxVal) * 100}%`, minHeight: '20px', transition: 'height 0.3s'}}></div>
                <span style={{fontSize: '11px', color: '#72787f', marginTop: '6px'}}>{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Destinasi Populer */}
        <div style={{background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e4e2df', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
          <h3 style={{fontSize: '18px', fontWeight: 600, color: '#003b5a', margin: '0 0 16px'}}>Destinasi Terpopuler</h3>
          {popularDest.map((d, i) => (
            <div key={i} style={{marginBottom: '12px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px'}}>
                <span>{d.name}</span>
                <span style={{color: '#003b5a'}}>{d.views}</span>
              </div>
              <div style={{background: '#e4e2df', borderRadius: '10px', height: '8px', overflow: 'hidden'}}>
                <div style={{background: '#003b5a', borderRadius: '10px', height: '100%', width: `${d.percent}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Table */}
      <div style={{background: '#fff', borderRadius: '12px', border: '1px solid #e4e2df', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', overflow: 'hidden'}}>
        <div style={{padding: '16px 24px', borderBottom: '1px solid #e4e2df', display: 'flex', justifyContent: 'space-between'}}>
          <h3 style={{fontSize: '16px', fontWeight: 600, color: '#003b5a', margin: 0}}>Aktivitas Terbaru</h3>
        </div>
        <table style={{width: '100%', borderCollapse: 'collapse'}}>
          <thead>
            <tr style={{background: '#efeeeb', fontSize: '12px', color: '#41474e'}}>
              <th style={{padding: '12px 24px', textAlign: 'left'}}>Waktu</th>
              <th style={{padding: '12px 24px', textAlign: 'left'}}>Aktivitas</th>
              <th style={{padding: '12px 24px', textAlign: 'left'}}>Kategori</th>
              <th style={{padding: '12px 24px', textAlign: 'left'}}>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a, i) => (
              <tr key={i} style={{borderBottom: '1px solid #e4e2df', fontSize: '14px'}}>
                <td style={{padding: '12px 24px', color: '#41474e'}}>{a.time}</td>
                <td style={{padding: '12px 24px'}}>{a.activity}</td>
                <td style={{padding: '12px 24px'}}>
                  <span style={{background: a.category === 'UMKM' ? '#fedb9b' : a.category === 'Event' ? '#003b5a' : '#e4e2df', color: a.category === 'Event' ? '#fff' : '#41474e', padding: '2px 10px', borderRadius: '12px', fontSize: '12px'}}>{a.category}</span>
                </td>
                <td style={{padding: '12px 24px', color: a.status === 'Selesai' ? '#2e7d32' : '#f57f17'}}>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
