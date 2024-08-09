import { Description } from '@mui/icons-material';
import Container from '../shared/Container';

const services = [
  {
    title: '採用支援',
    description: 'ビジョン制作、採用内容見直し',
    image: '/images/services/recruit.png',
  },
  {
    title: 'PRツール制作',
    description: 'HP作成、各種SNS運用、SEO対策',
    image: '/images/services/pr_tool.png',
  },
  {
    title: 'キャリア教育事業',
    description: '中高大へキャリア授業を行います',
    image: '/images/services/career.png',
  },
  {
    title: 'イベント運営',
    description: '大学生、同業、同職、異職、交流イベント',
    image: '/images/services/event.png',
  },
];

export default function Services() {
  return (
    <div id="services" className="-mt-5 pt-0">
      <div className="flex flex-col items-center m-auto">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex items-center lg:w-[390px] w-full lg:pl-0 pl-5 ${
              index === services.length - 1 ? '' : 'mb-8'
            }`}
          >
            <div className="flex items-center lg:mr-10 mr-5 w-1/5">
              <img
                src={service.image}
                alt={service.title}
                className="h-20 mr-auto"
              />
            </div>
            <div className="">
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
