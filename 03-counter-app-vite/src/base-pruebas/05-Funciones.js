export const getBand = () => ({
    style: 'Heavy metal',
    nameB: 'Metallica'
})

const b = getBand();

export const getActiveBand = (b) =>({
    style: 'Heavy metal',
    nameB: b,
})
