import { styled } from 'styled-components';

interface FormTitleProps {
  title: string;
}

const FormTitle = ({ title }: FormTitleProps) => {
  return (
    <FormTitleBox>
      <FormTitleText>
        {title}
        <FormTitleCircle src={'/assets/images/myteam/form_title_circle.svg'} />
      </FormTitleText>
    </FormTitleBox>
  );
};

export default FormTitle;

const FormTitleBox = styled.div`
  min-width: 20rem;
`;

const FormTitleText = styled.div`
  position: relative;
  ${({ theme }) => theme.fonts.subtitleXXL};
  color: ${({ theme }) => theme.colors.gray90};
  display: inline-block;
`;

const FormTitleCircle = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  top: -0.1rem;
  right: -1.4rem;
`;
