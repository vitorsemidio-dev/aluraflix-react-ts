module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "airbnb",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint",
      "prettier",
      "react",
      "react-hooks",
    ],
    "rules": {
      "camelcase": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ],
      "import/prefer-default-export": "off",
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "react/jsx-props-no-spreading": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
};
