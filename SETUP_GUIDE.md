# 🚀 Quick Setup Guide - RV Trans Logistics Website

## Step 1: Prerequisites
Make sure you have **Node.js** installed on your computer.
- Download from: https://nodejs.org/ (LTS version recommended)

## Step 2: Extract Files
Extract all files from the project folder to your desired location.

## Step 3: Install Dependencies

Open terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install:
- React
- React DOM
- Lucide React (icons)
- Vite (development server)

## Step 4: Install Vite Dev Dependencies

```bash
npm install --save-dev @vitejs/plugin-react vite
```

## Step 5: Run the Development Server

```bash
npm run dev
```

The website will automatically open in your browser at `http://localhost:3000`

## 🎉 That's It!

Your RV Trans Logistics website is now running!

---

## 📝 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 🔧 Troubleshooting

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 3000 already in use
**Solution**: The dev server will automatically use the next available port (3001, 3002, etc.)

### Issue: Dependencies not installing
**Solution**: 
1. Delete `node_modules` folder
2. Delete `package-lock.json` file
3. Run `npm install` again

---

## 📱 Testing on Mobile

1. Find your computer's IP address
2. Run `npm run dev`
3. On your mobile, open: `http://YOUR_IP:3000`

Example: `http://192.168.1.100:3000`

---

## 🌐 Deploying to Production

### Option 1: Netlify (Recommended - Free)
1. Build the project: `npm run build`
2. Go to https://www.netlify.com/
3. Drag and drop the `dist` folder

### Option 2: Vercel (Free)
1. Go to https://vercel.com/
2. Import your project
3. Deploy automatically

### Option 3: Traditional Hosting
1. Run: `npm run build`
2. Upload the `dist` folder to your hosting
3. Point your domain to the uploaded files

---

## 📞 Support

For any issues or questions:
- Email: rvtranslogistics@gmail.com
- Phone: +91-7988519924

---

**Happy Coding! 🎨**
