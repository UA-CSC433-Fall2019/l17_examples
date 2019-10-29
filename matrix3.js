///
/// matrix3.js
/// Javascript 3x3 matrix class
/// Joshua A. Levine <josh@email.arizona.edu>
/// 10/28/19
///
/// This script declares the Matrix3 class and defines the mathematical
/// operations it uses.  Internally, the storage is an array of 9
/// values.  
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

class Matrix3 {
  constructor() {
    this.data = new Array(9);
  }

  set(i,j,v) {
    this.data[i*3+j] = v;
  }

  add(m) {
    let out = new Matrix3();
    out.data[0] = this.data[0] + m.data[0];
    out.data[1] = this.data[1] + m.data[1];
    out.data[2] = this.data[2] + m.data[2];
    out.data[3] = this.data[3] + m.data[3];
    out.data[4] = this.data[4] + m.data[4];
    out.data[5] = this.data[5] + m.data[5];
    out.data[6] = this.data[6] + m.data[6];
    out.data[7] = this.data[7] + m.data[7];
    out.data[8] = this.data[8] + m.data[8];

    return out;
  }

  sub(m) {
    let out = new Matrix3();
    out.data[0] = this.data[0] - m.data[0];
    out.data[1] = this.data[1] - m.data[1];
    out.data[2] = this.data[2] - m.data[2];
    out.data[3] = this.data[3] - m.data[3];
    out.data[4] = this.data[4] - m.data[4];
    out.data[5] = this.data[5] - m.data[5];
    out.data[6] = this.data[6] - m.data[6];
    out.data[7] = this.data[7] - m.data[7];
    out.data[8] = this.data[8] - m.data[8];

    return out;
  }

  negate() {
    let out = new Matrix3();
    out.data[0] = -this.data[0];
    out.data[1] = -this.data[1];
    out.data[2] = -this.data[2];
    out.data[3] = -this.data[3];
    out.data[4] = -this.data[4];
    out.data[5] = -this.data[5];
    out.data[6] = -this.data[6];
    out.data[7] = -this.data[7];
    out.data[8] = -this.data[8];

    return out;
  }

  scale(f) {
    let out = new Matrix3();
    out.data[0] = this.data[0] * f;
    out.data[1] = this.data[1] * f;
    out.data[2] = this.data[2] * f;
    out.data[3] = this.data[3] * f;
    out.data[4] = this.data[4] * f;
    out.data[5] = this.data[5] * f;
    out.data[6] = this.data[6] * f;
    out.data[7] = this.data[7] * f;
    out.data[8] = this.data[8] * f;

    return out;
  }

  m3mult(m) {
    let out = new Matrix3();
    out.data[0] = this.data[0] * m.data[0] + 
                  this.data[1] * m.data[3] +
                  this.data[2] * m.data[6];
    out.data[1] = this.data[0] * m.data[1] + 
                  this.data[1] * m.data[4] +
                  this.data[2] * m.data[7];
    out.data[2] = this.data[0] * m.data[2] + 
                  this.data[1] * m.data[5] +
                  this.data[2] * m.data[8];

    out.data[3] = this.data[3] * m.data[0] + 
                  this.data[4] * m.data[3] +
                  this.data[5] * m.data[6];
    out.data[4] = this.data[3] * m.data[1] + 
                  this.data[4] * m.data[4] +
                  this.data[5] * m.data[7];
    out.data[5] = this.data[3] * m.data[2] + 
                  this.data[4] * m.data[5] +
                  this.data[5] * m.data[8];

    out.data[6] = this.data[6] * m.data[0] + 
                  this.data[7] * m.data[3] +
                  this.data[8] * m.data[6];
    out.data[7] = this.data[6] * m.data[1] + 
                  this.data[7] * m.data[4] +
                  this.data[8] * m.data[7];
    out.data[8] = this.data[6] * m.data[2] + 
                  this.data[7] * m.data[5] +
                  this.data[8] * m.data[8];

    return out;
  }

  v3mult(v) {
    let out = new Vec3(this.data[0]*v.data[0] + this.data[1]*v.data[1] + this.data[2]*v.data[2],
                       this.data[3]*v.data[0] + this.data[4]*v.data[1] + this.data[5]*v.data[2],
                       this.data[6]*v.data[0] + this.data[7]*v.data[1] + this.data[8]*v.data[2]);

    return out;
  }


  transpose() {
    let out = new Matrix3();
    out.data[0] = this.data[0];
    out.data[1] = this.data[3];
    out.data[2] = this.data[6];
    out.data[3] = this.data[1];
    out.data[4] = this.data[4];
    out.data[5] = this.data[7];
    out.data[6] = this.data[2];
    out.data[7] = this.data[5];
    out.data[8] = this.data[8];

    return out;
  }

  identity() {
    this.data[0] = 1;
    this.data[1] = 0;
    this.data[2] = 0;
    this.data[3] = 0;
    this.data[4] = 1;
    this.data[5] = 0;
    this.data[6] = 0;
    this.data[7] = 0;
    this.data[8] = 1;
  }

  clear() {
    this.data[0] = 0;
    this.data[1] = 0;
    this.data[2] = 0;
    this.data[3] = 0;
    this.data[4] = 0;
    this.data[5] = 0;
    this.data[6] = 0;
    this.data[7] = 0;
    this.data[8] = 0;
  }
}
