import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import { Notes } from '../api/notes';

export const NoteList = (props) => {
    return (
        <div>
            <NoteListHeader/>
            {props.notes.map((note) => {
                return <NoteListItem key={note._id} note={note}/>
            })}
        </div>
    );
};

NoteList.propTypes = {
    notes: React.PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('notes');

    return {
        notes: Notes.find().fetch()
    };

}, NoteList);