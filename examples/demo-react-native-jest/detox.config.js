module.exports = {
  "testRunner": "jest",
  "runnerConfig": 'e2eExplicitRequire/config.json',
  "specs": 'e2eExplicitRequire',
  "behavior": {
    "init": {
      "exposeGlobals": false,
    },
  },
  "apps": {
    "ios.debug": {
      "type": "ios.app",
      "binaryPath": "../demo-react-native/ios/build/Build/Products/Debug-iphonesimulator/example.app",
      "build": "xcodebuild -project ios/example.xcodeproj -UseNewBuildSystem=NO -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build"
    },
    "ios.release": {
      "type": "ios.app",
      "binaryPath": "../demo-react-native/ios/build/Build/Products/Release-iphonesimulator/example.app",
    },
    "android.release": {
      "type": "android.apk",
      "binaryPath": "../demo-react-native/android/app/build/outputs/apk/release/app-release.apk",
    }
  },
  "devices": {
    "simulator": {
      "type": "ios.simulator",
      "device": {
        "type": "iPhone 11 Pro"
      }
    },
    "emulator": {
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_API_28"
      }
    }
  },
  "configurations": {
    "ios.sim.debug": {
      "device": "simulator",
      "app": "ios.debug"
    },
    "ios.sim.release": {
      "device": "simulator",
      "app": "ios.release",
      "artifacts": {
        // Do not use in your projects unless you really need custom paths.
        // This section serves just as an example that you can locally override
        // some artifacts, behavior and session settings

        "pathBuilder": "./e2e/detox.pathbuilder.ios.js"
      }
    },
    "android.emu.release": {
      "device": "emulator",
      "app": "android.release",
      "artifacts": {
        // Do not use in your projects unless you really need custom paths.
        // This section serves just as an example that you can locally override
        // some artifacts, behavior and session settings

        "pathBuilder": "./e2e/detox.pathbuilder.android.js"
      }
    }
  }
};
