# Luzins Academy Indonesia - Landing Page

Luzins Academy Indonesia adalah platform pelatihan public speaking profesional yang menawarkan kursus sertifikasi untuk meningkatkan kemampuan presentasi dan komunikasi publik. Website ini adalah landing page utama untuk mempromosikan program pelatihan dan membantu calon peserta memahami nilai yang ditawarkan.

## 🎯 Tentang Proyek

Luzins Academy Indonesia dipimpin oleh **Coach Ibnu Jabir** (Muhammad Andrian Jabir, S.Pd., S.T., C.ODS., C.MT.) dengan pengalaman lebih dari 9 tahun di bidang public speaking dan komunikasi profesional. Platform ini menyediakan pelatihan offline, online, dan seminar korporat dengan materi berkualitas tinggi dan praktik langsung.

## ✨ Fitur Utama

### 1. **Hero Section**
- Headline yang menarik dengan call-to-action
- Profil trainer dengan kredensial
- Stat cards menampilkan pengalaman dan sertifikasi

### 2. **Problem & Solution Sections**
- Identifikasi masalah yang dihadapi target audiens
- Menampilkan 6 benefit/outcome yang akan dicapai peserta
- Grid layout responsif dengan animasi scroll

### 3. **Training Package**
- Informasi harga dengan promo menarik
- Detail benefit paket pelatihan
- Call-to-action untuk konsultasi WhatsApp

### 4. **Certificate & Documentation Gallery**
- Showcase sertifikat dari alumni
- Galeri foto dokumentasi training (offline & online)
- Modal preview dengan klik-to-zoom
- Support keyboard (ESC untuk menutup)

### 5. **Video Gallery**
- 4 video tutorial dari YouTube
- Embedded player modal
- Support keyboard (ESC untuk menutup)

### 6. **Materials & Trainer Section**
- 6 modul pelatihan utama
- Profil lengkap trainer dengan kredensial
- Partner/trusted organizations

### 7. **Testimonials & FAQ**
- Alumni testimonials dengan rating
- FAQ accordion untuk pertanyaan umum
- Desain modern dengan animasi smooth

### 8. **Scroll Animations**
- Fade-in dan slide-up animations
- Trigger otomatis ketika section masuk viewport
- Intersection Observer API untuk performa optimal

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18 + TypeScript |
| **Build Tool** | Vite (ultra-fast bundler) |
| **Styling** | Tailwind CSS v4 |
| **Routing** | TanStack Router (file-based) |
| **Component Library** | shadcn/ui (accessible components) |
| **Icons** | Lucide React |
| **Carousel** | Embla Carousel React |
| **Runtime** | Bun (package manager) |

## 📦 Dependencies Utama

```json
{
  "@tanstack/react-router": "^1.60.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "tailwindcss": "^4.0.0",
  "embla-carousel-react": "^7.0.0",
  "lucide-react": "^0.263.0",
  "@radix-ui/react-accordion": "^1.0.4",
  "@radix-ui/react-dialog": "^1.1.1"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ atau Bun 1.0+
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/Webekspres/luzins-academy.git
cd luzins-academy

# Install dependencies
bun install
# atau
npm install
```

### Development

```bash
# Start development server
bun dev
# atau
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### Production Build

```bash
# Build untuk production
bun run build
# atau
npm run build

# Preview build
bun run preview
# atau
npm run preview
```

## 📁 Project Structure

```
luzinsacademy/
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── hero/
│   │   │   ├── problem-section/
│   │   │   ├── benefit-section/
│   │   │   ├── package-section/
│   │   │   ├── certificate-section/
│   │   │   ├── materials-section/
│   │   │   ├── trainer-profile/
│   │   │   ├── documentation-section/
│   │   │   ├── video-section/
│   │   │   ├── testimonial-section/
│   │   │   ├── faq-section/
│   │   │   ├── trust-section/
│   │   │   └── final-cta/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── image-preview.tsx
│   │   │   └── ... (20+ components)
│   │   └── navbar/
│   ├── hooks/
│   │   └── use-scroll-animation.tsx  # Custom animation hook
│   ├── routes/                # TanStack Router routes
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── assets/                # Static assets
│   │   ├── documentations/    # Training photos
│   │   └── ... (images, videos)
│   ├── styles.css             # Global styles
│   ├── router.tsx
│   ├── server.ts
│   └── start.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🎨 Fitur Desain

