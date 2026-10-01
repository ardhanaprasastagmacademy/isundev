# DESIGN.md — IsenDev

> Design system dan visual direction untuk website IsenDev — Jasa Pembuatan Website di Banyuwangi.

---

## 1. Design Philosophy

IsenDev menggunakan pendekatan:

**Simple · Elegant · Premium · Modern · Trustworthy**

Website harus terlihat seperti perusahaan digital yang profesional dan serius, tetapi tidak terasa kaku atau terlalu korporat.

### Prinsip utama

1. **Simple over decorative**

   * Hindari dekorasi yang tidak memiliki fungsi.
   * Jangan memenuhi halaman dengan card, icon, gradient, atau shape.
   * Setiap elemen visual harus memiliki tujuan.

2. **Premium through restraint**

   * Premium tidak berarti banyak efek.
   * Gunakan whitespace yang cukup.
   * Gunakan tipografi yang kuat.
   * Gunakan warna secara terbatas.
   * Gunakan gambar berkualitas tinggi.

3. **Content first**

   * Headline dan informasi utama harus mudah dipahami.
   * Visual mendukung konten, bukan mengambil alih perhatian.

4. **Performance first**

   * Tidak menggunakan animasi berat.
   * Tidak menggunakan library animasi tambahan jika CSS sudah cukup.
   * Tidak menggunakan video background.
   * Tidak menggunakan background image berukuran sangat besar.
   * Tidak menggunakan carousel otomatis yang tidak diperlukan.

5. **Technology should feel invisible**

   * Pengunjung tidak perlu merasa sedang melihat "website template".
   * Hasil akhir harus terasa seperti website custom milik IsenDev.

---

# 2. Brand Character

IsenDev harus memiliki karakter:

* Profesional
* Modern
* Tenang
* Premium
* Minimalis
* Teknologi
* Human
* Terpercaya
* Tidak berlebihan

### Hindari karakter:

* Terlalu futuristik
* Terlalu neon
* Terlalu banyak gradient
* Terlalu banyak animasi
* Terlalu banyak glassmorphism
* Terlalu banyak card
* Terlalu banyak icon
* Terlalu banyak angka statistik
* Desain seperti template SaaS generik
* Tampilan "AI generated"

---

# 3. Color System

Gunakan kombinasi **Deep Navy + Warm Beige + Off White**.

Palet ini memberikan kesan teknologi sekaligus premium dan tidak terlalu dingin.

## Primary Colors

### Deep Navy

```css
--color-primary: #0B1F33;
```

Digunakan untuk:

* Navbar
* Hero
* Footer
* CTA utama
* Heading tertentu
* Background section penting

Deep Navy adalah identitas utama IsenDev.

---

### Warm Beige

```css
--color-accent: #D8C7A3;
```

Digunakan sebagai aksen premium.

Penggunaan:

* Button secondary
* Accent line
* Highlight text tertentu
* Border
* Badge
* Detail dekoratif kecil

Jangan menggunakan beige pada area yang terlalu luas jika mengurangi keterbacaan.

---

### Soft Cream

```css
--color-background: #F7F4ED;
```

Digunakan sebagai background utama beberapa section.

Tujuannya membuat website terasa lebih hangat dibanding website teknologi yang biasanya menggunakan putih murni.

---

### Pure White

```css
--color-white: #FFFFFF;
```

Digunakan untuk:

* Card
* Navbar ketika diperlukan
* Form
* Section tertentu
* Content area

---

### Charcoal

```css
--color-text: #20252B;
```

Digunakan sebagai warna body text.

---

### Muted Text

```css
--color-text-muted: #6B7280;
```

Digunakan untuk:

* Description
* Metadata
* Supporting text
* Blog information

---

### Border

```css
--color-border: #E6E0D5;
```

Border harus sangat subtle.

Jangan menggunakan border hitam pekat pada seluruh card.

---

## 4. Color Usage Ratio

Gunakan warna dengan pendekatan:

