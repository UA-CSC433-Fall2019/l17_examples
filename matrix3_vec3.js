///
/// matrix3_vec3.js
/// Javascript 3x3 matrix class
/// Joshua A. Levine <josh@email.arizona.edu>
/// 10/28/19
///
/// This script declares the Matrix3v3 class and defines the mathematical
/// operations it uses.  Internally, the storage is 3 Vec3's.  Thus,
/// this code requires vec3.js
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

class Matrix3v3 {
  constructor() {
    this.data = [new Vec3(0,0,0), new Vec3(0,0,0), new Vec3(0,0,0)];
  }

  set(i,j,v) {
    this.data[i].data[j] = v;
  }

  add(m) {
    let out = new Matrix3v3();
    out.data[0] = this.data[0].add(m.data[0])
    out.data[1] = this.data[1].add(m.data[1])
    out.data[2] = this.data[2].add(m.data[2])

    return out;
  }

  sub(m) {
    let out = new Matrix3v3();
    out.data[0] = this.data[0].sub(m.data[0])
    out.data[1] = this.data[1].sub(m.data[1])
    out.data[2] = this.data[2].sub(m.data[2])

    return out;
  }

  negate() {
    let out = new Matrix3v3();
    out.data[0] = this.data[0].negate();
    out.data[1] = this.data[1].negate();
    out.data[2] = this.data[2].negate();

    return out;
  }

  scale(f) {
    let out = new Matrix3v3();
    out.data[0] = this.data[0].scale(f);
    out.data[1] = this.data[1].scale(f);
    out.data[2] = this.data[2].scale(f);

    return out;
  }

  m3mult(m) {
    let out = new Matrix3v3();
    let T = m.transpose();

    out.data[0] = new Vec3(this.data[0].dot(T.data[0]),
                           this.data[0].dot(T.data[1]),
                           this.data[0].dot(T.data[2]));
    out.data[1] = new Vec3(this.data[1].dot(T.data[0]),
                           this.data[1].dot(T.data[1]),
                           this.data[1].dot(T.data[2]));
    out.data[2] = new Vec3(this.data[2].dot(T.data[0]),
                           this.data[2].dot(T.data[1]),
                           this.data[2].dot(T.data[2]));

    return out;
  }

  v3mult(v) {
    let out = new Vec3(this.data[0].dot(v),
                       this.data[1].dot(v),
                       this.data[2].dot(v));

    return out;
  }


  transpose() {
    let out = new Matrix3v3();
    out.data[0] = new Vec3(this.data[0].data[0],
                           this.data[1].data[0],
                           this.data[2].data[0]);
    out.data[1] = new Vec3(this.data[0].data[1],
                           this.data[1].data[1],
                           this.data[2].data[1]);
    out.data[2] = new Vec3(this.data[0].data[2],
                           this.data[1].data[2],
                           this.data[2].data[2]);

    return out;
  }

  identity() {
    this.data[0] = new Vec3(1,0,0);
    this.data[1] = new Vec3(0,1,0);
    this.data[2] = new Vec3(0,0,1);
  }

  clear() {
    this.data[0] = new Vec3(0,0,0);
    this.data[1] = new Vec3(0,0,0);
    this.data[2] = new Vec3(0,0,0);
  }
}
