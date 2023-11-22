import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterImage
          src={'/assets/images/common/footer_logo.svg'}
          alt={'logo'}
        />
        <FooterBottom>
          <div>
            <ul>
              <li>
                <span>서비스명</span> 원팀 (WANTEAM.)
              </li>
              <li>
                <span>소속</span> 한국대학생IT경영학회 (KUSITMS)
              </li>
              <li>
                <span>팀</span> 도도독동료
              </li>
              <li>
                <span>이메일</span> ojy09293@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>기획</span> 박형준(PM), 채영대, 민혜린
              </li>
              <li>
                <span>개발</span>
                <p>
                  <div>FE | 박진우, 박예진 </div>
                  <div>BE | 오진영, 이민정</div>
                </p>
              </li>
              <li>
                <span>디자인</span> 이재영
              </li>
            </ul>
          </div>
        </FooterBottom>
      </FooterBox>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary10};
  padding: 4rem 0;
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  max-width: 122.4rem;
`;

const FooterImage = styled.img`
  width: 20rem;
  height: 4.2rem;
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 30rem;

  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray50};

  li {
    margin-bottom: 0.1rem;
    display: flex;
  }

  span {
    display: inline-block;
    margin-right: 3rem;
    width: 6rem;
  }
`;
