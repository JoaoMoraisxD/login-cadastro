import React from "react";
import { FaMoneyBillTrendUp, FaArrowDownWideShort, FaArrowUpWideShort  } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Header } from "../header/index"
import { Container, GrafContainer,GraficoM1,DetailContainer, InfoContainer, TypeContainer, PizzaContainer, InfoLine, LineContainer } from './styles';
import Grafico1 from "../graficos/grafico1";
import Grafico2 from "../graficos/grafico2";
const Home = () => {
  return (<>
      {/* <Header showUsername={true}/> */}
      <Header />
      <Container>
        <TypeContainer>
          <h2>DASHBOARD</h2>
        </TypeContainer>
        <DetailContainer>
          <GraficoM1>
            <InfoContainer>
              <div className="title">
                <FaMoneyBillTrendUp style={{ marginRight: '8px', color: '#413ea0' }}/>
                <h5>VALOR VENDA</h5>
              </div>
              <div className="valor">
                <h2>R$ 120,784.02</h2>
              </div>
              <div className="positiveValor">
                <FaArrowUpWideShort style={{color: 'green' }}/>
                <p>12,3%</p>
                <p className="sideText">+ R$ 1,453.89</p>
              </div>
            </InfoContainer>
          </GraficoM1>
          <GraficoM1>
            <InfoContainer>
              <div className="title">
                <FaMoneyBillTrendUp style={{ marginRight: '8px', color: '#413ea0' }}/>
                <h5>TOTAL DE PEDIDOS</h5>
              </div>
              <div className="valor">
                <h2>28,834</h2>
              </div>
              <div className="positiveValor">
                <FaArrowUpWideShort style={{color: 'green' }}/>
                <p>20,1%</p>
                <p className="sideText">+2,676 Hoje</p>
              </div>
            </InfoContainer>
          </GraficoM1>
          <GraficoM1>
            <InfoContainer>
              <div className="title">
                <FaUserAlt style={{ marginRight: '8px', color: '#413ea0' }}/>
                <h5>VISITAS</h5>
              </div>
              <div className="valor">
                <h2>R$ 120,784.02</h2>
              </div>
              <div className="positiveValor">
              <FaArrowDownWideShort style={{color: 'red' }}/>
                <p style={{color: 'red' }}>5,6%</p>
                <p className="sideText">-876 Hoje </p>
              </div>
            </InfoContainer>
          </GraficoM1>
          <GraficoM1>
            <InfoContainer>
              <div className="title">
                <FaMoneyBillTrendUp style={{ marginRight: '8px', color: '#413ea0' }}/>
                <h5>REEMBOLSADO</h5>
              </div>
              <div className="valor">
                <h2>2,876</h2>
              </div>
              <div className="positiveValor">
                <FaArrowUpWideShort style={{color: 'green' }}/>
                <p>13%</p>
                <p className="sideText">+34 Hoje</p>
              </div>
            </InfoContainer>
          </GraficoM1>
        </DetailContainer>
        <GrafContainer>
          <h3>GRÁFICO SEMANAL</h3>
          <Grafico1 />
        </GrafContainer>
        <LineContainer>
          <h1>Mais vendido</h1>
        <InfoLine>
        <span>Quantidade Vendida:</span> <span>100</span>
      </InfoLine>
      <InfoLine>
        <span>Nome do Produto:</span> <span>Produto A</span>
      </InfoLine>
      <InfoLine>
        <span>Valor:</span> <span>R$ 50,00</span>
      </InfoLine>
      </LineContainer>
        <PizzaContainer>
          <Grafico2 />
          <h2>Regiões Destaque</h2>
        </PizzaContainer>
      </Container>
    </>)
}

export {Home}