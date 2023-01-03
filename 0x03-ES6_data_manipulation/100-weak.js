export const weakMapFromArray = (array) => {
    const map = new WeakMap();
    for (const item of array) {
        map.set(item, item);
    }
    return map;
    }

// export const weakMapFromObject = (obj) => {
//     const map = new WeakMap();
//     for (const key in obj) {
//         map.set(key, obj[key]);
//     }
//     return map;
//     }

