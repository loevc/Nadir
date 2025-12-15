import httpClient from '@/services/http';
import type {User , UserDetail } from '../types/user';

export const getUser = (id: number) => {
  return httpClient.get(`/users/${id}`);
};

export const createUser = (data: { name: string; email: string }) => {
  return httpClient.post('/users', data);
};

export const updateUser = (id: number, data: { name?: string; email?: string }) => {
  return httpClient.put(`/users/${id}`, data);
};

export const deleteUser = (id: number) => {
  return httpClient.delete(`/users/${id}`);
};

export const listUsers = (params?: { page?: number; limit?: number }) => {
  return httpClient.get('/users', { params });
};

export function getUserList(): Promise<User[]> {
  return httpClient.get('/users/list');
}

export function getUserDetail(id: string): Promise<UserDetail> {
  return httpClient.get(`/users/detail/${id}`);
}