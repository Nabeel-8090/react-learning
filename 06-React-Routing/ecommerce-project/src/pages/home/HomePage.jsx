import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import Header from '../../components/Header';
import ProductsGrid from './ProductsGrid';
import './HomePage.css';

function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    useEffect(() => {
        const getProducts = async () => {
            const url = searchQuery
                ? `/api/products?search=${encodeURIComponent(searchQuery)}`
                : '/api/products';

            const response = await axios.get(url);
            setProducts(response.data);
        };

        getProducts();
    }, [searchQuery]);

    return (
        <>
            <title>Ecommerce Project</title>

            <Header
                cart={cart}
            />

            <div className="home-page">
                <ProductsGrid
                    products={products}
                    loadCart={loadCart}
                />
            </div>
        </>
    );
}

export default HomePage;