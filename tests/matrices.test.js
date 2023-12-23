import { Matrix3x3 } from "../src/matrices";
import { Vector3D } from "../src/vectors";

test("Matrix3x3 addition", () => {
  const m1 = new Matrix3x3(
    new Vector3D(1, 2, 3),
    new Vector3D(4, 5, 6),
    new Vector3D(7, 8, 9)
  );
  const m2 = new Matrix3x3(
    new Vector3D(9, 8, 7),
    new Vector3D(6, 5, 4),
    new Vector3D(3, 2, 1)
  );
  expect(m1.plus(m2)).toEqual(
    new Matrix3x3(
      new Vector3D(10, 10, 10),
      new Vector3D(10, 10, 10),
      new Vector3D(10, 10, 10)
    )
  );
});

test("Matrix3x3 subtraction", () => {
  const m1 = new Matrix3x3(
    new Vector3D(1, 2, 3),
    new Vector3D(4, 5, 6),
    new Vector3D(7, 8, 9)
  );
  const m2 = new Matrix3x3(
    new Vector3D(9, 8, 7),
    new Vector3D(6, 5, 4),
    new Vector3D(3, 2, 1)
  );
  expect(m1.minus(m2)).toEqual(
    new Matrix3x3(
      new Vector3D(-8, -6, -4),
      new Vector3D(-2, 0, 2),
      new Vector3D(4, 6, 8)
    )
  );
});

test("Matrix3x3 scaling", () => {
  const m = new Matrix3x3(
    new Vector3D(1, 2, 3),
    new Vector3D(4, 5, 6),
    new Vector3D(7, 8, 9)
  );
  expect(m.scale(2)).toEqual(
    new Matrix3x3(
      new Vector3D(2, 4, 6),
      new Vector3D(8, 10, 12),
      new Vector3D(14, 16, 18)
    )
  );
});

test("Matrix3x3 multiplication", () => {
  const m1 = new Matrix3x3(
    new Vector3D(1, 2, 3),
    new Vector3D(4, 5, 6),
    new Vector3D(7, 8, 9)
  );
  const m2 = new Matrix3x3(
    new Vector3D(9, 8, 7),
    new Vector3D(6, 5, 4),
    new Vector3D(3, 2, 1)
  );
  expect(m1.timesMatrix(m2)).toEqual(
    new Matrix3x3(
      new Vector3D(30, 24, 18),
      new Vector3D(84, 69, 54),
      new Vector3D(138, 114, 90)
    )
  );
});

test("Matrix3x3 determinant", () => {
  const m = new Matrix3x3(
    new Vector3D(1, 2, 3),
    new Vector3D(4, 5, 6),
    new Vector3D(7, 8, 9)
  );
  expect(m.determinant()).toEqual(0);
});

test("Matrix3x3 invalid inverse", () => {
  const m = new Matrix3x3(
    new Vector3D(1, 2, 3),
    new Vector3D(4, 5, 6),
    new Vector3D(7, 8, 9)
  );
  expect(() => m.inverse()).toThrow();
});

test("Matrix3x3 valid inverse", () => {
  const m = new Matrix3x3(
    new Vector3D(1, 2, 3),
    new Vector3D(0, 1, 4),
    new Vector3D(5, 6, 0)
  );
  expect(m.inverse()).toEqual(
    new Matrix3x3(
      new Vector3D(-24, 18, 5),
      new Vector3D(20, -15, -4),
      new Vector3D(-5, 4, 1)
    )
  );
});

