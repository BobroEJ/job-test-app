export default class TService {
    async getData() {
        let res = await fetch('./data.json');
        res = res.json();
        if (!res.ok) {
            console.log('Error')
        }
        return await res;
    }
}