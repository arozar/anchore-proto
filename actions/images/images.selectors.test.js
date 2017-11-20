import { mapVulnGroups } from './images.selectors';

describe('image selectors',() =>{

    it('mapVulnGroups creates array of discint strings', () => {

        const valueOne = {severity:'5'};

        const valueTwo = {severity:'6'}


        const values = [valueOne, valueTwo, valueOne, valueTwo, valueOne, valueTwo, valueOne, valueTwo]

        const result = mapVulnGroups(values);

        expect(result.length).toBe(2);
    });
});