```text
60%  Soft Cream / White
25%  Deep Navy
10%  Charcoal / Muted
5%   Warm Beige
```

Beige adalah **accent**, bukan warna utama.

Jangan membuat website:

```text
Navy + Beige + Gold + Blue + Green + Purple
```

Terlalu banyak warna akan menghilangkan karakter premium.

---

# 5. Typography

## Font

Gunakan:

**Poppins**

Poppins digunakan untuk seluruh website.

```css
font-family: "Poppins", sans-serif;
```

Tidak perlu mencampur banyak font.

---

## Font Weight

Gunakan weight secara terbatas:

```text
400 — Regular
500 — Medium
600 — Semi Bold
700 — Bold
```

Hindari menggunakan terlalu banyak weight.

### Recommended usage

```text
400 → body text
500 → navigation / supporting text
600 → heading kecil / button
700 → hero heading / heading utama
```

---

# 6. Poppins Performance Strategy

Poppins tetap digunakan di seluruh website, tetapi implementasinya harus performance-first.

### Jangan

Memanggil banyak variasi Google Fonts:

```text
300
400
500
600
700
800
900
italic
```

### Gunakan hanya

```text
400
500
600
700
```

Idealnya gunakan **WOFF2 self-hosted**.

Struktur:

```text
assets/
└── fonts/
    ├── poppins-regular.woff2
    ├── poppins-medium.woff2
    ├── poppins-semibold.woff2
    └── poppins-bold.woff2
```

Gunakan:

```css
@font-face {
  font-family: "Poppins";
  src: url("../fonts/poppins-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Lakukan hal yang sama untuk weight lainnya.

### Performance rules

* Jangan menggunakan font format TTF.
* Jangan menggunakan terlalu banyak font weight.
* Jangan menggunakan font eksternal yang tidak diperlukan.
* Gunakan WOFF2.
* Gunakan `font-display: swap`.
* Jika memungkinkan, gunakan subset karakter yang dibutuhkan.
* Jangan preload semua weight.
* Prioritaskan hanya font yang benar-benar digunakan pada initial viewport.

---

# 7. Typography Scale

Gunakan responsive typography.

## Hero Heading

Desktop:

```text
48px – 64px
font-weight: 700
line-height: 1.1
```

Tablet:

```text
42px – 52px
```

Mobile:

```text
34px – 40px
```

Hero heading tidak boleh terlalu panjang.

Idealnya:

```text
2–3 baris maksimal
```

---

## Section Heading

Desktop:

```text
36px – 44px
font-weight: 600–700
line-height: 1.2
```

Mobile:

```text
30px – 34px
```

---

## Card Heading

```text
20px – 24px
font-weight: 600
```

---

## Body

```text
16px – 18px
font-weight: 400
line-height: 1.7
```

Mobile:

```text
15px – 16px
```

---

## Small Text

```text
13px – 14px
```

Jangan menggunakan body text di bawah 15px pada mobile.

---

# 8. Layout System

Gunakan Bootstrap 5 sebagai basis layout.

Container utama:

```text
.container
```

Desktop maksimal:

```text
1200px – 1320px
```

Jangan membuat content terlalu melebar.

---

## Section Spacing

Desktop:

```text
padding-top: 100px
padding-bottom: 100px
```

Section besar:

```text
120px
```

Mobile:

```text
64px – 80px
```

Jangan membuat semua section memiliki padding 150–200px karena akan membuat halaman terlalu panjang.

---

# 9. Whitespace

Whitespace adalah bagian penting dari identitas IsenDev.

Gunakan ruang kosong untuk:

* Memisahkan section
* Memberikan fokus pada heading
* Memberikan kesan premium
* Membuat content tidak terasa padat

Jangan mengisi whitespace hanya karena terlihat "kosong".

---

# 10. Navbar

Navbar harus minimal dan clean.

### Desktop

Struktur:

```text
Logo | Tentang | Layanan | Portfolio | Blog | Kontak | Konsultasi
```

CTA:

```text
Konsultasi
```

Gunakan Deep Navy sebagai primary CTA.

### Navbar behavior

Initial:

```text
transparent / sesuai hero
```

Setelah scroll:

```text
background: #FFFFFF
box-shadow: subtle
```

Gunakan transition sederhana.

Contoh:

```css
transition:
  background-color 200ms ease,
  box-shadow 200ms ease;
