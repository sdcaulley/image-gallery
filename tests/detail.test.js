/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import List from '../src/view/list-view';

describe('list display', () => {
    it('list display', () => {
        const rendered = shallow(<List array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});