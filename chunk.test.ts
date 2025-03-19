import { test, expect, describe } from "bun:test";
import { chunk, createBoundaryQueue } from "./chunk";
describe("chunk", () => {
    test("one", () => {
     const data = ['a', 'b', 'c', 'd', 'e']
     const res = chunk(data);
     const expected = [['a'], ['b'], ['c'],[ 'd'], ['e']]
     expect(res).toEqual(expected);
    });
  
    test("two", () => {
        const data = ['a', 'b', 'c', 'd', 'e']
        const res = chunk(data, 2);
        const expected = [['a', 'b'], ['c', 'd'], ['e']]
        expect(res).toEqual(expected);
    });
    test("three", () => {
        const data = ['a', 'b', 'c', 'd', 'e'];
        const res = chunk(data, 3);
        const expected = [['a', 'b', 'c'], ['d', 'e']];
        expect(res).toEqual(expected);
      });
      test.todo("fix this", () => {
        expect(2 * 2).toEqual(4);
      });
  });

  describe("boundary queue", () => {
    test("додавання в чергу", ()=> {
        const boundaryQueue = createBoundaryQueue(2);
        boundaryQueue.add(1);
        boundaryQueue.add(2);
        expect(boundaryQueue.isFull()).toBe(true);
        expect(boundaryQueue.get()).toEqual([1,2]);
    });
    test.todo("отримання з черги массиву");
  })