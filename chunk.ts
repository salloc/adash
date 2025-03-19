

export const createBoundaryQueue = (chankSize=1) => {
    let queue: unknown[] = [];

    const isFull = () => queue.length >= chankSize;
    const size = () => queue.length;
    const add = (item: unknown) => {
        if(isFull()) throw new Error("Массив заповнений!");
        queue.push(item);
    }
    const get = () => {
        const res = [...queue];
        queue=[];
        return res;
    }

    return {
        isFull,  size, add, get
    }
};


export const chunk = (arr: unknown[], size=1) => {
    const res = [];
    const boundaryQueue = createBoundaryQueue(size);
    for (const item of arr) {
        boundaryQueue.add(item);
        if(boundaryQueue.isFull()) {
            res.push(boundaryQueue.get()); 
        }
    }
    if(boundaryQueue.size() > 0)res.push(boundaryQueue.get()); 
    return res;
}