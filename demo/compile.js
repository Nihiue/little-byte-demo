const path = require('path');
const littleByte = require('little-byte').default;

littleByte.compiler.compileFile(path.join(__dirname, 'hello-export.js'));
