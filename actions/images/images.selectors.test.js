import { mapVulnGroups, getLatestbyDate } from './images.selectors';

describe('image selectors',() =>{

    it('mapVulnGroups creates array of discint strings', () => {

        const valueOne = {severity:'5'};

        const valueTwo = {severity:'6'}


        const values = [valueOne, valueTwo, valueOne, valueTwo, valueOne, valueTwo, valueOne, valueTwo]

        const result = mapVulnGroups(values);

        expect(result.length).toBe(3);
    });

    it('getLatestByDate returns undefined if no array is passed', () =>{
        
                const result = getLatestbyDate({});
        
                expect(result).toBeUndefined();
            });
        
            it('getLatestByDate returns first is length of one', () => {
                const testRecord = {};
        
                const result = getLatestbyDate([testRecord]);
        
                expect(result).toBe(testRecord);
            });
        
            it('getLatestByDate returns newest by last_updated', () => {
                const olderDate = new Date('2000-10-19T18:44:24')
                ,newerDate = new Date('2017-11-19T18:44:24');
        
                const details = [{last_updated: olderDate}, { last_updated: newerDate}];
        
                const result = getLatestbyDate(details);
        
                expect(result.last_updated).toBe(newerDate);
            });
        
            it('getLatestByDate uses created_at when last_updated falsy', () => {
                const olderDate = new Date('2000-10-19T18:44:24')
                ,newerDate = new Date('2017-11-19T18:44:24');
        
                const details = [{ created_at: newerDate}, {created_at: olderDate}];
        
                const result = getLatestbyDate(details);
        
                expect(result.created_at).toBe(newerDate);
            });
});