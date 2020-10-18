export default class FetchData {
    baseAddress = 'https://api.spacexdata.com/v4';

    getData = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Something went wrong ${res.status}`);
        }
        return await res.json();
    };

    getRocket = async () => await this.getData(this.baseAddress + '/rockets');
    getLaunches = async () => await this.getData(this.baseAddress + '/launches/past');
    getCompanyInfo = async () => await this.getData(this.baseAddress + '/company');
}