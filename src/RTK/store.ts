
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice'; // استيراد الـ reducer الخاص بالـ userSlice

export const store = configureStore({
  reducer: {
    User: userSlice, // إضافة الـ reducer إلى تكوين الـ store تحت المفتاح 'user'
  },
});

// إعداد أنواع Dispatch و RootState لاستخدامها في تطبيقك مع TypeScript
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;