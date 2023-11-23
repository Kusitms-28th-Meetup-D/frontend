import { css, styled } from 'styled-components';

interface keywordProps {
  keyword: string;
  selected: boolean;
  onClick: () => void;
}

interface selectedProps {
  selected: boolean;
}

const Keyword = ({ keyword, selected, onClick }: keywordProps) => {
  return (
    <KeywordBox selected={selected} onClick={onClick}>
      {keyword}
    </KeywordBox>
  );
};

export default Keyword;

const KeywordBox = styled.div<selectedProps>`
  background: ${({ theme }) => theme.colors.primary10};
  color: ${({ theme }) => theme.colors.gray70};
  ${({ theme }) => theme.fonts.bodyM};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 12px;
  padding: 6px 14px;
  cursor: pointer;

  white-space: nowrap;

  ${(props) =>
    props.selected &&
    css`
      background: ${({ theme }) => theme.colors.primary60};
      color: ${({ theme }) => theme.colors.white};
    `};

  &:hover {
    background: ${({ theme }) => theme.colors.primary60};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.2s;
  }
`;
