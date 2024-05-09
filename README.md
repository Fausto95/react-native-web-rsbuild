## Monorepo for React Native + Pnpm Workspace

This is a monorepo consisting of:
- [libs](libs) - Core Library + Design System
- [apps/rn](apps/rn) - Mobile app(built with [Expo](https://expo.dev/))
- [apps/web](apps/web) - Web app(built with [React Native Web](https://necolas.github.io/react-native-web/))

My goal here was just to explore RsBuild as Webpack alternative.
So far I've been able to get it working with React Native Web inside a monorepo.

### Stack
- [RsBuild](https://rsbuild.dev/)
- [Expo](https://expo.dev/)
- [React Native Web](https://necolas.github.io/react-native-web/)
- [Pnpm](https://pnpm.io/)

### Requirements
- [Pnpm](https://pnpm.io/)

### How to run

- Clone the repository
- Run `pnpm install` in the root folder

### Running the web app
- Run `pnpm start:web` in the root folder
- Open `http://localhost:3000` in your browser

### Running the mobile app
- Run `pnpm start:mobile` in the root folder

### TODO

- [x] Fix `react-native` compilation errors from `lib/design-system` package
