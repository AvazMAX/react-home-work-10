import React from "react";
import styled from "styled-components";

export const Content = ({ productItem, incr, dicr, count, deleteProduct }) => {
  return (
    <ContainerContent>
      <DivContent>
        <p>#</p>
        <p>Product</p>
        <p>Product Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </DivContent>
      {productItem.map((el) => {
        return (
          <>
            <DivImg>
              <IdMap>
                <p>{el.id}</p>
              </IdMap>
              <ImgContent src={el.img} />
              <Titleh2>{el.title}</Titleh2>
              <DivQuantity>
                <p>{el.price} $</p>
                <div>
                  <ButtonQuant onClick={() => dicr(el.id)}>-</ButtonQuant>
                  <span>{count}</span>
                  <ButtonQuant onClick={() => incr(el.id)}>+</ButtonQuant>
                </div>
                <ButtonRemove onClick={() => deleteProduct(el.id)}>
                  Remove
                </ButtonRemove>
              </DivQuantity>
            </DivImg>
          </>
        );
      })}
    </ContainerContent>
  );
};
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DivContent = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #000000;
  margin-top: 50px;
  width: 800px;
`;
const ImgContent = styled.img`
  width: 50px;
  margin-right: 0px;
`;
const DivImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 800px;
  border: 1px solid #0000003d;
`;
const DivQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const IdMap = styled.div`
  margin-left: 40px;
`;
const Titleh2 = styled.h2`
  margin-right: 40px;
`;
const ButtonQuant = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  background-color: #5db53e;
  color: #fff;
  font-size: 22px;
  font-weight: 900;
  margin: 20px;
  border-radius: 7px;
`;
const ButtonRemove = styled.button`
  height: 30px;
  width: 90px;
  background-color: #ff0000a4;
  border: 0;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  margin-right: 20px;
`;
