import { FC, useEffect, useState } from 'react';

import { useGetProductsQuery } from '../../API/productsSlice';

import { useTypedSelector } from './../../hooks/useTypedSelector';

import { IProduct } from '../../interfaces/Interfaces';

import Product from '../product/Product';

import ProductWithLike from '../productWithLike/ProductWithLike';




const Catalog: FC = () => {

    const likes = useTypedSelector(state => state.likes.likes);

    const { data, isLoading, error } = useGetProductsQuery('');

    const [products, setProducts] = useState<IProduct[]>([]);

    const [showData, setShowData] = useState<Boolean>(true);

    const [buttonText, setButtonText] = useState<string>('Показать данные');

    const [buttonColor, setButtonColor] = useState<string>('yellow');

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, [data]);

    const handleDelete = (id: number) => {
        setProducts(products.filter((elem: IProduct) => elem.id !== id))
    }

    const handleLikes = () => {
        setShowData(!showData)
        setButtonText(showData ? 'Показать лайки' : 'Показать данные');
        setButtonColor(showData ? 'lightGreen' : 'yellow');
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error</div>
    }

    return (
        <>
            <div className='wrapper'>
                <button
                    className='btnLikes'
                    onClick={handleLikes}
                    style={{ backgroundColor: buttonColor }}>
                    {buttonText}
                </button>
                <div className='catalogContainer'>
                    {showData ?
                        (products?.map((elem: IProduct) => <Product elem={elem} key={elem.id} handleDelete={handleDelete} />))
                        :
                        (likes.map((elem: IProduct) => <ProductWithLike elem={elem} key={elem.id} />))
                    }
                </div>
            </div>

        </>
    );
};

export default Catalog;