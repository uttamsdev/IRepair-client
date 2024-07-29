import { cn } from '@/lib/utils';
import { LayoutDashboard } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className='stick top-0 left-0 bg-light-gray col-span-2 h-screen overflow-auto px-3'>
            <nav className='flex flex-col gap-2 mt-3'>
                <NavLink className={({ isActive }) =>
                    cn('p-2 rounded-md flex items-center gap-2 bg-gray', { 'bg-dark-gray text-white': isActive })} to='/admin/dashboard'> <LayoutDashboard /> <span className='truncate'>Dashboard</span>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    cn('p-2 rounded-md flex items-center gap-2 bg-gray', { 'bg-dark-gray text-white': isActive })} to='/admin/add-service'> <LayoutDashboard /> <span className='truncate'>Add Service</span>
                </NavLink>
                <NavLink className={({ isActive }) =>
                    cn('p-2 rounded-md flex items-center gap-2 bg-gray', { 'bg-dark-gray text-white': isActive })} to='/admin/services-list'> <LayoutDashboard /> <span className='truncate'>Service List</span>
                </NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar;