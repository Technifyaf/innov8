import React, { useState } from 'react';
import { Box, Grid, Container } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title';
import PriceCard from '../components/price-card';

const pricingMonthlyData = [
 
  {
    header: 'Recommended',
    name: 'Premium',
    description: 'For startup enterprise',
    priceWithUnit: '$49.99/',
    pricePeriod: 'mo',
    buttonText: 'Subscribe Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all course, exercises and assessments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free acess for all kind of exercise corrections with downloads.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Total assessment corrections with free download access system',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited download of courses on the mobile app contents',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Download and print courses and exercises in PDF',
        isAvailable: true,
      },
    ],
  },
];

const pricingYearlyData = [
 
  {
    header: 'Pricing',
    name: '12 Workshop series',
    description: 'For a team of 3',
    priceWithUnit: 'M3600',
    pricePeriod: '',
    buttonText: 'Enroll your team now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '12 Workshops, 3hours each on weekends',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '216 hours of training from workshops to midweed assignments',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Save M20,400 of consultation ',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Build-as-you-Learn',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Working prototype, solid pitch deck, polished and recorded pitch, formalized business',
        isAvailable: true,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          sx={styles.pricing.blockTitle}
          tagline="Pricing Plan"
          heading="Our going price"
        />
        

        <Grid sx={styles.pricing.wrapper}>
          {plan === false
            ? pricingYearlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
          {plan === true
            ? pricingMonthlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  pricing: {
    paddingTop: 100,
    paddingBottom: 150,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60,
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)',
      },
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s',
    },
    blockTitle: {
      textAlign: 'center',
      paddingBottom: 60,
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px',
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block',
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px',
      },
    },
    wrapper: {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px'],
    },
  },
};
