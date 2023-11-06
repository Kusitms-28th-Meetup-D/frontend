import styled from 'styled-components';

import starBulletSrc from '/assets/images/profile/star-list-type.png';
import starLeandSrc from '/assets/images/profile/star-leand.svg';
import rangeBgSrc from '/assets/images/profile/range-bg.png';
import { ICategory, IQuestion } from '../../interface/Profile';

const ProfilePersonalityContent = ({
  datas,
  category,
}: {
  datas: IQuestion[];
  category: ICategory;
}) => {
  datas;
  return (
    <TendencyLayout>
      <TendencyTopBox>{category.title}</TendencyTopBox>
      <TendencyBottomBox>
        {datas.map((data, index) => {
          return (
            <>
              <div>
                <StarBullet src={starBulletSrc} />
                <TendencySubTitle>
                  {category.category[index].subtitle}
                </TendencySubTitle>
              </div>
              <SwiperBox>
                <SwiperText $isBold={datas[index].percent < 49}>
                  {category.category[index].leftValue}
                </SwiperText>
                <RangeBox
                  type="range"
                  value={datas[index].percent}
                  $imgUrl={starLeandSrc}
                  $bgUrl={rangeBgSrc}
                  readOnly
                />
                <SwiperText $isBold={datas[index].percent > 51}>
                  {category.category[index].rightValue}
                </SwiperText>
              </SwiperBox>
            </>
          );
        })}
      </TendencyBottomBox>
    </TendencyLayout>
  );
};
const TendencyLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
`;
const TendencyTopBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary40};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 12px;
  padding: 0.5rem 0 0.5rem 1.5rem;
  ${({ theme }) => theme.fonts.heading4};
`;
const TendencyBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary10};
  padding: 2.5rem;
  border-radius: 0 0 12px 12px;
  > div {
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
`;
const StarBullet = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;

  display: inline-block;
`;
const TendencySubTitle = styled.div`
  ${({ theme }) => theme.fonts.heading6};
  color: ${({ theme }) => theme.colors.primary90};

  display: inline-block;
`;
const SwiperBox = styled.div`
  ${(props) => props.theme.fonts.bodyL};
  color: ${(props) => props.theme.colors.primary90};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  > div:first-child {
    text-align: right;
  }
`;
const SwiperText = styled.div<{ $isBold: boolean }>`
  ${(props) => props.theme.fonts.bodyL};
  ${(props) => (props.$isBold ? props.theme.fonts.subtitleL : null)};
  color: ${(props) => (props.$isBold ? props.theme.colors.primary60 : null)};

  width: 20%;
  white-space: nowrap;
`;
const RangeBox = styled.input<{ $imgUrl: string; $bgUrl: string }>`
  width: 50%;
  margin: 0 2rem;
  cursor: default;
  //커스텀
  -webkit-appearance: none;
  background: url(${(props) => props.$bgUrl}) no-repeat;
  background-position: center center;

  /* &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 2px solid #ff96ab;
  } */

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 5rem;
    height: 5rem;
    background: url(${(props) => props.$imgUrl}) no-repeat;
    background-size: cover;
  }
`;
export default ProfilePersonalityContent;
