// Copyright (c) 2017 Benedikt Meurer
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const Benchmark = require("benchmark");

const suite = new Benchmark.Suite();

suite.add(require("./acorn-benchmark"));
suite.add(require("./babel-benchmark"));
suite.add(require("./babylon-benchmark"));
suite.add(require("./buble-benchmark"));
suite.add(require("./chai-benchmark"));
suite.add(require("./coffeescript-benchmark"));
suite.add(require("./espree-benchmark"));
suite.add(require("./esprima-benchmark"));
suite.add(require("./jshint-benchmark"));
suite.add(require("./lebab-benchmark"));
suite.add(require("./prepack-benchmark"));
suite.add(require("./prettier-benchmark"));
suite.add(require("./source-map-benchmark"));
suite.add(require("./typescript-benchmark"));
suite.add(require("./uglify-js-benchmark"));
suite.add(require("./uglify-es-benchmark"));

module.exports = suite;
