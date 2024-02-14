
import { FifthSection } from './components/fifthSection';
import { FirstSectionHome } from './components/firstSection';
import { FourthSection } from './components/fourthSection';
import { SecondSectionHome } from './components/secondSection';
import { ThirdSectionHome } from './components/thirdSection';
export const HomePage = () => {
    return (
        <>
            <FirstSectionHome/>
            <SecondSectionHome/>
            <ThirdSectionHome/>
            <FourthSection/>
            <FifthSection/>
        </>
    );
}
