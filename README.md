This repo contains tests for Atlas CMMS mobile app

Steps to run the app:
- Run command within the target project: docker compose up -d
- Within the target project: npm install
- Run the emulator in android studio
- Update google-services.json within the project OR comment out google-services plugin
- Within the android directory: ./gradlew assembleDebug --no-daemon
- Run command within mobile directory: npx react-native run-android -- --no-daemon
- Install appium and WebDriverIO
- Run appium and run the test file
  
