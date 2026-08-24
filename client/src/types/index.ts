// ==========================================
// 1. Enums & Utility Types
// ==========================================

export type UserRole = 'user' | 'guide' | 'lead-guide' | 'admin';

export type TourDifficulty = 'easy' | 'medium' | 'difficult';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export type PaymentMethod = 'mpesa' | 'stripe' | 'card' | 'cash';

export interface GeoJSONPoint {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
  address?: string;
  description?: string;
}

export interface TourLocation extends GeoJSONPoint {
  day?: number;
}

// ==========================================
// 2. User & Auth Interfaces
// ==========================================

export interface IUser {
  _id: string;
  name: string;
  email: string;
  photo?: string;
  role: UserRole;
  phone?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  status: string;
  token: string;
  data: {
    user: IUser;
  };
}

// ==========================================
// 3. Tour Interfaces
// ==========================================

export interface ITour {
  _id: string;
  name: string;
  slug: string;
  duration: number; // in days
  maxGroupSize: number;
  difficulty: TourDifficulty;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  priceDiscount?: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  createdAt: string;
  startDates: string[]; // ISO Date strings
  secretTour?: boolean;
  startLocation: GeoJSONPoint;
  locations: TourLocation[];
  guides: IUser[] | string[]; // Populated IUser objects or raw ObjectIds
}

export interface TourQueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string;
  difficulty?: TourDifficulty;
  priceMin?: number;
  priceMax?: number;
  durationMin?: number;
  durationMax?: number;
  search?: string;
}

// ==========================================
// 4. Booking Interfaces
// ==========================================

export interface IBooking {
  _id: string;
  tour: ITour | string; // Populated ITour or ObjectId
  user: IUser | string; // Populated IUser or ObjectId
  price: number;
  groupSize: number;
  startDate: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  paymentReference?: string; // e.g., M-Pesa Code (CheckoutRequestID / TransID) or Stripe Charge ID
  phoneNumber?: string; // M-Pesa target phone number
  createdAt: string;
  updatedAt: string;
}

export interface CreateBookingDTO {
  tour: string;
  startDate: string;
  groupSize: number;
  paymentMethod: PaymentMethod;
  phoneNumber?: string; // Required for M-Pesa STK Push
}

// ==========================================
// 5. Review Interfaces
// ==========================================

export interface IReview {
  _id: string;
  review: string;
  rating: number;
  tour: ITour | string;
  user: IUser | string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateReviewDTO {
  tour: string;
  review: string;
  rating: number;
}

// ==========================================
// 6. Generic API Response Wrapper
// ==========================================

export interface ApiResponse<T> {
  status: 'success' | 'fail' | 'error';
  results?: number;
  message?: string;
  data: T;
}

export interface ApiErrorResponse {
  status: 'fail' | 'error';
  message: string;
  error?: unknown;
  stack?: string;
}