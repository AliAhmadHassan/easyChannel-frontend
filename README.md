# EasyChannel Frontend (Angular)

## What this project is
EasyChannel is an omnichannel customer communication console built with Angular. It provides a role-based UI for managers and attendants to manage users, groups, and customer situations while handling direct chat conversations with customers.

## Product highlights
- Role-based experience (ADMIN, MANAGER, ATTENDANT) with protected routes and dedicated menus.
- Direct chat screen with customer context fields and message list rendering.
- Attendant dashboard that tracks unread conversations and assigned customers.
- Manager screens for CRUD workflows: users, groups, and situations.
- Multi-language UI (English and Portuguese) with in-app language switch.

## Architecture and organization
- Angular CLI 1.7 app using Angular 5 and TypeScript 2.5.
- Clear feature separation:
  - `src/app/components/` for UI screens and layout.
  - `src/app/services/` for API access and shared state.
  - `src/app/model/` for domain models (User, Message, To/From, Situation, Group).
- Centralized routing in `src/app/app.routes.ts` with `AuthGuard` protecting secured routes.
- `AuthInterceptor` injects an Authorization header into HTTP requests.
- `SharedService` acts as a lightweight session store with event emitters to update the layout after login/logout.

## Key UX flows (from code)
- Login authenticates via `/api/auth`, stores token and user in `localStorage`, then routes based on role.
- Manager workflows load data with pagination, provide edit/delete actions, and show contextual status messages.
- Attendant menu polls for unread messages and shows assigned customers, opening a direct chat view.
- Direct chat uses scheduled polling to refresh messages and allows updating customer metadata.

## Technology stack
- Angular 5.2, RxJS 5.5, TypeScript 2.5
- `@ngx-translate` for i18n (files in `src/assets/i18n/`)
- AdminLTE + Bootstrap assets for the UI layout and theme
- Karma/Jasmine for unit tests, Protractor for e2e tests

## API integration
- All REST calls use Angular `HttpClient`.
- Base URL is centralized in `src/app/services/easy.api.ts` (`http://127.0.0.1:8080`).
- Services implement consistent CRUD patterns for domain entities:
  - Users, Groups, Situations, Messages, Customer records (To/From).

## Repo tour
- `src/app/components/security/` auth guard + interceptor + login screen
- `src/app/components/manager/` manager dashboards and CRUD pages
- `src/app/components/attendant/` attendant menu and chat list
- `src/app/components/direct-chat/` customer chat UI
- `src/app/services/` API layer (one service per entity)
- `src/assets/` AdminLTE/Bootstrap assets and translation files

## Running locally
- Install dependencies: `npm install`
- Start dev server: `npm start` (http://localhost:4200)
- Tests: `npm test` (unit), `npm run e2e`