### Animations
- **Scroll Trigger**: Fade-in dan slide-up animations saat element masuk viewport
- **Hover Effects**: Scale, translate, dan border color changes
- **Transitions**: Smooth 300ms transitions di semua interactive elements
- **Modal Animations**: Zoom effect untuk image preview dan video player

### Responsive Design
- **Mobile-First Approach**: Optimized untuk semua ukuran layar
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grid**: Auto-adjusting grid untuk different screen sizes

### Color Scheme
- **Primary**: Red gradient (#EF4444 family)
- **Surface**: Dark background dengan accent colors
- **Typography**: Poppins (body) + Oswald (headings)

## 🔧 Konfigurasi

### Tailwind CSS v4
Menggunakan syntax terbaru Tailwind v4:
```css
@import "tailwindcss";

@theme {
  --color-primary: #EF4444;
  --color-surface: #0F172A;
}
```

### Vite Configuration
- Hot Module Reloading (HMR) untuk development
- Optimized code splitting
- CSS minification dan optimization

## 📝 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **ESC** | Close image preview modal (Documentation & Certificate sections) |
| **ESC** | Close video player modal (Video section) |

## 🔐 Environment Variables

Saat ini tidak ada environment variables yang diperlukan. Jika diperlukan di masa depan, tambahkan ke file `.env`:

```env
VITE_API_BASE_URL=https://api.example.com
```

## 📊 Performance Optimization

- **Lazy Loading**: Images dan videos di-load secara lazy untuk performa lebih cepat
- **Code Splitting**: Routes di-split otomatis oleh TanStack Router
- **CSS Optimization**: Tailwind purge hanya utility classes yang digunakan
- **Image Optimization**: Using native image formats (JPEG, PNG) dengan compression

## 🐛 Troubleshooting

### CSS Import Error
Jika terjadi error pada CSS imports untuk external resources (Google Fonts, dll):
- External URLs harus ditempatkan di HTML head (`__root.tsx`)
- Bukan di CSS imports (`styles.css`)

### Build Error: "Module not found"
```bash
# Clear node_modules dan reinstall
rm -rf node_modules
bun install
```

### Video tidak autoplay di mobile
YouTube embeds memiliki restrictions di mobile. Full-screen mode biasanya required.

## 📚 Dokumentasi Komponen

### Custom Hooks

#### `useScrollAnimation()`
Hook untuk trigger animations saat element scroll into view.

```tsx
const animation = useScrollAnimation();

return (
  <section ref={animation.ref} className={`... ${animation.className}`}>
    Content
  </section>
);
```

Returns:
- `ref`: Ref untuk attach ke element
- `isVisible`: Boolean state
- `className`: Animation classes

### Reusable Components

#### `ImagePreview`
Modal untuk preview gambar dengan zoom effect.

```tsx
import { ImagePreview } from "@/components/ui/image-preview";

const [preview, setPreview] = useState(null);

return (
  <>
    <button onClick={() => setPreview({src, alt, rect})}>
      View Image
    </button>
    {preview && <ImagePreview image={preview} onClose={() => setPreview(null)} />}
  </>
);
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod --dir=dist
```

### Custom Server
```bash
bun run build
# Upload dist/ folder ke server
```

## 📞 Contact & Support

**Luzins Academy Indonesia**
- Email: info@luzinsacademy.com
- WhatsApp: [Link di landing page]
- Website: [URL]
- Address: Bandung, Indonesia

**Coach Ibnu Jabir**
- Founder & CEO
- Pengalaman: 9+ tahun
- Sertifikasi: C.PS (Certified Professional Speaker)

## 📄 License

© 2026 Luzins Academy Indonesia. All rights reserved.

## 👥 Contributors

- **Coach Ibnu Jabir** - Founder & Trainer
- **Development Team** - Design & Development

---

**Last Updated**: June 2, 2026

Untuk pertanyaan atau saran, silakan hubungi tim Luzins Academy Indonesia melalui WhatsApp atau email.
