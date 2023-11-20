import styled from 'styled-components';
import { ProfileBoxProps, ProfileProps } from '../../../interface/Contest';
import ProfileBoxMember from '../../common/ProfileBoxMember';

import yesSrc from '/assets/images/myteam/yes.svg';
import noSrc from '/assets/images/myteam/no.svg';
interface ApplyBoxScrollProps {
  teamMembersInfo: ProfileProps[];
  width?: number;
}
const ApplyBoxScroll: React.FC<ApplyBoxScrollProps> = (props) => {
  return (
    <Layout>
      {props.teamMembersInfo.map((memberData) => {
        const profileProps: ProfileBoxProps = {
          hasBorder: true,
          hasProfileButton: true,
          isBgColorWhite: false,
          memberInfo: memberData,
        };
        return (
          <ApplyContainer>
            <ProfileBoxMember {...profileProps} />
            <SelectApplyContainer>
              합류 여부
              <SelectApplyBox>
                <SelectApplyitem src={yesSrc} />
                <SelectApplyitem src={noSrc} />
              </SelectApplyBox>
            </SelectApplyContainer>
          </ApplyContainer>
        );
      })}
    </Layout>
  );
};
const Layout = styled.div`
  display: flex;
  gap: 2.4rem;

  overflow-x: scroll;

  padding-bottom: 3rem;
  margin-bottom: 10rem;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    border-radius: 6px;
    /* background: ${(props) => props.theme.colors.gray20}; */
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary60};
    border-radius: 6px;
  }
`;
const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const SelectApplyContainer = styled.div`
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.colors.gray40};
  color: ${(props) => props.theme.colors.primary90};
  ${(props) => props.theme.fonts.subtitleXS};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  padding: 0.7rem 0;
`;
const SelectApplyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;
const SelectApplyitem = styled.img`
  cursor: pointer;
`;

export default ApplyBoxScroll;
