import Carousel from './Carousel/Carousel';
import Section from '../Section/Section';

export default function Content() {
  return (
    <>
      <Section
        title='더욱 깊이 알아가는 나의 마음'
        subtitle='심층 지식을 담은 PDF와 강의 콘텐츠입니다'
      >
        <Carousel />
      </Section>
    </>
  );
}
