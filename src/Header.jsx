import React, { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import { Content } from "./Content";

export const Header = () => {
  const [openContent, setOpenContent] = useState(null);
  const [productItem, setProductItem] = useState(
    JSON.parse(localStorage.getItem("Todo")) || []
  );
  const [todos, setTodos] = useState([
    {
      img: "https://pngimg.com/uploads/strawberry/strawberry_PNG77.png",
      title: "Berry",
      price: 12,
      btn: "Added",
      id: 1,
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/008/532/603/original/kiwi-fruit-cutout-file-png.png",
      title: "Kiwi",
      price: 32,
      btn: "Added",
      id: 2,
    },
    {
      img: "https://www.pngall.com/wp-content/uploads/11/Red-Apple-PNG.png",
      title: "Apple",
      price: 9,
      btn: "Added",
      id: 3,
    },
  ]);

  const [count, dispatch] = useReducer((state, action) => {
    if (action.type === "plus" && action.payload === openContent) {
      return state + 1;
    } else if (action.type === "minus" && action.payload === openContent) {
      return state > 0 ? state - 1 : 0;
    } else if (action.type === "disabled") {
      return (state = false);
    } else if (action.type === "delete" && action.payload === openContent) {
      const newProductItem = productItem.filter(
        (item) => item.id !== action.id
      );
      setProductItem(newProductItem);
    }
    return state;
  }, 0);
  const incr = (id) => {
    dispatch({ type: "plus", payload: openContent, payloadId: id });
  };
  const dicr = (id) => {
    dispatch({ type: "minus", payload: openContent, payloadId: id });
  };
  const deleteProduct = (id) => {
    dispatch({ type: "delete", payload: openContent, id: id });
  };

  const addProduct = (el) => {
    setOpenContent(el.id);
    if (el.id !== openContent) {
      setProductItem([...productItem, { ...el, count: 1 }]);
    } else {
      dispatch({ type: "disabled" });
    }
    const existingItem = productItem.find((item) => item.id === el.id);
    if (existingItem) {
      const updatedProductItem = productItem.map((item) => {
        if (item.id === el.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
      setProductItem(updatedProductItem);
    } else {
      setProductItem([...productItem, { ...el, count: 1 }]);
    }
    console.log(productItem);
  };

  useEffect(() => {
    const todosString = JSON.stringify(productItem);
    localStorage.setItem("Todo", todosString);
  }, [productItem]);

  useEffect(() => {
    const db = localStorage.getItem("Todo");
    const bd = JSON.parse(db);
    setProductItem(bd);
  }, [setProductItem]);

  return (
    <>
      <DivHeader>
        {todos.map((el) => {
          return (
            <>
              <ContMap>
                <DivImg>
                  <ImgHeader src={el.img} />
                </DivImg>
                <h1>{el.title}</h1>
                <h2>{el.price} $</h2>
                <ButtonAddProduct onClick={() => addProduct(el)}>
                  {openContent === el.id ? "Added" : el.btn}
                </ButtonAddProduct>
              </ContMap>
            </>
          );
        })}
      </DivHeader>
      {openContent ? (
        <Content
          count={count}
          incr={incr}
          dicr={dicr}
          productItem={productItem}
          setProductItem={setProductItem}
          setOpenContent={setOpenContent}
          deleteProduct={deleteProduct}
        />
      ) : null}
    </>
  );
};
const ImgHeader = styled.img`
  width: 150px;
  margin: 20px;
`;
const DivImg = styled.div`
  height: 200px;
  width: 200px;
`;
const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
const ContMap = styled.div`
  border: 1px solid #96bb39;
  border-radius: 12px;
  box-shadow: 0px 0px 3px 1px #5db53e;
  text-align: center;
  margin-top: 10px;
`;
const ButtonAddProduct = styled.button`
  margin: 20px;
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background-color: #5db53e;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;
