import React from 'react';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';
import VulnTable from './index';

describe('VulnTable', () => {

    const testUrl = 'foo.com';

    beforeEach(() => {
        props = {
            vulnData: [{url: testUrl}],
            severityOptions: [],
            navigateToUrl: jest.fn(),
            selectedImage: {}
        };
    });

    let props = {};

    const setupVulnTable = (props) => mount(<VulnTable {...props} />);

    it('calls navigate to url on click of row member with url', () => {

        const component = setupVulnTable(props);

        const elementInFirstRow = component.find('.rt-tr-group').first().find('.rt-td').first();

        elementInFirstRow.simulate('click');

        expect(props.navigateToUrl.mock.calls.length).toBe(1);
        expect(props.navigateToUrl.mock.calls[0][0]).toBe(testUrl);
    })
});