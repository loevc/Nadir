export interface User {
    id: string;
    name: string;
    type: 'admin' | 'user' | 'super' | 'guest';
    email: string;
    phone: string;
}

export interface UserDetail extends User {
    address: string;
    dateOfBirth: string;
    avatarUrl?: string;
}

export type UserRole = 'admin' | 'user' | 'super' | 'guest';

export interface UserSettings {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
}