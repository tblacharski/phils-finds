import { defineArrayMember, defineField } from 'sanity';
import heading from './sections/heading'
import richText from './sections/richText'
import paragraph from './sections/paragraph'
import button from './sections/button'
import buttons from './sections/buttons'
import hero from './sections/hero'
import mediaText from './sections/mediaText'
import faqsContent from './sections/faqsContent'
import logoGrid from './sections/logoGrid'
import blogLists from './sections/blogLists'
import cta from './sections/cta'
import subscribe from './sections/subscribe'
import contactForm from './sections/contactForm'
import featuresSteps from './sections/featuresSteps'
import cards from './sections/cards'
import separator from './sections/separator';

const pageSectionsObjects = [
  heading, 
  richText, 
  paragraph, 
  button, 
  buttons, 
  hero,
  mediaText,
  faqsContent,
  logoGrid,
  blogLists,
  cta,
  subscribe,
  contactForm,
  featuresSteps,
  cards,
  separator
];

export default defineField({
  name: 'bodyContent',
  title: 'Body Content',
  type: 'array',
  of: pageSectionsObjects?.map(({ name }) => defineArrayMember({ type: name })),
  group: 'content',
});
