import { FC } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../API/productsSlice';

import cl from './SingleProducts.module.scss'





const SingleProduct: FC = () => {

    const { id } = useParams()

    const { data, error } = useGetProductQuery({ id })

    const navigate = useNavigate();

    if (error) {
        return <div>Error</div>
    }
    return (
        !data ? (<p>Loading...</p>) : (
            <>
            <div className="wrapper">
            <button className='btnComeBack' onClick={() => navigate(-1)}>Вернуться к списку</button>
                <div className={cl.singleProduct}>
                    <div className={cl.item}>
                        <h3>{data.title}</h3>
                        <img src={data.image} alt="product" />
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            </>

        )
    );
};

export default SingleProduct;