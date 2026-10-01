const STORAGE_KEY = 'ong_voluntarios_data';

export const storage = {
  getVoluntarios() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Falha ao aceder ao localStorage:', e);
      return [];
    }
  },
  
  saveVoluntario(voluntario) {
    try {
      const lista = this.getVoluntarios();
      lista.push(voluntario);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
      return true;
    } catch (e) {
      console.error('Falha ao persistir no localStorage:', e);
      return false;
    }
  }
};