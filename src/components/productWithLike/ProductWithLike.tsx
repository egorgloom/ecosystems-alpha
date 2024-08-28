import { FC } from 'react';

import { MdDeleteOutline } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';


import { IProduct } from '../../interfaces/Interfaces';

import cl from '../product/Product.module.scss'

interface IProductWithLike {
    elem: IProduct
}

const ProductWithLike: FC<IProductWithLike> = ({ elem }) => {


    const {removeProduct} = useActions()

    return (
        <div className={cl.productItem}>
            <Link to={`product/${elem.id}`} >
                <h3>{elem.title}</h3>
                <img src={elem.image} alt="product" />
            </Link>
            <div className={cl.btnBlock}>
                <MdDeleteOutline
                    onClick={() => removeProduct(elem)}
                    className={cl.btn} />
            </div>
        </div>
    );
};

export default ProductWithLike;