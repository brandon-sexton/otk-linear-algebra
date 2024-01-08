import {Vector} from './Vector';

/**
 * Represents a matrix.
 * @extends Array
 * @example
 * const m = new Matrix(
 * new Vector(1, 2, 3),
 * new Vector(4, 5, 6),
 * new Vector(7, 8, 9)
 * );
 */
export class Matrix extends Array {
  /**
   * Creates a new matrix.
   * @param {...Vector} args - The matrix rows.
   * @example
   * const m = new Matrix(
   *  new Vector(1, 2, 3),
   * new Vector(4, 5, 6),
   * new Vector(7, 8, 9)
   * );
   */
  constructor(...args) {
    super(...args);
  }

  /**
   * Multiplies this matrix by a vector.
   * @param {Vector} v - The vector to be multiplied.
   * @return {Vector} The resulting vector.
   */
  timesVector(v) {
    if (this.length !== v.length) {
      throw new Error('Matrix and vector must have the same length');
    }
    return new Vector(...this.map((row) => row.dot(v)));
  }

  /**
   * Multiplies this matrix by another matrix.
   * @param {Matrix} m - The matrix to be multiplied.
   * @return {Matrix} The resulting matrix.
   */
  timesMatrix(m) {
    if (this.length !== m.length) {
      throw new Error('Matrices must have the same length');
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const row = [];
      for (let j = 0; j < m.length; j++) {
        const column = m.getColumn(j);
        const dotProduct = this[i].dot(column);
        row.push(dotProduct);
      }
      result.push(new Vector(...row));
    }
    return new Matrix(...result);
  }

  /**
   * Calculates the determinant of this matrix.
   * @return {number} The determinant.
   */
  determinant() {
    if (this.length === 2) {
      // Base case for 2x2 matrix
      return this[0][0] * this[1][1] - this[0][1] * this[1][0];
    } else {
      let det = 0;
      for (let i = 0; i < this.length; i++) {
        const subMatrix = this.slice(1).map(
            (row) => row.filter((_, j) => j !== i));
        const cofactor = this[0][i] * Math.pow(-1, i) *
        new Matrix(...subMatrix).determinant();
        det += cofactor;
      }
      return det;
    }
  }

  /**
   * Calculates the inverse of this matrix.
   * @return {Matrix} The inverse matrix.
   */
  inverse() {
    const det = this.determinant();
    if (det === 0) {
      throw new Error('Matrix is not invertible.');
    }
    const cofactors = [];
    for (let i = 0; i < this.length; i++) {
      const cofactorRow = [];
      for (let j = 0; j < this.length; j++) {
        const subMatrix = this.filter((_, k) => k !== i).map(
            (row) => row.filter((_, l) => l !== j));
        cofactorRow.push(Math.pow(-1, i + j) *
        new Matrix(...subMatrix).determinant());
      }
      cofactors.push(cofactorRow);
    }
    const cofactorMatrix = new Matrix(...cofactors);
    const adjugateMatrix = cofactorMatrix.transpose();
    const inverseMatrix = adjugateMatrix.scale(1 / det);
    return new Matrix(...inverseMatrix);
  }

  /**
   * Calculates the transpose of this matrix.
   * @return {Matrix} The transpose matrix.
   */
  transpose() {
    const transposeMatrix = [];
    for (let i = 0; i < this.length; i++) {
      const column = this.getColumn(i);
      transposeMatrix.push(column);
    }
    return new Matrix(...transposeMatrix);
  }

  /**
   * Calculates the trace of this matrix.
   * @return {number} The trace.
   */
  trace() {
    let trace = 0;
    for (let i = 0; i < this.length; i++) {
      trace += this[i][i];
    }
    return trace;
  }

  /**
   * Returns the column at the specified index.
   * @param {number} i - The index of the column.
   * @return {Vector} The column vector.
   */
  getColumn(i) {
    const column = [];
    for (let j = 0; j < this.length; j++) {
      column.push(this[j][i]);
    }
    return new Vector(...column);
  }

  /**
   * Calculates the difference of this matrix and another matrix.
   * @param {Matrix} m - The other matrix.
   * @return {Matrix} The resulting matrix.
   */
  minus(m) {
    if (this.length !== m.length) {
      throw new Error('Matrices must have the same length');
    }
    return this.map((row, i) => row.minus(m[i]));
  }

  /**
   * Calculates the sum of this matrix and another matrix.
   * @param {Matrix} m - The other matrix.
   * @return {Matrix} The resulting matrix.
   */
  plus(m) {
    if (this.length !== m.length) {
      throw new Error('Matrices must have the same length');
    }
    return this.map((row, i) => row.plus(m[i]));
  }

  /**
   * Scales this matrix by a scalar value.
   * @param {number} s - The scalar value.
   * @return {Matrix} The resulting matrix.
   */
  scale(s) {
    return this.map((row) => row.scale(s));
  }
}