```

Jangan menggunakan blur berat.

---

# 11. Hero Section

Hero adalah area paling penting.

Konsep:

**Confident but quiet.**

Jangan menggunakan hero yang penuh elemen.

Struktur:

```text
[Small label]

Jasa Pembuatan Website
untuk Bisnis yang Ingin
Tampil Profesional.

Short supporting paragraph

[ Konsultasi Sekarang ] [ Lihat Portfolio ]

                Visual / Project preview
```

Hero harus langsung menjawab:

1. IsenDev siapa?
2. Apa yang ditawarkan?
3. Untuk siapa?
4. Apa tindakan berikutnya?

---

## Hero Background

Gunakan:

```text
Soft Cream
```

atau:

```text
Deep Navy
```

Jangan menggunakan background gradient kompleks.

---

# 12. Hero Visual

Gunakan screenshot website/project sebagai visual utama.

Bukan:

* 3D object
* Robot
* AI generated abstract illustration
* Floating shapes berlebihan
* Video background

Visual harus menunjukkan **hasil pekerjaan nyata**.

Gunakan:

```text
1 primary project screenshot
+
subtle browser frame
```

Jika menggunakan browser frame:

* sederhana
* border tipis
* shadow ringan

---

# 13. Button System

Button harus sederhana.

## Primary

```css
background: #0B1F33;
color: #FFFFFF;
```

Hover:

```css
background: #162F48;
```

---

## Secondary

```css
background: transparent;
border: 1px solid #0B1F33;
color: #0B1F33;
```

Hover:

```css
background: #0B1F33;
color: #FFFFFF;
```

---

## Accent Button

Jika membutuhkan variasi:

```css
background: #D8C7A3;
color: #0B1F33;
```

Jangan menggunakan accent button di setiap section.

---

## Button Shape

Gunakan radius:

```text
8px – 10px
```

Jangan menggunakan:

```text
border-radius: 999px
```

untuk semua button.

Pill button hanya digunakan jika memang dibutuhkan.

---

# 14. Card Design

Card harus minimal.

Gunakan:

```css
background: #FFFFFF;
border: 1px solid #E6E0D5;
border-radius: 12px;
```

Shadow:

```text
subtle
```

Jangan menggunakan shadow besar.

Contoh:

```css
box-shadow:
  0 8px 30px rgba(11, 31, 51, 0.06);
```

---

## Card Principle

Jangan membuat setiap content menjadi card.

Gunakan card hanya untuk:

* Service
* Portfolio
* Testimonial
* Blog
* Process tertentu

Untuk content biasa gunakan layout editorial tanpa card.

---

# 15. Service Section

Service harus terlihat premium dan mudah dipahami.

Contoh:

```text
01
Website Company Profile

Website profesional untuk membangun
kepercayaan dan identitas digital bisnis.

Learn more →
```

Gunakan nomor kecil atau garis sebagai visual hierarchy.

Tidak perlu menggunakan icon besar untuk setiap service.

---

# 16. Portfolio Section

Portfolio adalah bukti kemampuan utama IsenDev.

Gunakan gambar project besar.

Layout:

```text
Large Project
Project title
Category
Short description
View project →
```

Gunakan whitespace.

Jangan membuat portfolio seperti marketplace dengan 12 card kecil.

---

# 17. About Section

Gunakan pendekatan editorial.

Contoh layout:

```text
ABOUT ISENDEV

Kami membantu bisnis membangun
website yang profesional, cepat,
dan mudah ditemukan.

                         Project image
