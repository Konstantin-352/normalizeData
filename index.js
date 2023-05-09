"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var posts_1 = require("./posts");
var normalizeData = function (posts) {
    var allIds = [];
    var byId = {};
    posts.forEach(function (item) {
        allIds.push(item.id);
        byId[item.id] = __assign({}, item);
    });
    return {
        byId: byId,
        allIds: allIds
    };
};
console.log(normalizeData(posts_1.posts));
