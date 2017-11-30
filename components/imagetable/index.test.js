import React from 'react';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';
import ImageTable from './index';

describe('ImageTable', () => {

    const testImageDigest = '890892304';

    beforeEach(() => {
        props = {
            images: [{ imageDigest: testImageDigest }],
            selectItem: jest.fn()
        };
    });

    let props = {};

    const setupVulnTable = (props) => mount(<ImageTable {...props} />);

    it('calls selectItem with imageDigest', () => {

        const component = setupVulnTable(props);

        const elementInFirstRow = component.find('.rt-tr-group').first().find('.rt-td').first();

        elementInFirstRow.simulate('click');

        expect(props.selectItem.mock.calls.length).toBe(1);
        expect(props.selectItem.mock.calls[0][0]).toBe(testImageDigest);
    })
});