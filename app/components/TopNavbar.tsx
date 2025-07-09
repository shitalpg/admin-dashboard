

// Top Navbar

'use client';

import { FaUser } from 'react-icons/fa';

export default function TopNavbar() {
    return (
        <header className="bg-white shadow px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

            <div className="hidden sm:block text-lg sm:text-xl font-semibold text-gray-600">
                Welcome, Shital
            </div>



            <div className="flex items-center justify-end gap-2">

                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    <FaUser size={18} />
                </div>


                <button
                    onClick={() => alert('Logged out!')}
                    className="text-sm text-red-500 hover:text-red-600 font-medium transition"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}
