import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
// import { Button, ButtonGroup } from '@chakra-ui/react'

function createArrayOfSize(totalPages) {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  let pages = createArrayOfSize(totalPages).map((a) => (
    <Button
      colorScheme="teal"
      variant="outline"
      key={a}
      disabled={a === currentPage}
      onClick={() => handlePageChange(a)}
    >
      {a}
    </Button>
  ));
  return (
    <Stack direction="row" spacing={4} align="center">
      {pages}
    </Stack>
  );
}

export default Pagination;