import { Vector3D } from "./vectors";

export class Matrix3x3 {
  /**
   * Creates a new Matrix3x3 instance.
   * @constructor
   * @param {Vector3D} firstRow - 
   * @param {Vector3D} secondRow -
   * @param {Vector3D} thirdRow - 
   */
  constructor(firstRow, secondRow, thirdRow) {
    this.firstRow = firstRow;
    this.secondRow = secondRow;
    this.thirdRow = thirdRow;
  }

  /**
   * Multiplies this matrix by a vector.
   * @param {Vector3D} v - The vector to be multiplied.
   * @returns {Vector3D} The resulting vector.
   */
  timesVector(v) {
    return new Vector3D(
      this.firstRow.dot(v),
      this.secondRow.dot(v),
      this.thirdRow.dot(v)
    )
  }

  /**
   * Multiplies this matrix by another matrix.
   * @param {Matrix3x3} m - The matrix to be multiplied.
   * @returns {Matrix3x3} The resulting matrix.
   */
  timesMatrix(m) {
    return new Matrix3x3(
      new Vector3D(
        this.firstRow.dot(m.firstColumn()),
        this.firstRow.dot(m.secondColumn()),
        this.firstRow.dot(m.thirdColumn())
      ),
      new Vector3D(
        this.secondRow.dot(m.firstColumn()),
        this.secondRow.dot(m.secondColumn()),
        this.secondRow.dot(m.thirdColumn())
      ),
      new Vector3D(
        this.thirdRow.dot(m.firstColumn()),
        this.thirdRow.dot(m.secondColumn()),
        this.thirdRow.dot(m.thirdColumn())
      )
    )
  }

  /**
   * Calculates the determinant of this matrix.
   * @returns {number} The determinant.
   */
  determinant() {
    return this.firstRow.x * this.secondRow.y * this.thirdRow.z +
           this.firstRow.y * this.secondRow.z * this.thirdRow.x +
           this.firstRow.z * this.secondRow.x * this.thirdRow.y -
           this.firstRow.z * this.secondRow.y * this.thirdRow.x -
           this.firstRow.y * this.secondRow.x * this.thirdRow.z -
           this.firstRow.x * this.secondRow.z * this.thirdRow.y;
  }

  /**
   * Calculates the inverse of this matrix.
   * @returns {Matrix3x3} The inverse matrix.
   */
  inverse() {
    const det = this.determinant();
    if (det === 0) {
      throw new Error('Matrix is not invertible.');
    }
    const invDet = 1 / det;
    const firstRow = new Vector3D(
      invDet * (this.secondRow.y * this.thirdRow.z - this.secondRow.z * this.thirdRow.y),
      invDet * (this.firstRow.z * this.thirdRow.y - this.firstRow.y * this.thirdRow.z),
      invDet * (this.firstRow.y * this.secondRow.z - this.firstRow.z * this.secondRow.y)
    );
    const secondRow = new Vector3D(
      invDet * (this.secondRow.z * this.thirdRow.x - this.secondRow.x * this.thirdRow.z),
      invDet * (this.firstRow.x * this.thirdRow.z - this.firstRow.z * this.thirdRow.x),
      invDet * (this.firstRow.z * this.secondRow.x - this.firstRow.x * this.secondRow.z)
    );
    const thirdRow = new Vector3D(
      invDet * (this.secondRow.x * this.thirdRow.y - this.secondRow.y * this.thirdRow.x),
      invDet * (this.firstRow.y * this.thirdRow.x - this.firstRow.x * this.thirdRow.y),
      invDet * (this.firstRow.x * this.secondRow.y - this.firstRow.y * this.secondRow.x)
    );
    return new Matrix3x3(firstRow, secondRow, thirdRow);
  }

  /**
   * Calculates the transpose of this matrix.
   * @returns {Matrix3x3} The transpose matrix.
   */
  transpose() {
    return new Matrix3x3(
      this.firstColumn(),
      this.secondColumn(),
      this.thirdColumn()
    )
  }

  /**
   * Calculates the trace of this matrix.
   * @returns {number} The trace.
   */
  trace() {
    return this.firstRow.x + this.secondRow.y + this.thirdRow.z;
  }

  /**
   * Calculates the sum of this matrix and another matrix.
   * @param {Matrix3x3} m - The other matrix.
   * @returns {Matrix3x3} The resulting matrix.
   */
  plus(m) {
    return new Matrix3x3(
      this.firstRow.plus(m.firstRow),
      this.secondRow.plus(m.secondRow),
      this.thirdRow.plus(m.thirdRow)
    );
  }

  /**
   * Calculates the difference of this matrix and another matrix.
   * @param {Matrix3x3} m - The other matrix.
   * @returns {Matrix3x3} The resulting matrix.
   */
  minus(m) {
    return new Matrix3x3(
      this.firstRow.minus(m.firstRow),
      this.secondRow.minus(m.secondRow),
      this.thirdRow.minus(m.thirdRow)
    );
  }

  /**
   * Scales this matrix by a scalar value.
   * @param {number} s - The scalar value.
   * @returns {Matrix3x3} The resulting matrix.
   */
  scale(s) {
    return new Matrix3x3(
      this.firstRow.scale(s),
      this.secondRow.scale(s),
      this.thirdRow.scale(s)
    );
  }

  /**
   * Returns the first column of this matrix.
   */
  firstColumn() {
    return new Vector3D(this.firstRow.x, this.secondRow.x, this.thirdRow.x);
  }

  /**
   * Returns the second column of this matrix.
   */
  secondColumn() {
    return new Vector3D(this.firstRow.y, this.secondRow.y, this.thirdRow.y);
  }

  /**
   * Returns the third column of this matrix.
   */
  thirdColumn() {
    return new Vector3D(this.firstRow.z, this.secondRow.z, this.thirdRow.z);
  }
}