import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronDown,
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  ShieldCheck,
  Star,
  Quote,
  Droplet,
  Truck,
  History,
  Info,
  Map,
  HelpCircle,
  ShoppingCart,
  Camera,
  Zap,
  PackagePlus,
  RefreshCw
} from 'lucide-react';

const pageData = {
  name: "HydroPure Water",
  phone: "6289529605601",
  address: "Jl. Tjilik Riwut Km. 5, Palangka Raya, Kalteng.",
  title: "Depot Air Minum Isi Ulang Higienis & Segar",
  description: "Solusi air minum bersih, sehat, dan segar untuk keluarga Anda. Menggunakan teknologi Reverse Osmosis (RO) dan sterilisasi Ultra Violet (UV). Siap antar sampai ke depan pintu rumah Anda!",
  profileImg: "./images/logo.png", 
  heroImg: "./images/hero.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id/",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Palangka+Raya+City,+Central+Kalimantan/", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  highlights: [
    { text: "Buka Setiap Hari", icon: "Clock" },
    { text: "Gratis Antar", icon: "Truck" },
    { text: "100% Higienis", icon: "ShieldCheck" }
  ],
  history: [
    { year: "2019", title: "Awal Berdiri", desc: "Dimulai dari sebuah ruko kecil untuk memenuhi kebutuhan air bersih warga sekitar." },
    { year: "2021", title: "Pembaruan Mesin", desc: "Upgrade sistem penyaringan ke Reverse Osmosis (RO) berkapasitas besar." },
    { year: "2023 - Sekarang", title: "Layanan Pesan Antar", desc: "Memiliki armada sendiri untuk melayani pesan antar di seluruh area kota." }
  ],
  catalog: [
    { name: "Isi Ulang RO (Biasa)", price: "Rp 6.000", desc: "Air minum segar dengan penyaringan standar RO.", icon: "Droplet" },
    { name: "Isi Ulang Bio Energi", price: "Rp 8.000", desc: "Air minum dengan tambahan mineral bio energi sehat.", icon: "Zap" },
    { name: "Galon Baru + Isi", price: "Rp 50.000", desc: "Pembelian galon PET baru berkualitas food grade plus isi.", icon: "PackagePlus" },
    { name: "Tukar Tambah Galon", price: "Rp 35.000", desc: "Tukar galon lama Anda dengan galon siap pakai milik kami.", icon: "RefreshCw" }
  ],
  gallery: [
    { title: "Stok Galon Bersih", desc: "Ratusan galon steril siap pakai", image: "./images/galeri-1.webp" },
    { title: "Sistem Filtrasi RO & UV", desc: "Mesin canggih standar higienis", image: "./images/galeri-2.webp" },
    { title: "Penyimpanan Galon", desc: "Ruang penyimpanan bersih & tertata", image: "./images/galeri-3.webp" },
    { title: "Pelayanan Langsung", desc: "Pelayanan cepat & ramah di depot", image: "./images/galeri-4.webp" }
  ],
  faqs: [
    { q: "Berapa jam operasional HydroPure?", a: "Kami buka setiap hari mulai pukul 07.00 pagi hingga 21.00 malam." },
    { q: "Apakah ada minimal pesanan untuk pesan antar?", a: "Minimal pemesanan untuk layanan antar gratis adalah 2 galon (radius maks 5km)." },
    { q: "Bagaimana proses sterilisasi galon di sini?", a: "Galon dicuci menggunakan sikat mesin otomatis, dibilas berulang kali, dan disterilkan dengan sinar UV sebelum diisi." },
    { q: "Bisa bayar pakai transfer/e-wallet?", a: "Tentu bisa! Kurir kami menyediakan QRIS dan menerima transfer Bank/OVO/Dana." }
  ],
  testimonials: [
    { name: "Ibu Ratna", rating: 5, text: "Airnya segar banget tidak berbau sama sekali. Pengiriman juga super cepat, baru WA 15 menit kurir udah sampai." },
    { name: "Pak Dedi", rating: 5, text: "Langganan sejak tahun 2020. Kualitas air selalu terjaga, galonnya juga selalu dibersihkan dengan sangat baik." },
    { name: "Sarah Alika", rating: 4, text: "Sangat membantu buat anak kosan. Tinggal WA, air galon langsung diantar sampai depan kamar. Praktis!" }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const address = formData.get('address');
    const type = formData.get('type');
    const amount = formData.get('amount');
    const notes = formData.get('notes');
    
    const waText = `Halo admin ${pageData.name}, saya mau pesan air galon.%0A%0A*Nama:* ${name}%0A*Alamat:* ${address}%0A*Pesanan:* ${type} (${amount} Galon)%0A*Catatan:* ${notes}%0A%0AMohon info ketersediaan kurir, terima kasih!`;
    const waUrl = `https://wa.me/${pageData.phone}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #F0F9FF;
          color: #0F172A;
          margin: 0;
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-10 px-6 bg-[#0284c7]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-black/20 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-black/40 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] via-[#0284c7]/75 to-black/30"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-24">
            <div className="w-28 h-28 rounded-full p-2 bg-white/95 backdrop-blur-md mb-5 shadow-2xl border-2 border-sky-300/40 flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-contain"
              />
            </div>

            <div className="flex items-center gap-2 mb-2 bg-sky-900/40 backdrop-blur-sm px-3 py-1 rounded-full border border-sky-400/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">Buka & Siap Antar</span>
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-sky-100 font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3 w-full mb-6">
              {pageData.highlights.map((hlt, idx) => (
                <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-xs text-white font-medium shadow-sm">
                  {hlt.icon === 'Clock' && <Clock size={14} className="text-sky-300" />}
                  {hlt.icon === 'Truck' && <Truck size={14} className="text-sky-300" />}
                  {hlt.icon === 'ShieldCheck' && <ShieldCheck size={14} className="text-sky-300" />}
                  {hlt.text}
                </span>
              ))}
            </div>

            <div className="w-full max-w-[85%] flex flex-col gap-3 mb-8">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium w-full"
              >
                <MapPin size={18} /> Lokasi Depot
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-[85%] py-4 bg-white text-[#0c4a6e] rounded-2xl font-bold text-sm uppercase tracking-wider hover:bg-sky-50 transition-all shadow-xl hover:-translate-y-1"
            >
              <Droplet size={18} className="fill-[#0ea5e9] text-[#0ea5e9]" />
              Pesan Air Sekarang
            </button>
          </div>
        </section>

        {/* TENTANG KAMI */}
        <section className="py-12 px-6 bg-white relative">
          <div className="flex items-center gap-2 mb-4">
            <Info className="text-[#0ea5e9]" size={24} />
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Tentang Kami</h2>
          </div>
          <div className="bg-sky-50 p-5 rounded-3xl border border-sky-100 shadow-sm relative overflow-hidden">
            <Droplet className="absolute -right-6 -bottom-6 text-sky-200/50 w-32 h-32 rotate-12" />
            <p className="text-slate-600 text-sm leading-relaxed relative z-10 font-medium">
              Kami adalah penyedia layanan isi ulang air galon modern yang mengedepankan kebersihan, kesehatan, dan pelayanan prima. Dengan sistem filtrasi berlapis dan kru yang berpengalaman, kami memastikan setiap tetes air yang sampai ke rumah Anda aman untuk dikonsumsi seluruh keluarga.
            </p>
          </div>
        </section>

        {/* SEJARAH / HISTORY */}
        <section className="pb-12 px-6 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <History className="text-[#0ea5e9]" size={24} />
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Perjalanan Kami</h2>
          </div>
          
          <div className="ml-3 border-l-2 border-sky-200 flex flex-col gap-6">
            {pageData.history.map((hist, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute w-4 h-4 bg-[#0ea5e9] rounded-full -left-[9px] top-1 border-4 border-white shadow-sm"></div>
                <h3 className="font-bold text-slate-900 text-base">{hist.title}</h3>
                <span className="text-sky-600 font-semibold text-xs mb-1 block">{hist.year}</span>
                <p className="text-slate-500 text-sm leading-relaxed">{hist.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KATALOG & HARGA */}
        <section className="py-12 px-6 bg-slate-50 border-y border-slate-200">
          <div className="flex flex-col mb-8 text-center items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 mb-3 text-[#0ea5e9]">
              <ShoppingCart size={24} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Katalog & Harga</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-[90%]">Pilih jenis air minum sesuai kebutuhan keluarga Anda dengan harga yang terjangkau.</p>
          </div>

          <div className="flex flex-col gap-3.5">
            {pageData.catalog.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex items-center gap-4 cursor-pointer group"
                onClick={scrollToForm}
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300 ${
                  item.icon === 'Droplet' ? 'bg-sky-50 text-sky-500 border border-sky-100 shadow-sm shadow-sky-100' :
                  item.icon === 'Zap' ? 'bg-amber-50 text-amber-500 border border-amber-100 shadow-sm shadow-amber-100' :
                  item.icon === 'PackagePlus' ? 'bg-emerald-50 text-emerald-500 border border-emerald-100 shadow-sm shadow-emerald-100' :
                  'bg-indigo-50 text-indigo-500 border border-indigo-100 shadow-sm shadow-indigo-100'
                }`}>
                  {item.icon === 'Droplet' && <Droplet size={26} className="fill-current text-sky-500" />}
                  {item.icon === 'Zap' && <Zap size={26} className="fill-current text-amber-500" />}
                  {item.icon === 'PackagePlus' && <PackagePlus size={26} className="text-emerald-500" />}
                  {item.icon === 'RefreshCw' && <RefreshCw size={26} className="text-indigo-500" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-extrabold text-slate-800 text-[15px] leading-snug group-hover:text-[#0ea5e9] transition-colors truncate">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="font-extrabold text-[#0ea5e9] text-[15px] tracking-tight">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 group-hover:bg-[#0ea5e9] group-hover:text-white px-3 py-2 rounded-xl transition-all shadow-sm">
                    Pesan
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALERI SUASANA DEPOT */}
        <section className="py-12 px-6 bg-white overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="text-[#0ea5e9]" size={24} />
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Galeri Depot</h2>
          </div>
          <p className="text-slate-500 text-sm mb-6">Melihat langsung fasilitas, kebersihan, dan teknologi pengolahan air minum di depot HydroPure Water.</p>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-6 px-6">
            {pageData.gallery.map((item, idx) => (
              <div 
                key={idx} 
                className="snap-center shrink-0 w-[280px] bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col group"
              >
                <div className="w-full h-44 overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white flex flex-col">
                  <h4 className="font-extrabold text-slate-800 text-[14px] leading-snug mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOKASI */}
        <section className="py-12 px-6 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <Map className="text-[#0ea5e9]" size={24} />
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Lokasi Depot</h2>
          </div>
          
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-2 overflow-hidden shadow-sm">
            <div className="w-full h-48 bg-slate-200 rounded-2xl relative overflow-hidden group">
              {/* Dummy Map Image */}
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=400" alt="Map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg animate-bounce text-[#0ea5e9]">
                <MapPin size={24} className="fill-current text-[#0ea5e9]" />
              </div>
            </div>
            
            <div className="p-4 mt-2 flex flex-col">
              <span className="font-bold text-slate-900 text-[15px] mb-1">HydroPure Pusat</span>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{pageData.address}</p>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-slate-100 text-slate-800 font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
              >
                <MapPin size={16} /> Buka di Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-12 px-6 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="text-[#0ea5e9]" size={24} />
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Tanya Jawab (FAQ)</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openFaqIndex === idx ? 'border-sky-300 bg-sky-50 shadow-sm' : 'border-slate-200 bg-white hover:border-sky-200'}`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-slate-800 text-sm pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${openFaqIndex === idx ? 'rotate-180 text-sky-600' : ''}`} />
                </button>
                <div className={`px-4 pb-4 text-sm text-slate-600 leading-relaxed transition-all duration-300 ${openFaqIndex === idx ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="py-12 px-6 bg-slate-900 text-white rounded-t-[2.5rem] mt-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="mb-8 flex flex-col items-center text-center">
            <Quote className="text-sky-400 mb-3" size={32} />
            <h2 className="text-2xl font-extrabold tracking-tight">Kata Pelanggan</h2>
            <p className="text-slate-400 text-sm mt-2">Kepuasan mereka adalah prioritas kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-slate-800/50 p-6 rounded-3xl border border-slate-700 backdrop-blur-sm flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[14px] font-bold text-white">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FORM PEMESANAN */}
        <section id="order-form" className="pt-10 pb-16 px-6 bg-slate-50 relative z-10">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-7 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 mb-6 text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Pesan Galon</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Isi form di bawah ini dan admin kami akan segera membalas via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-slate-500 ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Budi Santoso"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-slate-500 ml-1">Alamat Pengiriman</label>
                <textarea 
                  name="address" 
                  required
                  rows="2"
                  placeholder="Jl. Mawar No. 12, Patokan patung kuda"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-1.5 w-[60%]">
                  <label className="text-[12px] font-bold text-slate-500 ml-1">Jenis Pesanan</label>
                  <select 
                    name="type" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                  >
                    <option value="Isi Ulang RO">Isi Ulang RO</option>
                    <option value="Isi Ulang Bio Energi">Isi Ulang Bio Energi</option>
                    <option value="Beli Galon Baru + Isi">Beli Galon Baru + Isi</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5 w-[40%]">
                  <label className="text-[12px] font-bold text-slate-500 ml-1">Jml Galon</label>
                  <input 
                    type="number" 
                    name="amount" 
                    required
                    min="1"
                    defaultValue="2"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-bold text-slate-500 ml-1">Catatan (Opsional)</label>
                <input 
                  type="text" 
                  name="notes" 
                  placeholder="Cth: Galon kotor tolong disikat ekstra"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-3 bg-[#25D366] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b958] transition-colors shadow-md shadow-green-200"
              >
                Pesan via WhatsApp
                <MessageCircle size={20} className="fill-white" />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-4 pb-12 text-center flex flex-col items-center justify-center mx-6">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-md border-4 border-sky-50 flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-slate-800 text-base">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[11px] mt-8 font-medium">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-[#0ea5e9] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0ea5e9] backdrop-blur-xl border border-sky-400 rounded-2xl text-white shadow-[0_10px_30px_rgba(14,165,233,0.4)] hover:bg-[#0284c7] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-[15px] tracking-wide">Pesan Antar Sekarang</span>
            <div className="bg-white text-[#0ea5e9] p-2 rounded-xl shadow-sm">
              <Truck size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[72px] h-[72px] rounded-full border-2 border-white shadow-md mb-4 object-cover" />
              <h4 className="text-slate-900 font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-slate-500 text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}