module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@contexts": "./src/contexts",
            "@images": "./src/images",
            "@config": "./src/config",
            "@hooks": "./src/hooks",
            "@localization": "./src/localization",
          },
        },
      ],
      ["module:react-native-dotenv"],
    ],
  };
};
