import { Link, usePage } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';
import Dropdown from '@/Components/Dropdown';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props?.auth?.user || {};
    const [open, setOpen] = useState({ foundations: false, piles: false, test: false });
    const sidebarRef = useRef(null);

    // Close menus when clicking outside sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen({ foundations: false, piles: false, test: false });
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="grid min-h-screen grid-cols-[12rem_1fr] bg-gray-100">
            {/* Sidebar */}
            <aside ref={sidebarRef} className="flex flex-col bg-white border-r">
                <div className="p-4 flex items-center justify-center border-b">
                    <Link href="/dashboard">
                        <img
                            className="w-16 h-16 object-cover border rounded"
                            alt="Thumbnail"
                            src="images/EngeneerWorx_1.png"
                        />
                    </Link>
                </div>

                <nav className="p-2 space-y-1">
                    {/* Foundations */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => ({ ...o, foundations: !o.foundations }))}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
                    >
                        <span>Foundations</span>
                        <svg
                            className={`h-4 w-4 transition-transform ${open.foundations ? 'rotate-180' : ''}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {open.foundations && (
                        <div className="ml-3 space-y-1">
                            {/* Piles submenu */}
                            <button
                                type="button"
                                onClick={() => setOpen((o) => ({ ...o, piles: !o.piles }))}
                                className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                            >
                                <span>Piles</span>
                                <svg
                                    className={`h-4 w-4 transition-transform ${open.piles ? 'rotate-90' : ''}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            {open.piles && (
                                <div className="ml-4 space-y-1">
                                    <Link
                                        href={route('hiley.hileyformula')}
                                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                                    >
                                        Hiley Formula
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}

                   
                </nav>

                {/* User Dropdown */}
                <div className="border-t p-4 mt-4">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
                            >
                                {user.name || 'User'}
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content className="ml-4">
                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </aside>

            {/* Content */}
            <section className="flex flex-col min-w-0">
                {header && (
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}
                <main className="p-6">{children}</main>
            </section>
        </div>
    );
}
