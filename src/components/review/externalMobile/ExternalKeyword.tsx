import { css, styled } from 'styled-components';

interface keywordProps {
  keyword: string;
  selected: boolean;
  onClick: () => void;
}

const ExternalKeyword = ({ keyword, selected, onClick }: keywordProps) => {
  return (
    <KeywordBox $selected={selected} onClick={onClick}>
      {keyword}
    </KeywordBox>
  );
};

export default ExternalKeyword;

const KeywordBox = styled.div<{ $selected: boolean }>`
  background: ${({ theme }) => theme.colors.primary10};
  color: ${({ theme }) => theme.colors.gray70};
  ${({ theme }) => theme.fonts.bodyM};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 12px;
  padding: 6px 14px;
  cursor: pointer;

  ${(props) =>
    props.$selected &&
    css`
      background: ${({ theme }) => theme.colors.primary60};
      color: ${({ theme }) => theme.colors.white};
    `};
`;
