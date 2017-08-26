import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import NoteListItem from './NoteListItem';

if (Meteor.isClient) {

    describe('NoteListItem', function() {

        it('should render title in and timestamp', function() {
            const title = "My title here";
            const updateAt = 1503630250520;
            const wrapper = mount( <NoteListItem note={{ title, updateAt }} /> );

            expect(wrapper.find('h5').text()).toBe(title);
            expect(wrapper.find('p').text()).toBe('8/25/17')
        });

        it('should set default title if no title is set', function () {
            const title = "";
            const updateAt = 1503630250520;
            const wrapper = mount( <NoteListItem note={{ title, updateAt }} /> );

            expect(wrapper.find('h5').text()).toBe('Untitled note');
        });

    })

}