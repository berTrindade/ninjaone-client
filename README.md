# ninjaone-client

## Features include:

- The main view is a dashboard where users can see all devices listed.
- User can filter devices by one Type.
- User can sort devices by system name.
- User can sort devices by HDD Capacity from low to high.
- User can Add, Update or Delete devices.
- Styled using [Styled Components](https://styled-components.com/)
- Filters using [React-Select](https://react-select.com/upgrade-guide)
- Multiple device type filter
- Sorting and Acendent and Descendent
- Form validation

### How it looks like 

![screenshot](https://github.com/berTrindade/ninjaone-client/blob/main/src/assets/screenshot.png)

# Installation and usage

## 1. Clone or download the repo

```
git clone https://github.com/berTrindade/ninjaone-client
```

## 2. Install dependencies:

```
cd ninjaone-client
npm install or yarn install
```

## 3. Set up environment variables

```
cp .env.local .env
```

Then set your backend server URL (the server app referred above. Please make sure they have diferent port if they are using localhost. By default the server project is using port 3000 like this app.

```
REACT_APP_API_BASE_URL = 'http://your-backend-url'
```

## 4. Start the application

```
yarn dev
```
