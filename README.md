# OneTinyApp 🚀

![Version](https://img.shields.io/badge/version-1.1-blueviolet)
![Privacy](https://img.shields.io/badge/privacy-100%25%20client--side-success)
![React](https://img.shields.io/badge/built%20with-React%2019-61dafb)

**OneTinyApp** is a comprehensive, privacy-first utility suite that lives entirely in your browser. It performs complex file manipulations, conversions, and calculations without sending a single byte of data to a server. 

No logins. No paywalls. No tracking. Just tools that work.

## ✨ Features

OneTinyApp bundles essential utilities into a single, cohesive interface:

### 📄 PDF Tools
*   **PDF Merge:** Combine multiple PDF files into a single document with drag-and-drop reordering.
*   **PDF to Word:** Convert PDF documents to editable `.docx` files using client-side extraction.
*   **Compress PDF:** Reduce PDF file sizes with three compression levels (low, medium, high) while maintaining quality.

### 💰 Finance
*   **SIP Calculator:** Estimate returns on Mutual Funds with a visual breakdown of invested vs. gained wealth.
*   **EMI Calculator:** Calculate loan amortization schedules and export them to CSV.

### 🛠️ Developer Tools
*   **JSON Formatter:** Validate, beautify, and minify JSON with a collapsible tree view.
*   **JSON to TOON:** Convert JSON to *Token-Oriented Object Notation* (a custom compact format).
*   **Text Compare:** Side-by-side text diffing to spot changes instantly.
*   **QR Generator:** Create high-res QR codes with custom colors and logo overlays (SVG/PNG export).
*   **Color Palette:** Generate harmonic color schemes (Analogous, Triad, etc.) based on HSL configuration.

### 🖼️ Image Tools
*   **Image Reducer:** Intelligently compress images (JPG, PNG, WEBP) to specific file size targets (e.g., < 500KB) entirely in the browser.

### 🌍 Date & Time
*   **Timezone Converter:** Visual converter across global timezones with DST awareness.
*   **Date Diff:** Calculate precise duration between dates (Years, Months, Days, Weekdays).

### 🔄 Converters
*   **Unit Converter:** Handle Length, Area, Weight, Temperature, Data, and Speed.
*   **Currency Converter:** Real-time exchange rates with historical charts (supports manual override and caching).

---

## 🔒 The Privacy Promise

OneTinyApp is built on a **Local-First** architecture. 

*   **No Backend:** There is no API server processing your files.
*   **In-Memory Processing:** When you merge a PDF or compress an image, it happens using WebAssembly and JavaScript inside your browser's memory.
*   **Persistence:** Preferences (like pinned tools or numbering systems) are stored in your browser's `localStorage`.

Your files never leave your device.

---

## 💻 Tech Stack

*   **Framework:** React 19
*   **Styling:** Tailwind CSS (with custom animations and glassmorphism)
*   **Routing:** React Router DOM
*   **Visualization:** Recharts
*   **Icons:** Lucide React
*   **Core Libraries:**
    *   `pdf-lib` & `pdfjs-dist` (PDF processing)
    *   `docx` (Word generation)
    *   `qrcode.react` (QR generation)
    *   `diff` (Text comparison)

---

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/onetinyapp.git
    cd onetinyapp
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    # or
    npm run dev
    ```

4.  Open `http://localhost:3000` (or the port shown in your terminal) to view the app.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Vibe-coded by Anshuman.*
