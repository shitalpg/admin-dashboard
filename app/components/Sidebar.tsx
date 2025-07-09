


'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Home, Users, Settings } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger menu - visible only on mobile */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setOpen(!open)} aria-label="Toggle Sidebar">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out',
          {
            'translate-x-0': open,              
            '-translate-x-full': !open,          
            'lg:translate-x-0 lg:relative lg:block': true, 
          }
        )}
      >
        <div className="p-4 font-bold text-lg border-b text-center border-gray-200">
          My Dashboard
        </div>
        <nav className="p-4 flex flex-col gap-2">
          {links.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              href={href}
              className={clsx(
                'flex items-center gap-3 p-2 rounded-md text-gray-700 hover:bg-gray-100 transition',
                {
                  'bg-blue-100 text-blue-700 font-semibold': pathname === href,
                }
              )}
              onClick={() => setOpen(false)} // auto-close on mobile
            >
              <Icon size={18} />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Background overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
