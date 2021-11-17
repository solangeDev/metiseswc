const fs = require('fs-extra');  
const concat = require('concat');

(async function build() {
    const files = [
        './dist/wc-footer/runtime.js',
        './dist/wc-footer/polyfills.js',
        './dist/wc-footer/scripts.js',
        './dist/wc-footer/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/wc-footer.js');
    await fs.copyFile(
        './dist/wc-footer/styles.css',
        'elements/styles.css'
    );
})();