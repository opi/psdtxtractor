#!/usr/bin/env node

var fs = require('fs');
var PSD = require('psd');
var psdTxtractor = require('./psdtxtractor');

// Get args
var args = process.argv.slice(2);

// First argument (fileath) is required
if (typeof args[0] === 'undefined') {
    console.log("ERROR: Undefined file path", args[0]);
    process.exit(1);
}

// First argument must be a correct filepath
try {
    fs.statSync(args[0]).isFile();
}
catch (e) {
    console.log("ERROR: %s is not a file", args[0]);
    process.exit(1);
}

// Load and pars PSD file
var psd = PSD.fromFile(args[0]);
psd.parse();

// Get PSD tree
psdTree = psd.tree();

// Parse groups and layers
psdTxtractor.parseGroup(psdTree);

// Clean exit
process.exit();