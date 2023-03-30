import s from './ServicesBlock.module.scss';
import { getProjects, getServices, servicesProps } from '@/lib/dataFetch';
import MDXContent from '@/lib/MDXContent';
import { log } from 'next/dist/server/typescript/utils';

const ServicesBlock = ({data}:servicesProps) => {
  const servicesData = JSON.parse(data);

  return (
    <section className={`${s.services} container block-mb`}>
      <h1 className={`${s.projectTitle} block-title`}>Услуги</h1>
      <div className={`${s.wrapper} bg-block`}>
        { servicesData.map((element, index) => (
          <ServicesItem key={index} itemData={element} />
        )) }
      </div>
    </section>
  );
};

interface ServicesItemProps {
  itemData: {
    group: string,
    services: {
      name: string,
    }[],
  };
}

const ServicesItem = ({ itemData }:ServicesItemProps) => {
  return (
    <div className={s.servicesItem}>
      <h3 className={s.serviceGroupTitle}>{itemData.group}</h3>
      <ul className={s.servicesList}>
        { itemData.services.map((element, index) => (
          <li key={index}>{element.name}</li>
        )) }
      </ul>
    </div>
  );
};

export default ServicesBlock;
