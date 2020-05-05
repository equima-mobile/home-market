export class Notification {
    id?: string;
    authId: string;
    title: string;
    message: string;
    date: string;
    categorie: string;
    seen_global: boolean;
    seen_clic: boolean;
    status_local?: boolean;
  }