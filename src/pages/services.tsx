import SEO from '@/components/SEO/SEO';
import ServicesBlock from '@/components/ServicesBlock/ServicesBlock';
import { servicesData } from '@/data/servicesData';
import MDXContent from '@/lib/MDXContent';
import { getProjects, getServices, servicesProps } from '@/lib/dataFetch';
const Services = ({ servicesData }: {servicesData: servicesProps}) => {

  return (
    <>
      <SEO title="Услуги"/>
      <ServicesBlock data={servicesData} />
    </>
  );
};

export default Services;
export async function getStaticProps() {
  /* Получаем услуги */
  const servicesData = JSON.stringify(getServices());

  return {
    props: { servicesData },
  }
}
