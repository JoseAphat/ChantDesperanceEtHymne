import AsyncStorage from "@react-native-async-storage/async-storage";

export interface ReminderConfig {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string; // ISO string
  repeat: 'never' | 'daily' | 'weekly' | 'monthly';
  sound: string;
  vibration: boolean;
  message?: string;
  notificationId?: string;
}

const REMINDERS_STORAGE_KEY = "@custom_reminders";

export class CustomReminderService {
  static readonly SOUND_OPTIONS = [
    { id: 'default', name: 'Son par défaut' },
    { id: 'bell', name: 'Cloche' },
    { id: 'chime', name: 'Carillon' },
    { id: 'piano', name: 'Piano' },
    { id: 'organ', name: 'Orgue' },
  ];

  static readonly REPEAT_OPTIONS = [
    { id: 'never', name: 'Une seule fois' },
    { id: 'daily', name: 'Tous les jours' },
    { id: 'weekly', name: 'Toutes les semaines' },
    { id: 'monthly', name: 'Tous les mois' },
  ];

  static async saveReminder(config: ReminderConfig): Promise<boolean> {
    try {
      const existing = await this.getReminders();
      const updated = existing.filter(r => r.id !== config.id);
      updated.push(config);
      await AsyncStorage.setItem(REMINDERS_STORAGE_KEY, JSON.stringify(updated));
      return true;
    } catch (error) {
      console.error('Erreur sauvegarde rappel:', error);
      return false;
    }
  }

  static async getReminders(): Promise<ReminderConfig[]> {
    try {
      const stored = await AsyncStorage.getItem(REMINDERS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erreur récupération rappels:', error);
      return [];
    }
  }

  static async getRemindersForService(serviceId: string): Promise<ReminderConfig[]> {
    const allReminders = await this.getReminders();
    return allReminders.filter(reminder => reminder.serviceId === serviceId);
  }

  static async deleteReminder(reminderId: string): Promise<boolean> {
    try {
      const existing = await this.getReminders();
      const updated = existing.filter(r => r.id !== reminderId);
      await AsyncStorage.setItem(REMINDERS_STORAGE_KEY, JSON.stringify(updated));
      return true;
    } catch (error) {
      console.error('Erreur suppression rappel:', error);
      return false;
    }
  }

  static async deleteRemindersForService(serviceId: string): Promise<boolean> {
    try {
      const existing = await this.getReminders();
      const updated = existing.filter(r => r.serviceId !== serviceId);
      await AsyncStorage.setItem(REMINDERS_STORAGE_KEY, JSON.stringify(updated));
      return true;
    } catch (error) {
      console.error('Erreur suppression rappels service:', error);
      return false;
    }
  }

  static formatReminderDate(date: Date): string {
    return date.toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  static generateId(): string {
    return `reminder_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}