# Priven Hub

Priven Hub is a centralized ecosystem application built with React, Vite, and Firebase. This MVP acts as the foundation for future Priven features like a wallet, social feed, store, clan management, quests, and more.

## Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Backend & Auth**: Firebase (Authentication, Firestore)

## Features Included in MVP

- **Authentication**: Email/Password and Google Sign-In, with persistent state.
- **Protected Routing**: Role/auth-based redirection for public vs private views.
- **Design System**: A strict "Dark First" theme utilizing standard Priven color palettes (Neon Lime, Deep Surface, Gold accents).
- **Core App Shell**: Responsive side navigation for desktop and standard mobile scaling.
- **Placeholder Architecture**: Scalable, separated module folders for every planned ecosystem feature (Clans, Wallet, Points, Store, Feed, Quests).
- **Security Foundations**: Basic firestore.rules file locking down external reads while allowing users to manage their own profiles.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Copy `.env.example` to `.env` and fill in your Firebase configuration values.

3. Run the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

- `/src/components` - Reusable UI elements (`Button`, `Card`, `Badge`)
- `/src/layouts` - Structural wrappers like `DashboardLayout` and `AuthLayout`
- `/src/pages` - Feature-specific views
- `/src/contexts` - React contexts like `AuthContext`
- `/src/firebase` - Firebase initialization and config
- `/src/types` - Shared TypeScript interfaces
- `/src/utils` - Helper functions like Tailwind class merging

## Future Development

The app relies heavily on `PlaceholderPage` components wrapped under Feature Flags (`FEATURE_FLAGS` inside `types/index.ts`). You can iteratively build out those pages (`/src/pages/Wallet/index.tsx`, etc.) and replace their respective Placeholder renders within `/src/app/routes.tsx`.
