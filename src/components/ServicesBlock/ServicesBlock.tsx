import s from './ServicesBlock.module.scss';
import { servicesProps } from '@/lib/dataFetch';
import { ServicesProps } from '@/lib/types';

const ServicesBlock = ({data}:servicesProps) => {
  const servicesData = JSON.parse(data);

  return (
    <section className={`${s.services} container block-mb`}>
      <h1 className={`${s.projectTitle} block-title`}>Услуги</h1>
      <div className={`${s.wrapper} bg-block`}>
        { servicesData.map((element: ServicesProps, index: number) => (
          <ServicesItem key={index} itemData={element} />
        )) }
      </div>
    </section>
  );
};

const ServicesItem = ({ itemData }: {itemData: ServicesProps}) => {
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
