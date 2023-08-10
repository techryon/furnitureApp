# Step by Step instructions on how this project is created

This project is used following this youtube tutorial [https://www.youtube.com/watch?v=w5IYCoTk4Bs&ab_channel=dbestech]

## Steps

### Pre-req

1. Have ExpoGo installed on your mobile, if you want to run the app on mobile, easier to test and run that ways
2. Need a bit of React knowledge
3. Need node installed on the machine
4. Have git installed and configured (easier for version control)
5. If you want have github account and sign in with vscode

### Step 0

1. Download the assets from here [https://www.dbestech.com/rn-ecom-assets.zip]
2. Unzip the file and have the assets folder

### Step 1

1. Create a folder with your project name, cd into that folder
2. Follow the npx expo app command [https://docs.expo.dev/tutorial/create-your-first-app/]
3. Use npx expo with ./ (this would use the project folder itself for creating the app)

### Step 2

0. Copy the below things from the unzipped assets folder in to your project
1. Copy the "fonts" and "images" folder into the assets folder
2. Copy the "constants" folder at the root level
3. Open the "package.json" file, copy all the items under dependencies
4. Open the "package.json" file from the project and replace/paste under the dependencies
5. Delete the node modules folder created by npx
6. Run npm i (this will install all the dependencies into the project)

### Step 3

0. Run the app to see things are running smooth
1. Run **npm start**, scan the QR code in iOS camera app, open expo go from the prompt in phone and app initializes your project
2. Tip to open dev menu on the app in expo go (three finger touch)

### Step 4

1. Create all the necessary folders and files (i have not listed all the folders, just the ones created)
   └─ Proj/
   ├── components/
   │ ├── auth/
   │ ├── cart/
   │ ├── products/
   │ ├── index.js
   │ ├── hook/
   │ ├── navigation/
   │ ├── screens/
   │ ├── Cart.jsx
   │ ├── ProductDetails.jsx
   │ ├── Profile.jsx
   │ ├── Search.jsx
2. Update index.js under constants and remove images on both lines
3. In App.js file add these three lines, these are to load the necessary things when app loads
   import { useFonts } from "expo-font";
   import \* as SplashScreen from "expo-splash-screen"; (ignore the \ markdown is doing things)
   import { useCallback } from "react";
4. Now iterate through the fonts, to bring our custom font into the app
5.
