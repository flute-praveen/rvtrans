# 📁 RV Trans Logistics - Project Structure

## Complete File Organization

```
rv-trans-logistics-website/
│
├── 📄 package.json                 # Project dependencies and scripts
├── 📄 vite.config.js              # Vite build configuration
├── 📄 README.md                    # Main documentation
├── 📄 SETUP_GUIDE.md              # Quick setup instructions
├── 📄 PROJECT_STRUCTURE.md        # This file
│
├── 📁 public/                      # Static assets
│   └── 📄 index.html              # Main HTML template
│
└── 📁 src/                        # Source code
    ├── 📄 index.js                # Application entry point
    ├── 📄 App.js                  # Main app (Navbar, Footer, Pages)
    │
    └── 📁 pages/                  # Page components
        ├── 📄 Home.js             # Homepage with hero and features
        ├── 📄 Services.js         # Services and process details
        ├── 📄 About.js            # Company info, team, values
        ├── 📄 Fleet.js            # Vehicle fleet details
        ├── 📄 Gallery.js          # Image gallery
        └── 📄 Contact.js          # Contact form and locations
```

---

## 📄 File Descriptions

### Root Level Files

#### `package.json`
- Contains project metadata
- Lists all dependencies (React, Lucide icons)
- Defines npm scripts (dev, build, preview)
- Current version: 1.0.0

#### `vite.config.js`
- Vite build tool configuration
- React plugin setup
- Development server settings (port 3000)
- Build output configuration

#### `README.md`
- Comprehensive project documentation
- Installation instructions
- Feature list
- Technology stack
- Development guidelines

---

### 📁 Public Folder

#### `index.html`
- Main HTML template
- Includes Tailwind CSS CDN
- Custom animations (fade-in, slide-up)
- Custom scrollbar styling
- Meta tags for SEO

---

### 📁 Src Folder

#### `index.js` (Entry Point)
- Imports React and ReactDOM
- Mounts the App component to root div
- Sets up React.StrictMode

#### `App.js` (Main Application)
**Components:**
- `Navbar` - Fixed navigation with scroll effects
- `Footer` - Company info and quick links
- Main content - Renders all page components

**Features:**
- Smooth scroll navigation
- Mobile-responsive menu
- Gradient backgrounds
- Sticky header on scroll

---

### 📁 Pages Folder

#### 1. `Home.js`
**Sections:**
- Hero with call-to-action
- Stats showcase (10K+ vehicles, 99.8% safety)
- Features overview
- Why choose us
- Final CTA

**Key Elements:**
- Animated hero text
- Trust indicators grid
- Gradient backgrounds
- Scroll indicator

---

#### 2. `Services.js`
**Sections:**
- Services grid (4 main services)
- Service process (5 steps)
- Safety commitment
- Features breakdown

**Services:**
1. Single Car Carriers
2. Warehouse Solutions
3. Art & Sculpture Relocation
4. Logistic Services (FTL/PTL)

---

#### 3. `About.js`
**Sections:**
- Company overview
- Why choose us (4 reasons)
- Core values (4 values)
- Team members (3 leaders)
- Achievements grid (6 stats)
- Corporate partners list
- Office locations (2 offices)

**Key Info:**
- Founded: March 31, 2015
- GST: 06ABKFR2142R1ZP
- Registration: U63000HR2015PTC216848

---

#### 4. `Fleet.js`
**Sections:**
- Fleet statistics
- Brand breakdown (TATA, EICHER, MAHINDRA, BHARAT BENZ)
- Fleet features (4 key features)
- Complete vehicle list (24 vehicles)
- Future expansion plans

**Fleet Details:**
- 24 modern vehicles
- 100% GPS tracked
- Multiple brands
- 2025-2026 expansion plan (+20 vehicles)

---

#### 5. `Gallery.js`
**Sections:**
- Gallery stats
- Category filters
- Image grid (15 categories)
- Modal view for images
- Services showcase

**Categories:**
- Vehicle Loading
- Transportation
- Safety Measures
- Delivery
- Operations

---

#### 6. `Contact.js`
**Sections:**
- Contact methods (3 options)
- Contact form (5 fields)
- Benefits list (6 benefits)
- Office locations (2 offices)
- Operating hours

**Contact Info:**
- Phone: +91-7988519924, +91-9717979991
- Email: rvtranslogistics@gmail.com
- Hours: Mon-Sun 9:00 AM - 7:00 PM

---

## 🎨 Design System

### Colors
- **Primary Orange**: #ea580c, #f97316, #fb923c
- **Background**: #0f172a, #1e293b, #334155
- **Text**: White, slate variations
- **Accents**: Orange gradients

### Typography
- **Headings**: Font-black, large sizes
- **Body**: Regular weight, readable sizes
- **Links**: Hover effects, smooth transitions

### Components
- **Cards**: Rounded corners (rounded-2xl, rounded-3xl)
- **Buttons**: Gradient fills, shadow effects
- **Icons**: Lucide React library
- **Animations**: Fade-in, slide-up, hover effects

---

## 🔄 Data Flow

```
index.js
    ↓
App.js (Navbar + Footer)
    ↓
├── Home.js
├── Services.js
├── About.js
├── Fleet.js
├── Gallery.js
└── Contact.js
```

All pages are rendered in a single-page application with smooth scroll navigation.

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (col-1, col-2)
- **Tablet**: 768px - 1024px (col-2, col-3)
- **Desktop**: > 1024px (col-3, col-4)

### Mobile Features
- Hamburger menu
- Stacked layouts
- Touch-friendly buttons
- Optimized images

---

## 🚀 Performance Features

- Vite for fast development
- Component-based architecture
- Lazy loading ready
- Optimized images
- Minimal dependencies
- CDN for Tailwind CSS

---

## 📊 Statistics Displayed

- 10K+ Vehicles Transported
- 99.8% Safety Record
- 98% On-Time Delivery
- 4.8/5 Customer Rating
- 24+ Fleet Vehicles
- 20+ Team Members

---

## 🎯 Key Features

✅ Fully responsive design
✅ Smooth animations
✅ Modern UI/UX
✅ SEO optimized
✅ Fast loading
✅ Easy to maintain
✅ Professional appearance
✅ Mobile-first approach

---

**Project Created: November 2024**
**Built with React + Vite + Tailwind CSS**