```

Gunakan copywriting yang singkat.

Jangan menggunakan paragraf panjang.

---

# 18. Process Section

Gunakan 4 tahap:

```text
01 — Discovery
02 — Design
03 — Development
04 — Launch
```

Layout dapat dibuat horizontal di desktop dan vertical di mobile.

Gunakan garis tipis sebagai connector.

Tidak perlu animasi kompleks.

---

# 19. Why IsenDev

Gunakan 3–4 value proposition.

Contoh:

```text
Performance First
Website dirancang dengan perhatian
pada kecepatan dan pengalaman pengguna.

SEO Ready
Struktur website disiapkan agar mudah
dipahami search engine.

Responsive
Tampilan optimal di desktop, tablet,
dan mobile.

Custom Development
Website disesuaikan dengan kebutuhan
bisnis, bukan sekadar template.
```

Hindari klaim angka seperti:

```text
100+ Projects
99% Satisfaction
10+ Years Experience
```

jika tidak memiliki data yang benar-benar dapat diverifikasi.

---

# 20. Testimonial

Testimonial harus terlihat natural.

Gunakan:

```text
Quote
Nama
Role / Business
```

Jangan menggunakan testimonial palsu.

Jika belum memiliki testimonial:

* sembunyikan section, atau
* gunakan case study/project result yang benar-benar tersedia.

Jangan membuat review fiktif untuk mengisi layout.

---

# 21. FAQ

FAQ dibuat sederhana.

Gunakan Bootstrap accordion.

Tidak perlu animasi custom.

Contoh:

```text
Apa saja website yang dibuat IsenDev?
+
Berapa lama proses pembuatan website?
+
Apakah website sudah SEO friendly?
+
Apakah bisa request desain custom?
+
Apakah tersedia maintenance?
+
```

FAQ harus menjawab pertanyaan nyata calon pelanggan.

---

# 22. CTA Section

CTA akhir menggunakan Deep Navy.

Contoh visual:

```text
Background:
#0B1F33

Heading:
Punya ide website untuk bisnis Anda?

Description:
Mari diskusikan kebutuhan website
yang ingin Anda bangun.

[ Konsultasi via WhatsApp ]
```

Gunakan typography besar dan whitespace.

Jangan menggunakan banyak elemen dekoratif.

---

# 23. Footer

Footer minimal.

Struktur:

```text
IsenDev

Jasa pembuatan website profesional
untuk bisnis dan organisasi.

Navigation
Tentang
Layanan
Portfolio
Blog
Kontak

Services
Company Profile
Website UMKM
Landing Page
Website Custom

Contact
WhatsApp
Email
Banyuwangi, Indonesia

© 2026 IsenDev
```

Jangan membuat footer terlalu tinggi.

---

# 24. Blog Design

Blog menggunakan pendekatan editorial.

Bukan seperti dashboard atau magazine yang penuh card.

Layout:

```text
Featured Article

----------------------------

