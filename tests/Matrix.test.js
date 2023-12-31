import {Matrix} from '../src/Matrix';
import {Vector} from '../src/Vector';

test('Matrix addition', () => {
  const m1 = new Matrix(
      new Vector(1, 2, 3),
      new Vector(4, 5, 6),
      new Vector(7, 8, 9),
  );
  const m2 = new Matrix(
      new Vector(9, 8, 7),
      new Vector(6, 5, 4),
      new Vector(3, 2, 1),
  );
  expect(m1.plus(m2)).toEqual(
      new Matrix(
          new Vector(10, 10, 10),
          new Vector(10, 10, 10),
          new Vector(10, 10, 10),
      ),
  );
});

test('Matrix subtraction', () => {
  const m1 = new Matrix(
      new Vector(1, 2, 3),
      new Vector(4, 5, 6),
      new Vector(7, 8, 9),
  );
  const m2 = new Matrix(
      new Vector(9, 8, 7),
      new Vector(6, 5, 4),
      new Vector(3, 2, 1),
  );
  expect(m1.minus(m2)).toEqual(
      new Matrix(
          new Vector(-8, -6, -4),
          new Vector(-2, 0, 2),
          new Vector(4, 6, 8),
      ),
  );
});

test('Matrix scaling', () => {
  const m = new Matrix(
      new Vector(1, 2, 3),
      new Vector(4, 5, 6),
      new Vector(7, 8, 9),
  );
  expect(m.scale(2)).toEqual(
      new Matrix(
          new Vector(2, 4, 6),
          new Vector(8, 10, 12),
          new Vector(14, 16, 18),
      ),
  );
});

test('Matrix multiplication', () => {
  const m1 = new Matrix(
      new Vector(1, 2, 3),
      new Vector(4, 5, 6),
      new Vector(7, 8, 9),
  );
  const m2 = new Matrix(
      new Vector(9, 8, 7),
      new Vector(6, 5, 4),
      new Vector(3, 2, 1),
  );
  expect(m1.timesMatrix(m2)).toEqual(
      new Matrix(
          new Vector(30, 24, 18),
          new Vector(84, 69, 54),
          new Vector(138, 114, 90),
      ),
  );
});

test('Matrix determinant', () => {
  const m = new Matrix(
      new Vector(1, 2, 3),
      new Vector(4, 5, 6),
      new Vector(7, 8, 9),
  );
  expect(m.determinant()).toEqual(0);
});

test('Matrix invalid inverse', () => {
  const m = new Matrix(
      new Vector(1, 2, 3),
      new Vector(4, 5, 6),
      new Vector(7, 8, 9),
  );
  expect(() => m.inverse()).toThrow();
});

test('Matrix valid inverse', () => {
  const m = new Matrix(
      new Vector(1, 2, 3),
      new Vector(0, 1, 4),
      new Vector(5, 6, 0),
  );
  expect(m.inverse()).toEqual(
      new Matrix(
          new Vector(-24, 18, 5),
          new Vector(20, -15, -4),
          new Vector(-5, 4, 1),
      ),
  );
});

