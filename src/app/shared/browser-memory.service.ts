import { Injectable } from '@angular/core';

@Injectable()
export class BrowserMemoryService {

  constructor() { }

  setSession(key: string, model: any) {
    sessionStorage.setItem(`ep_${key}`, model);
  }

  getSession(key: string) {
    return sessionStorage.getItem(`ep_${key}`);
  }

  removeSession(key: string){
    sessionStorage.removeItem(`ep_${key}`);
  }

  clearSession() {
    sessionStorage.clear();
  }

  setLocalStorage(key: string, model: any) {
    localStorage.setItem(`ep_${key}`, model);
  }

  getLocalStorage(key: string) {
    return localStorage.getItem(`ep_${key}`);
  }

  removeLocalStorage(key: string){
    localStorage.removeItem(`ep_${key}`);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  clearAllMemory() {
    sessionStorage.clear();
    localStorage.clear();
  }

}
