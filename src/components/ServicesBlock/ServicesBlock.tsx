import s from './ServicesBlock.module.scss';
import { getProjects, getServices } from '@/lib/dataFetch';
import MDXContent from '@/lib/MDXContent';
import { log } from 'next/dist/server/typescript/utils';

const ServicesBlock = ({data}) => {
  const servicesData = JSON.parse(data);
  console.log(servicesData);
  return (
    <section className={s.services}>
      { servicesData.map((element, index) => (
        <ServicesItem key={index} itemData={element} />
      )) }
    </section>
  );
};

const ServicesItem = ({ itemData }) => {
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
