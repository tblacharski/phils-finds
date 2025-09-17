import { defineField } from 'sanity';

export default defineField({
    name: 'textAlign',
    title: 'Text Alignment',
    type: 'string',
    options: {
        list: ['left','center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
    },
    initialValue: 'left'
})