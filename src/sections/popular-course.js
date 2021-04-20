import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

const popularCourseData = [
  {
    title:
      'Team management',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content: 'Talent Recruitment',
      },
      {
        content: 'Co-founder relationships and legal agreements',
      },
      {
        content: 'Team charter and social contracts',
      },
      {
        content: 'Team dynamics and conflict management',
      },
      {
        content: 'Team building exercise',
      },
      {
        content: 'Culture development',
      },
    ],
  },
  {
    title: 'Lean startup approach',
    reviewCount: '4.5 (524 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 4,
    expanded: false,
    list: [
      {
        content: 'Entrepreneurship',
      },
      {
        content: 'Mangement',
      },
      {
        content: 'Validated Learning',
      },
      {
        content: 'Innovation Accounting',
      },
      {
        content: 'Build - Measure - Learn',
      },
      {
        content: 'Mid week assigment',
      },
    ],
  },
  {
    title: 'Design thinking',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 People watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Empathise - User centred Research ',
      },
      {
        content: 'Define - Define problem and user personas',
      },
      {
        content: 'Ideate - Big idea Generation',
      },
      {
        content: 'Prototype - Paper proptotype, putting your product on paper',
      },
      {
        content: 'Testing - Engaging potential users iteratively',
      },
    ],
  },
  {
    title: 'Prototyping',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 People watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Sketching',
      },
      {
        content: 'Wireframing',
      },
      {
        content: 'Mockups',
      },
      {
        content: 'Prototype using adobe xd /figma / invision / framer',
      },
    ],
  },
  {
    title: 'MVP development',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'No code solutions',
      },
      {
        content: 'Product roadmapping',
      },
      {
        content: 'Agile methodology',
      },
      {
        content: 'Developer outsourcing',
      },
    ],
  },
  {
    title: 'Pitching',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Investor Pitch deck',
      },
      {
        content: 'Sales pitch deck',
      },
      {
        content: 'Investor and Sales video pitch',
      },
      {
        content: 'Story telling',
      },
    ],
  },
  {
    title: 'Business formalisation',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 People watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Types of businesses',
      },
      {
        content: 'Formalisation process',
      },
      {
        content: 'Shareholding and governance',
      },
      {
        content: 'Compliance',
      },
    ],
  },
  {
    title: 'Finance and accounting',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Cashflow projections',
      },
      {
        content: 'Profit and Loss statement',
      },
      {
        content: 'Balance sheet',
      },
      {
        content: 'Unit ecomonics',
      },
    ],
  },
  {
    title: 'E-Office administration',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Communication tools',
      },
      {
        content: 'Task management',
      },
      {
        content: 'File management',
      },
      {
        content: 'Cloud backups',
      },
    ],
  },
  {
    title: 'Business & Competitive Stratetgy',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Porters five forces ',
      },
      {
        content: 'SWOT analysis',
      },
      {
        content: 'Competitor matrix',
      },
      {
        content: 'Blue ocean vs read ocean markets',
      },
    ],
  },
  {
    title: 'Sales and Marketing',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Bussiness model development',
      },
      {
        content: '4Ps marketing mix',
      },
      {
        content: 'Distribution and Marketing channels',
      },
      {
        content: 'Online Marketing',
      },
    ],
  },
  {
    title: 'Fund raising',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 people watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'Bootstrapping',
      },
      {
        content: 'Equity financing',
      },
      {
        content: 'Debt Financing',
      },
      {
        content: 'Grants and donations ',
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Quality features"
          heading="Our workshops"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
    col: {},
  },
};