Article
Article
Article
```

Gunakan gambar dengan aspect ratio konsisten.

Metadata:

```text
Category · Date · Reading time
```

Gunakan text yang kecil dan subtle.

---

# 25. Blog Article

Artikel harus nyaman dibaca.

Content width:

```text
680px – 760px
```

Gunakan:

```text
16px – 18px
line-height: 1.8
```

Heading harus memiliki spacing yang cukup.

Jangan membuat artikel full-width.

---

# 26. Image Direction

Gunakan gambar yang:

* Clean
* Professional
* Natural
* Relevant
* High quality

Hindari:

* Stock photo yang terlalu generik
* Foto orang berjabat tangan
* Foto laptop dengan kopi yang terlalu klise
* AI-generated business people
* Visual teknologi berlebihan

Untuk portfolio prioritaskan screenshot project asli.

---

# 27. Image Performance

Gunakan:

```text
AVIF
```

sebagai pilihan utama jika workflow mendukung.

Fallback:

```text
WebP
```

Gunakan JPEG/PNG hanya ketika memang diperlukan.

### Rules

Semua image harus memiliki:

```html
width=""
height=""
alt=""
```

Gunakan:

```html
loading="lazy"
```

untuk image non-critical.

**Jangan lazy-load hero/LCP image.**

Untuk image LCP gunakan:

```html
fetchpriority="high"
```

jika memang image tersebut adalah LCP.

---

# 28. Animation Philosophy

Animasi harus:

**Subtle, fast, purposeful.**

Gunakan CSS animation/transition saja jika memungkinkan.

Tidak perlu:

* GSAP
* AOS
* Three.js
* Lottie
* Particle.js

kecuali benar-benar ada kebutuhan khusus.

---

## Recommended Animation

### Fade up

```text
opacity
transform: translateY()
```

### Hover

```text
transform: translateY(-2px)
```

### Image hover

```text
transform: scale(1.02)
```

Gunakan durasi:

```text
180ms – 350ms
```

---

# 29. Animation Performance

Hanya animasikan:

```text
transform
opacity
```

Hindari animasi:

```text
width
height
top
left
margin
padding
box-shadow secara berlebihan
```

karena dapat menyebabkan layout/repaint yang tidak diperlukan.

---

# 30. Reduced Motion

Website harus menghormati:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 31. Scroll Animation

Scroll reveal boleh digunakan tetapi harus minimal.

Contoh:

```text
Hero → langsung tampil
Section heading → langsung tampil
Content → subtle reveal
```

Jangan membuat semua elemen muncul satu per satu.

Hindari:

```text
stagger animation
```

pada puluhan elemen.

---

# 32. Page Banner

Untuk halaman:

```text
Tentang
Layanan
Portfolio
Blog
Kontak
```

gunakan page banner yang sederhana.

Contoh:

```text
ABOUT ISENDEV

Membangun pengalaman digital
yang sederhana dan bermakna.
```

Background dapat menggunakan:

```text
Deep Navy
```

dengan sedikit accent beige.

Tidak perlu image besar jika hanya menjadi dekorasi.

Hal ini membantu menjaga PageSpeed.

---

# 33. Iconography

Gunakan icon secara minimal.

Jika membutuhkan icon:

**Bootstrap Icons**

karena project menggunakan Bootstrap.

Gunakan icon untuk:

* Contact
* Arrow
* Navigation
* Small service indicator

Jangan menggunakan icon sebagai dekorasi utama.

---

# 34. Border Radius

Gunakan sistem:

```text
Small: 6px
Default: 10px
Card: 12px
Large visual: 16px
```

Jangan semua elemen dibuat sangat rounded.

---

# 35. Shadow

Shadow harus subtle.

Default:

```css
box-shadow:
  0 8px 30px rgba(11, 31, 51, 0.06);
```

Hover:

```css
box-shadow:
  0 12px 40px rgba(11, 31, 51, 0.09);
```

Hindari shadow yang terlihat seperti floating UI.

---

# 36. Responsive Design

Mobile bukan versi desktop yang diperkecil.

Prioritas:

```text
Mobile
↓
Tablet
↓
Desktop
```

Pada mobile:

* Navbar menjadi hamburger.
* Grid menjadi 1 column.
* Hero text lebih kecil.
* Padding section dikurangi.
* Portfolio menjadi vertical.
* CTA button dapat menjadi full width jika diperlukan.
* Tidak ada horizontal overflow.

---

# 37. Mobile Navigation

Gunakan Bootstrap navbar/collapse.

Tidak perlu membuat custom JavaScript navigation yang kompleks.

Navbar mobile harus:

```text
Logo
Menu button

↓

