///
/// vec3.js
/// Javascript three-dimension vector class
/// Joshua A. Levine <josh@email.arizona.edu>
/// 09/20/19
///
/// This script declares the Vec3 class and defines the mathematical
/// operations it uses  
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

class Vec3 {
  constructor(a,b,c) {
    this.data = [a,b,c];
  }

  sum() {
    return this.data[0]+this.data[1]+this.data[2];
  }

  squared_length() {
    return this.dot(this);
  }

  length() {
    return Math.sqrt(this.squared_length());
  }

  normalize() {
    let len = this.length();

    this.data[0] /= len;
    this.data[1] /= len;
    this.data[2] /= len;
  }

  normalized() {
    return this.scale(1.0/this.length());
  }


  add(v) {
    return new Vec3(this.data[0] + v.data[0],
                    this.data[1] + v.data[1],
                    this.data[2] + v.data[2]);
  }

  scaleAdd(v,f) {
    return new Vec3(this.data[0] + f*v.data[0],
                    this.data[1] + f*v.data[1],
                    this.data[2] + f*v.data[2]);
  }

  sub(v) {
    return new Vec3(this.data[0] - v.data[0],
                    this.data[1] - v.data[1],
                    this.data[2] - v.data[2]);
  }

  negate() {
    return new Vec3(-this.data[0],
                    -this.data[1],
                    -this.data[2]);
  }

  scale(f) {
    return new Vec3(f*this.data[0],
                    f*this.data[1],
                    f*this.data[2]);
  }



  dot(v) {
    let out = 0;
    out += this.data[0]*v.data[0];
    out += this.data[1]*v.data[1];
    out += this.data[2]*v.data[2];
    
    return out;
  }

  cross(v) {
    return new Vec3(this.data[1]*v.data[2] - this.data[2]*v.data[1],
                    this.data[2]*v.data[0] - this.data[0]*v.data[2],
                    this.data[0]*v.data[1] - this.data[1]*v.data[0]);
  }

  static fromArray(a) {
    return new Vec3(a[0],a[1],a[2]);
  }
}
