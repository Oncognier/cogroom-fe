import Carousel from './Carousel/Carousel';
import Section from '../Section/Section';

export default function Content() {
  return (
    <>
      <Section
        title='콘텐츠'
        subtitle='단순한 학습이 아닌 나를 알아가고 이해하는 여정을 제공합니다'
      >
        <Carousel />
      </Section>
    </>
  );
}
