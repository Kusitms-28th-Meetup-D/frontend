import { styled } from 'styled-components';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  totalPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pages = [];
  for (let p = 1; p <= totalPage; p++) {
    pages.push(p);
  }

  return (
    <PaginationWrapper>
      {pages.map((page) => (
        <PaginationButton
          key={page}
          active={currentPage === page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </PaginationButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
`;

const PaginationButton = styled('button').withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding: 5px 10px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary40 : theme.colors.gray20};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.gray90};
  cursor: pointer;
  border-radius: 7px;

  &:disabled {
    background-color: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.primary40};
    color: white;
    transition: 0.2s;
  }
`;
