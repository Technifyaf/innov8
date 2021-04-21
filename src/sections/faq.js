import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import BlockTitle from 'components/block-title';

const accordionData = [
  {
    isExpanded: false,
    title: 'Why do I need a team to sign up',
    contents: (
      <div>
       You a need a team inorder to share labour, work collabortively with complementary skillsets. 
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'What skills should be included in my team',
    contents: (
      <div>
        Have a technical member who be respnsible for coding. Have an accountant who will do the numbers. Have a leader/ project manager who will do everything else and understands the problem fully.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Is there funding at the end',
    contents: (
      <div>
        Cash prizes will be awarded to best performing teams on Demo Day.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Will there be post programe support for my business after the programe',
    contents: (
      <div>
       Yes , you will get a discounted consultation service from Technify.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Frequent Question"
          heading="Do you have any question?"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
    },
  },
};
