import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import "./Pages.css"
import PageCards from "../../components/cards/PageCards";
import { useSelector } from "react-redux";

const Wrapper = styled.section`
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5em 7em;
`;

const Pages = ({ category }) => {
  const { brandName } = useParams()
  const product = useLocation().state
  const [Data, setData] = useState([])

  const fetchData = useSelector((state) => state.product)

  useEffect(() => {
    setData(fetchData.data.filter((i) => i.category === category))
    if (brandName) {
      setData((data) => data.filter((i) => i.brand === brandName))
    }
    else if (product) {
      setData(fetchData.data.filter((i) => i.title.toLowerCase().includes(product.search)))
    }
  }, [fetchData.data, category, brandName, product])

  return (
    <>
      {/* <h1>{category}</h1> */}
      {
        product &&
        <h1>{Data.length} Results Related To Search</h1>
      }
      <Wrapper>
        {!fetchData.loading
          ? (Data && Data.map((item, index) =>
            <PageCards key={index} Data={item} />
          ))
          : <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: "100%" }}>
            <CircularProgress />
          </div>
        }
      </Wrapper>
    </>
  )
}

export default Pages