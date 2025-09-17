import { defineField } from 'sanity';

export default defineField({
    name: 'level',
    title: 'Level',
    type: 'string',
    options: {
        list: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        layout: 'radio',
        direction: 'horizontal',
    },
    initialValue: 'h2',
})