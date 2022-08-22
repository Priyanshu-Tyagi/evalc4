import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import { Container, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Pagination from "../Components/Pagination";

function Dashboard() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [tPage, setTPage] = useState(1);

  useEffect(() => {
    handleGetProducts(page);
  }, [page]);

  function handleGetProducts(page) {
    getProducts({ page: page, limit: 10 })
      .then((res) => {
        console.log(res.data.data, res.data.totalPages);
        setData(res.data.data);
        setTPage(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
        <div style={{ display: "grid" , gridTemplateColumns: "repeat(4,1fr)", alignItems:"space-between" }} >
      {/* <SimpleGrid gridColumn={4} minChildWidth="22%"> */}
        {data.map((i) => (
          <Container key={i.id}>
            <Image src={i.image} />
            <Stack>
            <Text fontSize="3xl">{i.title}</Text>
            <Text fontSize="xl">{i.brand}</Text>
            <Text fontSize="xl" fontWeight="semibold">
              {i.category}
            </Text>
            <Text fontSize="2xl">₹ {i.price}</Text>
            </Stack>
          </Container>
        ))}
      {/* </SimpleGrid> */}
    </div>
    <div>
        <Pagination totalPages={tPage} currentPage={page} handlePageChange={(a)=>setPage(a)}/>
    </div>
    </div>
    
  );
}

export default Dashboard;
