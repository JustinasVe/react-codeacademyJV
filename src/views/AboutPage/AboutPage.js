import styled from 'styled-components';

const Title = styled.h1`
    color: salmon;
`;
const Wrapper = styled.div`
    background-color: pink;

`


export const AboutPage = () => {
    return (
        <div className={styled.wrapper}>
            {/* <h1 className={styles.title}>AboutPage</h1> */}
            <Title>About page</Title>
        </div>
    )
}