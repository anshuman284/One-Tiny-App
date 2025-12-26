import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';
import CompressPDF from './components/tools/CompressPDF';

// Tool categories and routes
const tools = [
  {
    category: 'PDF Tools',
    icon: FileText,
    items: [
      { name: 'PDF Merge', path: '/pdf/merge', component: () => <div className="p-6">PDF Merge (Existing Tool)</div> },
      { name: 'PDF to Word', path: '/pdf/word', component: () => <div className="p-6">PDF to Word (Existing Tool)</div> },
      { name: 'Compress PDF', path: '/pdf/compress', component: CompressPDF, isNew: true },
    ],
  },
  // Add other categories as needed
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="h-screen flex overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Sidebar */}
        <aside
          className={`glass-sidebar w-72 flex-shrink-0 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed lg:relative h-full z-20`}
        >
          <div className="h-full flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
              <h1 className="font-logo text-2xl font-bold text-white">
                OneTinyApp
              </h1>
              <p className="text-slate-400 text-sm mt-1">Privacy-First Utilities</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-6">
              {tools.map((category) => (
                <div key={category.category}>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    {category.items.map((tool) => (
                      <NavLink
                        key={tool.path}
                        to={tool.path}
                        className={({ isActive }) =>
                          `flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                            isActive
                              ? 'bg-brand-primary text-white'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`
                        }
                      >
                        <span>{tool.name}</span>
                        {tool.isNew && (
                          <span className="px-2 py-0.5 text-xs bg-green-500 text-white rounded-full">
                            New
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/10">
              <p className="text-xs text-slate-400 text-center">
                100% Client-Side • No Tracking
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-lg shadow-lg"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Routes */}
          <div className="h-full overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/pdf/compress" replace />} />
              {tools.flatMap((category) =>
                category.items.map((tool) => (
                  <Route
                    key={tool.path}
                    path={tool.path}
                    element={<tool.component />}
                  />
                ))
              )}
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
