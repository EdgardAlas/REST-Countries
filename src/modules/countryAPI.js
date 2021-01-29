const axios = require('axios')

const methods = {
    byRegion: async (region) => {
        try {
            const { data } = await axios.get(`https://restcountries.eu/rest/v2/region/${region}?fields=name;capital;region;population;flag;alpha2Code
            `)
            return data
        } catch (error) {
            console.error(`Error in query`);
        }
    },
    all: async () => {
        try {
            const { data } = await axios.get(`https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;alpha2Code;region`)
            return data
        } catch (error) {
            console.error(`Error in query`);
        }
    },
    byCode: async (code) => {
        try {
            const { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}?fields=name;capital;population;flag;borders;alpha2Code;currencies;languages;topLevelDomain;subregion;nativeName;region`)
            return data
        } catch (error) {
            console.error(`Error in query`);
        }
    },
    borders: async (codes) => {
        try {
            const { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${codes}&fields=name;alpha2Code`)
            return data
        } catch (error) {
            console.error(`Error in query`);
        }
    }

}

module.exports = methods
