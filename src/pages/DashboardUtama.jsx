export default function DashboardUtama() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Inter, sans-serif', background: '#f5f3f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#003b5a', fontSize: '32px' }}>📊 Dashboard Pariwisata Baubau</h1>
      <p style={{ color: '#41474e', fontSize: '16px' }}>Dashboard berhasil dirender! 🎉</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '24px' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #c1c7cf' }}>
          <h3 style={{ color: '#003b5a' }}>42</h3>
          <p style={{ color: '#72787f' }}>Total Destinasi</p>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #c1c7cf' }}>
          <h3 style={{ color: '#745a27' }}>158</h3>
          <p style={{ color: '#72787f' }}>UMKM Terdaftar</p>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #c1c7cf' }}>
          <h3 style={{ color: '#003b5a' }}>12.450</h3>
          <p style={{ color: '#72787f' }}>Total Kunjungan</p>
        </div>
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #c1c7cf' }}>
          <h3 style={{ color: '#745a27' }}>8</h3>
          <p style={{ color: '#72787f' }}>Event Aktif</p>
        </div>
      </div>
    </div>
  );
}
