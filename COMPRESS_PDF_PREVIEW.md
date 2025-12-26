# Compress PDF Tool - Visual Preview

## Interface Overview

The Compress PDF tool has a clean, modern interface with the following sections:

### 1. Header Section
```
┌─────────────────────────────────────────────────────┐
│  Compress PDF                                       │
│  Reduce PDF file size while maintaining quality.   │
│  All processing happens in your browser.           │
└─────────────────────────────────────────────────────┘
```

### 2. Upload Area (Initial State)
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              📤 Upload Icon                         │
│                                                     │
│     Drop PDF file here or click to browse         │
│          Maximum file size: 50MB                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```
- Glassmorphism design with dashed border
- Hover effect changes border to purple
- Supports drag & drop

### 3. File Selected State
```
┌─────────────────────────────────────────────────────┐
│  📄 document.pdf                          Remove    │
│     2.5 MB                                          │
│                                                     │
│  Compression Level                                  │
│  ┌──────┐  ┌──────┐  ┌──────┐                     │
│  │ Low  │  │Medium│  │ High │                      │
│  └──────┘  └──────┘  └──────┘                      │
│  Balanced compression and quality (recommended)     │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │     📄 Compress PDF                         │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```
- Shows file name and size
- Three compression level buttons (Low/Medium/High)
- Medium is selected by default (purple highlight)
- Large purple gradient button to start compression

### 4. Processing State
```
┌─────────────────────────────────────────────────────┐
│  ⏳ Compressing... 60%                             │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░                   │
└─────────────────────────────────────────────────────┘
```
- Animated spinner icon
- Real-time progress percentage
- Purple progress bar

### 5. Results State
```
┌─────────────────────────────────────────────────────┐
│  ✅ Compression Successful!                        │
│     Your PDF has been compressed                   │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────┐       │
│  │ Original Size    │  │ Compressed Size  │       │
│  │ 2.5 MB          │  │ 1.2 MB          │       │
│  └──────────────────┘  └──────────────────┘       │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │         Space Saved                         │   │
│  │            52%                              │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │    ⬇️ Download Compressed PDF               │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │    Compress Another File                    │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```
- Green success indicator
- Side-by-side size comparison
- Large purple percentage showing space saved
- Download button with gradient
- Option to compress another file

### 6. Info Section (Always Visible)
```
┌─────────────────────────────────────────────────────┐
│  ℹ️ How It Works                                   │
│  • Upload your PDF file (maximum 50MB)             │
│  • Choose compression level based on your needs    │
│  • Click "Compress PDF" to reduce file size        │
│  • Download the compressed PDF instantly           │
│  • 100% client-side processing - your files       │
│    never leave your device                         │
└─────────────────────────────────────────────────────┘
```

## Color Scheme
- **Primary Purple**: #7c3aed (buttons, accents)
- **Green Success**: For compressed results
- **Glass Panel**: White with blur effect
- **Text**: Slate gray tones

## Key Features Visible
✅ Drag & drop file upload
✅ Three compression levels
✅ Real-time progress
✅ Compression statistics
✅ Instant download
✅ Privacy-first messaging

## Navigation
The tool appears in the left sidebar under:
**PDF Tools** → **Compress PDF** 🆕
(marked with a green "New" badge)
