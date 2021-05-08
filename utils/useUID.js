
export const useUID = () => {
    if (typeof window !== 'undefined') {
        let data = sessionStorage.getItem('uid');
        return data
    }
    if (typeof window == 'undefined') {
        return undefined;
    }
}