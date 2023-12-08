import l1 from '../assets/l1.svg';
import l2 from '../assets/l2.svg';
import l3 from '../assets/l3.svg';
import l4 from '../assets/l4.svg';
import l5 from '../assets/l5.svg';
import l6 from '../assets/l6.svg';
import l7 from '../assets/l7.svg';
import l8 from '../assets/l8.svg';
import check from '../assets/check.png';

type serviceItem = {
    image: string,
    header: string,
    text: string,
    mark: string
};

export const serviceData: serviceItem[] = [
    {
        image: l1,
        header: 'Extensive set of resources',
        text: '400+ API endpoints',
        mark: check
    },
    {
        image: l2,
        header: 'Blazing-fast API',
        text: '100ms average response time',
        mark: check
    },
    {
        image: l3,
        header: 'Real-time webhooks',
        text: '100+ trigger events',
        mark: check
    },
    {
        image: l4,
        header: 'Highly-reliable platform',
        text: '99.99% uptime guaranteed',
        mark: check
    },
    {
        image: l5,
        header: 'Composable architecture',
        text: 'Any third-party integrations',
        mark: check
    },
    {
        image: l6,
        header: 'International scalability',
        text: 'Multi-country configuration options',
        mark: check
    },
    {
        image: l7,
        header: 'Global edge network',
        text: '60+ CDN edges',
        mark: check
    },
    {
        image: l8,
        header: 'Fanatic support team',
        text: '24/7 support',
        mark: check
    }
];