module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    ignorePatterns: [
        'oldSrc/*',
        './oldSrc/navigation/index.tsx',
        './oldApp.tsx',
        './types.tsx'
    ]
};
