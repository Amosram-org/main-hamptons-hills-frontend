'use client';

import { createContext, useContext, useState, ReactNode } from 'react';


interface SidebarContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const SideBarContext = createContext<SidebarContextType | undefined>(undefined);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <SideBarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SideBarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SideBarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SideBarProvider');
    }
    return context;
};