/* eslint-disable */
import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import Thumbnail from '../src/view/thumbnail-view';

describe('thumbnail view', () => {
    it('thumbnail display', () => {
        const rendered = shallow(<Thumbnail array={[]} />);
        expect(toJson(rendered)).toMatchSnapshot();
    });
});