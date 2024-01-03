/**
 * Represents a vector.
 * @extends Array
 * @example
 * const v = new Vector(1, 2, 3);
 * console.log(v); // [1, 2, 3]
 */
export class Vector extends Array {
  /**
   * Creates a new vector.
   * @param {...number} args - The vector components.
   * @example
   * const v = new Vector(1, 2, 3);
   * console.log(v); // [1, 2, 3]
   * console.log(v.length); // 3
   */
  constructor(...args) {
    super(...args);
  }

  /**
   * Adds another vector to this vector.
   * @param {Vector} v - The vector to be added.
   * @return {Vector} The resulting vector.
   */
  plus(v) {
    if (this.length !== v.length) {
      throw new Error('Vectors must have the same length');
    }
    return this.map((x, i) => x + v[i]);
  }

  /**
   * Subtracts another vector from this vector.
   * @param {Vector} v - The vector to be subtracted.
   * @return {Vector} The resulting vector.
   */
  minus(v) {
    if (this.length !== v.length) {
      throw new Error('Vectors must have the same length');
    }
    return this.map((x, i) => x - v[i]);
  }

  /**
   * Scales this vector by a scalar value.
   * @param {number} s - The scalar value.
   * @return {Vector} The resulting vector.
   */
  scale(s) {
    return this.map((x) => x * s);
  }

  /**
   * Calculates the dot product of this vector and another vector.
   * @param {Vector} v - The other vector.
   * @return {number} The dot product.
   */
  dot(v) {
    if (this.length !== v.length) {
      throw new Error('Vectors must have the same length');
    }
    return this.reduce((sum, x, i) => sum + x * v[i], 0);
  }

  /**
   * Calculates the cross product of this vector and another vector.
   * @param {Vector} v - The other vector.
   * @return {Vector} The cross product.
   */
  cross(v) {
    if (this.length !== 3 || v.length !== 3) {
      throw new Error('Cross product is only defined for 3D vectors');
    }
    return new Vector(this[1] * v[2] - this[2] * v[1],
        this[2] * v[0] - this[0] * v[2],
        this[0] * v[1] - this[1] * v[0]);
  }

  /**
   * Calculates the magnitude (length) of this vector.
   * @return {number} The magnitude of the vector.
   */
  magnitude() {
    return Math.sqrt(this.dot(this));
  }

  /**
   * Returns a normalized version of this vector.
   * @return {Vector} The normalized vector.
   */
  normalize() {
    return this.scale(1 / this.magnitude());
  }

  /**
   * Returns a string representation of this vector.
   * @return {string} The string representation of the vector.
   */
  toString() {
    return `[${this.join(', ')}]`;
  }

  /**
   * Rotates this vector about an axis by an angle.
   * @param {Vector} axis - The axis of rotation.
   * @param {number} angle - The angle of rotation.
   * @return {Vector} The rotated vector.
   * @example
   * const v = new Vector(1, 0, 0);
   * const axis = new Vector(0, 0, 1);
   * const angle = Math.PI / 2;
   * const w = v.rotateAboutAxis(axis, angle);
   * console.log(w); // [0, 1, 0]
   */
  rotateAboutAxis(axis, angle) {
    const u = axis.normalize();
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const t = 1 - c;
    const row1 = new Vector(
        t * u[0] * u[0] + c,
        t * u[0] * u[1] - s * u[2],
        t * u[0] * u[2] + s * u[1],
    );
    const row2 = new Vector(
        t * u[0] * u[1] + s * u[2],
        t * u[1] * u[1] + c,
        t * u[1] * u[2] - s * u[0],
    );
    const row3 = new Vector(
        t * u[0] * u[2] - s * u[1],
        t * u[1] * u[2] + s * u[0],
        t * u[2] * u[2] + c,
    );
    return new Vector(row1.dot(this), row2.dot(this), row3.dot(this));
  }

  /**
   * Calculates the angle between this vector and another vector.
   * @param {Vector} v - The other vector.
   * @return {number} The angle between the vectors.
   */
  getAngle(v) {
    return Math.acos(this.dot(v) / (this.magnitude() * v.magnitude()));
  }
}