Tentang
Layanan
Portfolio
Blog
Kontak
Konsultasi
```

---

# 38. Performance Rules

Performance merupakan bagian dari design system.

### Jangan menggunakan:

* Video background
* Heavy animation library
* Huge hero image
* Multiple font families
* Multiple font weights yang tidak digunakan
* Autoplay video
* Large unoptimized PNG
* Excessive JavaScript
* Unnecessary third-party scripts
* Excessive shadow
* Excessive blur
* Particle effects
* Full-screen canvas animation

---

# 39. JavaScript Philosophy

JavaScript hanya digunakan jika diperlukan.

Contoh:

```text
Navbar scroll state
Mobile navigation
Accordion
Portfolio filtering
Small UI interactions
```

Konten utama harus tetap dapat dibaca tanpa JavaScript.

---

# 40. CSS Philosophy

Gunakan:

```text
Bootstrap 5
+
custom.css
```

Bootstrap digunakan untuk:

* Grid
* Container
* Navbar
* Button
* Accordion
* Responsive utilities
* Spacing utilities

Custom CSS digunakan untuk:

* Brand color
* Typography
* Hero
* Portfolio
* Custom sections
* Animation
* IsenDev visual identity

Jangan override Bootstrap secara berlebihan.

---

# 41. Avoid CSS Bloat

Jangan membuat:

```text
style.css
```

dengan ribuan baris CSS yang semuanya tidak diperlukan.

Gunakan struktur:

```text
assets/
└── css/
    ├── bootstrap.min.css
    └── style.css
```

Custom CSS harus modular secara penamaan walaupun tetap berada dalam satu file.

---

# 42. HTML Structure

Gunakan semantic HTML.

Contoh:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Hindari membuat seluruh website menggunakan:

```html
<div>
```

---

# 43. Accessibility

Pastikan:

* Semua image memiliki alt.
* Button memiliki accessible name.
* Form memiliki label.
* Kontras warna cukup.
* Focus state terlihat.
* Keyboard navigation berfungsi.
* Heading hierarchy benar.
* Tidak menggunakan warna sebagai satu-satunya indikator informasi.

---

# 44. SEO Design Principles

Design tidak boleh mengorbankan SEO.

Setiap halaman harus memiliki:

```text
1 H1
H2
H3
```

secara hierarkis.

Jangan menggunakan heading hanya karena tampilannya besar.

Gunakan semantic heading sesuai struktur informasi.

---

# 45. AEO-Friendly Content

Content harus mudah dipahami mesin pencari dan AI.

Gunakan:

```text
Question
↓
Direct Answer
↓
Supporting Explanation
```

Contoh:

```text
Apa itu jasa pembuatan website?

