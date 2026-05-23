// wdio.conf.ts
export const config = {
    runner: 'local',
    specs: ['./specs/**/*.spec.ts'],
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT || '4723', 10),
    logLevel: 'info',
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel 4 API 30',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'C:/path/to/built/atlas-app.apk',
        'appium:appPackage': 'com.android.settings',
        'appium:appActivity': '.Settings',
    }],
    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    }
};
