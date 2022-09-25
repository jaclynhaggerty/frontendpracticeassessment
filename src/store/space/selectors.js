// getting spaces from store
export const selectSpaces = (store) => store.space.spaces;
// get one specific space from store (for individual space)
export const selectSpaceById = (spaceId) => (store) => {
    return store.space.spaces.find((space) => space.id.toString() === spaceId);
}