Jasa pembuatan website adalah layanan untuk
merancang, membangun, dan mengembangkan website
sesuai kebutuhan bisnis atau organisasi.
```

Jawaban langsung harus muncul sebelum penjelasan panjang.

---

# 46. GEO-Friendly Entity Presentation

Pastikan identitas IsenDev konsisten.

Gunakan nama:

```text
IsenDev
```

secara konsisten.

Deskripsi:

```text
IsenDev adalah penyedia jasa pembuatan website
yang melayani kebutuhan website bisnis,
organisasi, dan profesional.
```

Jangan membuat banyak variasi nama brand yang tidak diperlukan.

---

# 47. Open Graph Design

Setiap halaman harus memiliki OG image.

Ukuran:

```text
1200 × 630 px
```

Visual:

```text
Deep Navy
+
IsenDev logo
+
Page title
+
subtle beige accent
```

Jangan membuat OG image terlalu kompleks.

---

# 48. URL Design

Gunakan struktur:

```text
folder/index.html
```

Contoh:

```text
/tentang/
/layanan/
/layanan/website-company-profile/
/portfolio/
/blog/
/blog/jasa-pembuatan-website-banyuwangi/
/kontak/
```

URL publik harus tetap clean.

---

# 49. Design Consistency

Semua halaman harus terasa berasal dari brand yang sama.

Konsistensi wajib pada:

* Typography
* Color
* Button
* Spacing
* Border radius
* Image ratio
* Heading
* Navbar
* Footer
* Animation

Jangan membuat setiap halaman memiliki desain yang berbeda total.

---

# 50. Visual Hierarchy

Setiap section harus memiliki:

```text
Eyebrow
↓
Heading
↓
Description
↓
Content
↓
CTA
```

Tidak semua section wajib memiliki semua elemen tersebut.

Gunakan sesuai kebutuhan.

---

# 51. Premium Without Overdesign

Jika sebuah section sudah terlihat bagus tanpa tambahan elemen, **jangan tambahkan elemen lain hanya agar terlihat ramai.**

Contoh:

Tidak perlu:

```text
Gradient
+
Blur
+
Floating circle
+
Glow
+
3D object
+
Animated particles
```

Cukup:

```text
Typography
+
Whitespace
+
Image
+
Strong composition
```

---

# 52. IsenDev Signature

IsenDev harus memiliki beberapa elemen visual yang konsisten sebagai identitas.

### Signature 1 — Navy

Deep Navy menjadi warna utama brand.

### Signature 2 — Beige Accent

Warm Beige digunakan sebagai accent premium.

### Signature 3 — Editorial Typography

Poppins dengan heading besar dan whitespace luas.

### Signature 4 — Project Showcase

Portfolio menggunakan visual project sebagai bukti utama.

### Signature 5 — Minimal Interaction

Interaksi sederhana tetapi terasa polished.

---

# 53. Page Structure

## Homepage

```text
Navbar
↓
Hero
↓
About Preview
↓
Services
↓
Why IsenDev
↓
Featured Portfolio
↓
Process
↓
Testimonial
↓
FAQ
↓
CTA
↓
Footer
```

---

## Tentang

```text
Navbar
↓
Page Banner
↓
About IsenDev
↓
Principles
↓
Working Approach
↓
CTA
↓
Footer
```

---

## Layanan

```text
Navbar
↓
Page Banner
↓
Services Overview
↓
Service Categories
↓
Process
↓
FAQ
↓
CTA
↓
Footer
```

---

## Portfolio

```text
Navbar
↓
Page Banner
↓
Featured Project
↓
Project Grid
↓
CTA
↓
Footer
```

---

## Blog

```text
Navbar
↓
Page Banner
↓
Featured Article
↓
Latest Articles
↓
Categories
↓
CTA
↓
Footer
```

---

## Kontak

```text
Navbar
↓
Page Banner
↓
Contact Introduction
↓
Contact Information
↓
Contact Form
↓
WhatsApp CTA
↓
Footer
```

---

# 54. Design Don'ts

Jangan menggunakan:

❌ Neon gradient
❌ Purple/blue AI gradient
❌ Glassmorphism berlebihan
❌ 3D illustration
❌ Particle background
❌ Video background
❌ Excessive animation
❌ Excessive rounded cards
❌ Excessive statistics
❌ Fake testimonials
❌ Fake company data
❌ Fake portfolio
❌ Huge JavaScript libraries
❌ Multiple font families
❌ 8–10 font weights
❌ Huge unoptimized images
❌ Text yang terlalu panjang
❌ Generic AI-generated copy

---

# 55. Performance Target

Design implementation harus diarahkan agar website dapat mencapai:

```text
LCP ≤ 2.5s
INP ≤ 200ms
CLS ≤ 0.1
```

Target tersebut harus dievaluasi menggunakan pengukuran nyata setelah deployment.

Tidak boleh mengorbankan accessibility, SEO, atau usability hanya demi skor Lighthouse.

---

# 56. Performance Priority

Urutan prioritas:

```text
1. HTML rendering
2. Critical CSS
3. Hero/LCP image
4. Font loading
5. Layout stability
6. JavaScript
7. Non-critical images
8. Animations
```

Visual tidak boleh menjadi alasan untuk menambahkan resource berat.

---

# 57. Final Design Direction

Visual akhir IsenDev harus terasa seperti:

> **"Digital studio yang tenang, profesional, dan detail."**

Bukan:

> "Website agency dengan banyak efek."

Pengunjung harus mendapatkan kesan:

```text
Simple
↓
Professional
↓
Trustworthy
↓
Premium
↓
Modern
```

dalam beberapa detik pertama.

---

# 58. Core Design Rule

> **Jika sebuah elemen tidak membantu pengguna memahami IsenDev, mempercayai IsenDev, atau mengambil tindakan, pertimbangkan untuk menghapusnya.**

Simplicity adalah bagian dari identitas IsenDev, bukan kekurangan desain.
