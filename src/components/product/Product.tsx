import { FC } from 'react';

import { AiOutlineLike } from "react-icons/ai";

import { MdDeleteOutline } from "react-icons/md";

import cl from './Product.module.scss'

import { useActions } from '../../hooks/useActions';

import { Link } from 'react-router-dom';

import { IProduct } from '../../interfaces/Interfaces';
import { useTypedSelector } from '../../hooks/useTypedSelector';


interface IProductItem {
  elem: IProduct
  handleDelete: (id: number) => void 
}

const Product: FC<IProductItem> = ({ elem, handleDelete }) => {

  const { toggleLike } = useActions();

  const likes = useTypedSelector(state => state.likes.likes);

  const isExist = likes.some((el: IProduct) => el.id ===  elem.id)

  return (
    <>
      <div className={cl.productItem}>
        <Link to={`product/${elem.id}`} >
          <h3>{elem.title}</h3>
          <img src={elem.image} alt="product" />
          </Link>
          <div className={cl.btnBlock}>
            <AiOutlineLike
              onClick={() => toggleLike(elem)}
              style={{ color:  isExist ? 'green' : 'red'}}
            ></AiOutlineLike>
            <MdDeleteOutline
            onClick={()=> handleDelete(elem.id)}
              className={cl.btn} />
          </div>
      </div>
    </>
  );
};

export default Product;