import StockItem from "./StockItem"
import styled from "styled-components"

const StockList = ({portfolioStocks, selectedStock, setSelectedStock}) => {



    const stockNodes = portfolioStocks.map((portfolioStock, index) => {
        return <StockItem portfolioStock={portfolioStock} key={portfolioStock._id} selectedStock={selectedStock} setSelectedStock={setSelectedStock}/>
    })

    return ( 
        <StockPanelContainer>
            <h3>Portfolio:</h3>
            <StockListStyle>
                {stockNodes.map(stockNode => (
                    <StockItemStyle key={stockNode.key}>
                        {stockNode}
                    </StockItemStyle>
                ))}
            </StockListStyle>
        </StockPanelContainer>
    );
}
 
export default StockList;

const StockPanelContainer = styled.div`
  // overflow-x: scroll;
  // white-space: nowrap;
  `;

const StockListStyle = styled.div`
  display: block;
  flex-wrap: wrap;
  margin: -10px;
  `;

const StockItemStyle = styled.div`
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0px 10px;
    margin: 0px;
    width: 400px;
    overflow: hidden;

    ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        padding: 0px 10px;
    }
    

    a {
      display: block;
      overflow: hidden;
    }

    p {
        color: red;
    }

    span {
        color: green;
        display: inline-block;
    }

    h3 {
      word-wrap: break-word;
    }

    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s ease-in-out;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    @media (max-width: 768px) {
      width: calc(50% - 20px);
    }
`;