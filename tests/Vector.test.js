import {Vector} from '../src/Vector';

test('Vector addition', () => {
  const v1 = new Vector(1, 2, 3);
  const v2 = new Vector(4, 5, 6);
  expect(v1.plus(v2)).toEqual(new Vector(5, 7, 9));
});

test('Vector subtraction', () => {
  const v1 = new Vector(1, 2, 3);
  const v2 = new Vector(4, 5, 6);
  expect(v1.minus(v2)).toEqual(new Vector(-3, -3, -3));
});

test('Vector scaling', () => {
  const v = new Vector(1, 2, 3);
  expect(v.scale(2)).toEqual(new Vector(2, 4, 6));
});

test('Vector dot product', () => {
  const v1 = new Vector(1, 2, 3);
  const v2 = new Vector(4, 5, 6);
  expect(v1.dot(v2)).toEqual(32);
});

test('Vector cross product', () => {
  const v1 = new Vector(1, 2, 3);
  const v2 = new Vector(4, 5, 6);
  expect(v1.cross(v2)).toEqual(new Vector(-3, 6, -3));
});

test('Vector rotation', () => {
  const v = new Vector(1, 0, 0);
  const axis = new Vector(0, 0, 1);
  const answer = new Vector(0, 1, 0);
  const result = v.rotateAboutAxis(axis, Math.PI / 2);
  expect(result[0]).toBeCloseTo(answer[0]);
  expect(result[1]).toBeCloseTo(answer[1]);
  expect(result[2]).toBeCloseTo(answer[2]);
});
