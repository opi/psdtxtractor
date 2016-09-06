"use strict";

var each = require('foreach');
var nanoColor = require('nano-color');
var multiline = require('multiline');
var PSD = require('psd');

var self = module.exports = {
  parseGroup: function (group) {
    each(group.children(), function(child, key, children) {
        var indent = "\t".repeat(child.depth() - 1)
        if (child.type == 'group') {
            console.log(indent+"- Group [" + child.name + "]:");
            self.parseGroup(child);
        }
        else if (child.type == 'layer') {
            self.parseLayer(child);
        }
    })
  },
  parseLayer: function (layer) {
    var indent = "\t".repeat(layer.depth() - 1)

    var exLayer = layer.export();

    // We do care about text layers
    if (typeof exLayer.text !== 'undefined') {
        console.log(indent+"- Text Layer [" + layer.name + "]:");

        // Font family
        var font = exLayer.text.font;
        console.log(indent + "\t- Font: " + font.name)

        // Font sizes
        console.log(indent + "\t- Size(s): " + font.sizes.join(', '))

        // Colors
        each(font.colors, function(color, key) {
            var rgba = "rgba(" +color[0]+","+color[1]+","+color[2]+", "+color[3]+")";
            var rgb = nanoColor.rgb2hex([color[0], color[1], color[2]]).substring(1);
            console.log(indent + "\t- Color "+key+": "+rgba+" or " + rgb +", opacity = "+Math.round(color[3] / 255))
        });

        // Text value
        /*
            TODO: Having some issue with multi-line output 
        */
        // txt = exLayer.text.value
        // // console.log(txt);
        // console.log(indent + "-> Text: ");
        // console.log(multiline(function(){/*
        // %s 
        // */}), txt);
    }
    else {
        console.log(indent+"- Layer [" + layer.name + "]");
    }
  }
};
