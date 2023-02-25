export const setCounterValueAC = (currentValue: number) => {
    return {type: 'SET-COUNTER-VALUE', currentValue} as const
}