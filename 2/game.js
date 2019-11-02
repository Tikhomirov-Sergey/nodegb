const getUniqItems = (data) => {

    if(!data) return []

    return data.filter(item => {

        const fistIndexOf = data.indexOf(item)
        const lastIndexOf = data.lastIndexOf(item)

        return lastIndexOf != -1 && fistIndexOf != lastIndexOf
    })

    return uniqItems;
}


console.log(getUniqItems([1, 2, 1, 3, 1, 1, 3]))
console.log(getUniqItems([1, 2]))
console.log(getUniqItems([1, 2, 2, 2, 2, 2, 2]))
console.log(getUniqItems([1, 2, 6, 3, 1, 1, 3, 6]))
console.log(getUniqItems(['r', 'h', 'r', 'j']))
console.log(getUniqItems([0, 0, 0]))
console.log(getUniqItems())
console.log(getUniqItems([]))
