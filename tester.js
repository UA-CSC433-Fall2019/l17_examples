///
/// tester.js
/// Javascript test function
/// Joshua A. Levine <josh@email.arizona.edu>
/// 10/28/19
///
/// This script has four speed tests for matrix-vector operations
///

/*
 ***********************************************************************
 
 Copyright (C) 2019, Joshua A. Levine
 University of Arizona
 
 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:
 
 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 
 ***********************************************************************
 */

function test_m3_matrix_vector_mult(n,data) {
  for (let i=0; i<n; i++) {
    let v = new Vec3(data[12*i],data[12*i+1],data[12*i+2]);
    let m = new Matrix3();
    m.data[0] = data[12*i+3];
    m.data[1] = data[12*i+4];
    m.data[2] = data[12*i+5];
    m.data[3] = data[12*i+6];
    m.data[4] = data[12*i+7];
    m.data[5] = data[12*i+8];
    m.data[6] = data[12*i+9];
    m.data[7] = data[12*i+10];
    m.data[8] = data[12*i+11];

    let v2 = m.v3mult(v);
  }
}

function test_m3v3_matrix_vector_mult(n,data) {
  for (let i=0; i<n; i++) {
    let v = new Vec3(data[12*i],data[12*i+1],data[12*i+2]);
    let m = new Matrix3v3();
    m.data[0] = new Vec3(data[12*i+3],data[12*i+4],data[12*i+5]);
    m.data[1] = new Vec3(data[12*i+6],data[12*i+7],data[12*i+8]);
    m.data[2] = new Vec3(data[12*i+9],data[12*i+10],data[12*i+11]);

    let v2 = m.v3mult(v);
  }
}

function test_m3_matrix_matrix_mult(n,data) {
  for (let i=0; i<n; i++) {
    let m = new Matrix3();
    m.data[0] = data[18*i+0];
    m.data[1] = data[18*i+1];
    m.data[2] = data[18*i+2];
    m.data[3] = data[18*i+3];
    m.data[4] = data[18*i+4];
    m.data[5] = data[18*i+5];
    m.data[6] = data[18*i+6];
    m.data[7] = data[18*i+7];
    m.data[8] = data[18*i+8];

    let m2 = new Matrix3();
    m2.data[0] = data[18*i+9];
    m2.data[1] = data[18*i+10];
    m2.data[2] = data[18*i+11];
    m2.data[3] = data[18*i+12];
    m2.data[4] = data[18*i+13];
    m2.data[5] = data[18*i+14];
    m2.data[6] = data[18*i+15];
    m2.data[7] = data[18*i+16];
    m2.data[8] = data[18*i+17];

    let m3 = m.m3mult(m2);
  }
}

function test_m3v3_matrix_matrix_mult(n,data) {
  for (let i=0; i<n; i++) {
    let m = new Matrix3v3();
    m.data[0] = new Vec3(data[18*i+0],data[18*i+1],data[18*i+2]);
    m.data[1] = new Vec3(data[18*i+3],data[18*i+4],data[18*i+5]);
    m.data[2] = new Vec3(data[18*i+6],data[18*i+7],data[18*i+8]);

    let m2 = new Matrix3v3();
    m.data[0] = new Vec3(data[18*i+9],data[18*i+10],data[18*i+11]);
    m.data[1] = new Vec3(data[18*i+12],data[18*i+13],data[18*i+14]);
    m.data[2] = new Vec3(data[18*i+15],data[18*i+16],data[18*i+17]);

    let m3 = m.m3mult(m2);
  }
}


let n = 1000000;
let data = [];

for (let i=0; i<18*n; i++) {
  data.push(Math.random());
}

console.time('test_m3_matrix_vector_mult');
test_m3_matrix_vector_mult(n,data);
console.timeEnd('test_m3_matrix_vector_mult');


console.time('test_m3v3_matrix_vector_mult');
test_m3v3_matrix_vector_mult(n,data);
console.timeEnd('test_m3v3_matrix_vector_mult');


console.time('test_m3_matrix_matrix_mult');
test_m3_matrix_matrix_mult(n,data);
console.timeEnd('test_m3_matrix_matrix_mult');


console.time('test_m3v3_matrix_matrix_mult');
test_m3v3_matrix_matrix_mult(n,data);
console.timeEnd('test_m3v3_matrix_matrix_mult');
