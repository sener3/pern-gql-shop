const CracoAlias = require("craco-alias");

module.exports = {
    webpack: {
        configure: {
            experiments: {
                topLevelAwait: true,
            },
        },
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                baseUrl: "./src",
                tsConfigPath: "./tsconfig.paths.json",
            },
        },
    ],
};
