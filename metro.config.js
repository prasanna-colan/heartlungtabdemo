const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

// Override or extend the default configuration
const config = {
    resolver: {
        ...defaultConfig.resolver,
        sourceExts: [
            ...(process.env.RN_SRC_EXT ? process.env.RN_SRC_EXT.split(',') : []),
            ...sourceExts,
            "svg"
        ],
        assetExts: assetExts.filter((ext) => ext !== "svg"),
    },
    transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resetCache: true, // Ensure the cache is cleared when changes are made
};

// Merge the configurations and wrap with Reanimated's Metro Config
module.exports = wrapWithReanimatedMetroConfig(mergeConfig(defaultConfig, config));
