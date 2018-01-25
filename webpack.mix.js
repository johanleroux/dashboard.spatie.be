const { mix } = require('laravel-mix');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/css/app.css', 'public/css')

    .copy('resources/assets/css/vendor/cryptofont.min.css', 'public/css/cryptofont.min.css')

	.version()

    .options({
        processCssUrls: false,
    })

    .webpackConfig({
        module: {
            rules: [
                // With the `import-glob-loader` we can use globs in our import
                // statements in css.
                {
                    test: /\.css/,
                    loader: 'import-glob-loader',
                    enforce: 'pre',
                },
            ],
        },
    });
