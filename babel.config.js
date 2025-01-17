module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            globalStates: "./globalStates",
            src: "./src",
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
