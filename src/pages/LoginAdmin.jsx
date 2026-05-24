import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Headphones, Book } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <main className="min-h-screen flex items-stretch bg-surface">
      {/* Left Panel - Branding */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-xl"
        style={{ backgroundColor: '#003b5a', backgroundImage: `radial-gradient(at 0% 0%, hsla(203, 85%, 25%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(203, 60%, 35%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(38, 90%, 65%, 0.3) 0, transparent 50%)` }}
      >
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83L40.153 16.133l4.133 4.133 11.304-11.304.83.83L45.118 21.095l4.133 4.133 10.474-10.474.83.83L50.083 26.06l4.133 4.133L60 24.382V25.212L54.215 31.025l4.133 4.133L60 33.473V34.303L58.347 35.987l1.653 1.653V38.47L58.347 40.153l1.653 1.653v.83L55.867 46.769l4.133 4.133V51.732l-4.133-4.133L50.083 53.284l4.133 4.133-.83.83-10.474-10.474-4.133 4.133 11.304 11.304-.83.83L40.153 60H39.323L25.212 45.889 11.101 60h-.83l15.304-15.304-4.133-4.133-11.304 11.304-.83-.83L21.095 45.118l-4.133-4.133-10.474 10.474-.83-.83L16.133 40.153 12 36.02l-4.133 4.133-7.867-7.867V31.458L5.785 25.643 1.652 21.51l-1.652 1.652V22.332L5.785 16.517 1.652 12.384 0 14.036V13.206L5.785 7.421 1.652 3.288 0 4.94V4.11L1.652 2.458 0 .805V0l54.627 0z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>

        <div className="relative z-10 max-w-lg text-center">
          <div className="mb-lg inline-flex items-center justify-center p-md bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-headline font-bold text-3xl">PB</span>
            </div>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-white mb-md tracking-tight">
            Digital Hub Pariwisata
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 leading-relaxed">
            Sistem Manajemen Terpadu Dinas Pariwisata Kota Baubau. Mengelola potensi budaya dan maritim untuk kemajuan berkelanjutan.
          </p>
        </div>
      </section>

      {/* Right Panel - Login Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center bg-surface p-container-margin relative">
        <div className="w-full max-w-[400px]">
          <header className="mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Pesona Baubau Digital Hub</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Silakan masuk untuk mengakses panel administrasi Dinas Pariwisata.
            </p>
          </header>

          <form className="space-y-lg" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-xs" htmlFor="email">
                Alamat Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  className="block w-full pl-xl pr-md py-md bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-outline-variant"
                  id="email"
                  name="email"
                  placeholder="nama@baubau.go.id"
                  required
                  type="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-xs">
              <div className="flex justify-between items-center px-xs">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                  Kata Sandi
                </label>
                <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#">
                  Lupa sandi?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  className="block w-full pl-xl pr-md py-md bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-outline-variant"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-md flex items-center text-outline-variant hover:text-outline transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center px-xs">
              <input
                className="h-4 w-4 text-primary focus:ring-primary border-outline-variant rounded"
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
              <label className="ml-sm font-label-md text-label-md text-on-surface-variant" htmlFor="remember-me">
                Tetap masuk selama 30 hari
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-container text-white font-title-lg text-title-lg py-md rounded-lg shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="animate-spin">⟳</span>
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <span>Masuk</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Help links */}
          <div className="mt-xl pt-lg border-t border-outline-variant flex flex-col items-center gap-md">
            <p className="font-label-md text-label-md text-on-surface-variant">Butuh bantuan teknis?</p>
            <div className="flex gap-md">
              <a className="flex items-center gap-xs px-md py-sm rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors font-label-md text-label-md text-on-surface" href="#">
                <Headphones size={16} />
                Hubungi Admin
              </a>
              <a className="flex items-center gap-xs px-md py-sm rounded-full bg-surface-container-high hover:bg-surface-container-highest transition-colors font-label-md text-label-md text-on-surface" href="#">
                <Book size={16} />
                Panduan
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-xl text-center">
            <p className="font-label-md text-label-md text-on-surface-variant/60">
              © 2024 CV Sarjana Komputer. All rights reserved.
            </p>
            <p className="font-label-md text-label-md text-on-surface-variant/40 mt-xs">
              Versi Sistem 2.4.0-Stable
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
