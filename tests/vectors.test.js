import { Vector3D } from '../src/vectors';

test('Vector3D addition', () => {
  const v1 = new Vector3D(1, 2, 3);
  const v2 = new Vector3D(4, 5, 6);
  expect(v1.plus(v2)).toEqual(new Vector3D(5, 7, 9));
});

test('Vector3D subtraction', () => {
  const v1 = new Vector3D(1, 2, 3);
  const v2 = new Vector3D(4, 5, 6);
  expect(v1.minus(v2)).toEqual(new Vector3D(-3, -3, -3));
});

test('Vector3D scaling', () => {
  const v = new Vector3D(1, 2, 3);
  expect(v.scale(2)).toEqual(new Vector3D(2, 4, 6));
});

test('Vector3D dot product', () => {
  const v1 = new Vector3D(1, 2, 3);
  const v2 = new Vector3D(4, 5, 6);
  expect(v1.dot(v2)).toEqual(32);
});

test('Vector3D cross product', () => {
  const v1 = new Vector3D(1, 2, 3);
  const v2 = new Vector3D(4, 5, 6);
  expect(v1.cross(v2)).toEqual(new Vector3D(-3, 6, -3));
});
