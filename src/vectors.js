export class Vector3D {
  /**
   * Creates a new Vector3D instance.
   * @constructor
   * @param {number} x - The x-coordinate of the vector.
   * @param {number} y - The y-coordinate of the vector.
   * @param {number} z - The z-coordinate of the vector.
   */
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Adds another vector to this vector.
   * @param {Vector3D} v - The vector to be added.
   * @returns {Vector3D} The resulting vector.
   */
  plus(v) {
    return new Vector3D(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  /**
   * Subtracts another vector from this vector.
   * @param {Vector3D} v - The vector to be subtracted.
   * @returns {Vector3D} The resulting vector.
   */
  minus(v) {
    return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  /**
   * Scales this vector by a scalar value.
   * @param {number} s - The scalar value.
   * @returns {Vector3D} The resulting vector.
   */
  scale(s) {
    return new Vector3D(this.x * s, this.y * s, this.z * s);
  }

  /**
   * Calculates the dot product of this vector and another vector.
   * @param {Vector3D} v - The other vector.
   * @returns {number} The dot product.
   */
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  /**
   * Calculates the cross product of this vector and another vector.
   * @param {Vector3D} v - The other vector.
   * @returns {Vector3D} The cross product.
   */
  cross(v) {
    return new Vector3D(this.y * v.z - this.z * v.y, 
              this.z * v.x - this.x * v.z, 
              this.x * v.y - this.y * v.x);
  }

  /**
   * Calculates the magnitude (length) of this vector.
   * @returns {number} The magnitude of the vector.
   */
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  /**
   * Returns a normalized version of this vector.
   * @returns {Vector3D} The normalized vector.
   */
  normalize() {
    const len = this.magnitude();
    return new Vector3D(this.x / len, this.y / len, this.z / len);
  }

  /**
   * Returns a string representation of this vector.
   * @returns {string} The string representation of the vector.
   */
  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}