import Header from '../../components/Header';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './TrackingPage.css';
import dayjs from 'dayjs';
import axios from 'axios';

function TrackingPage({ cart }) {
    const [order, setOrder] = useState(null);
    const { orderId, productId } = useParams();

    useEffect(() => {
        const fetchTrackingOrder = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        }
        fetchTrackingOrder();

    }, [orderId]);

    if (!order) {
        return null;
    }

    const product = order.products.find(product => product.productId === productId);

    const totalDeliveryTimeMs = product.estimatedDeliveryTimeMs - order.orderTimeMs;
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    const progressPercent = Math.min(
        (timePassedMs / totalDeliveryTimeMs) * 100, 100
    );

    const isPreparing = progressPercent < 33;
    const isShipped = progressPercent >= 33 && progressPercent < 100;
    const isDelivered = progressPercent >= 100;
    
    return (
        <>
            <title>Tracking</title>

            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <a className="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </a>

                    <div className="delivery-date">
                        {progressPercent >= 100
                            ? 'Delivered on '
                            : 'Arriving on '
                        } 
                        {dayjs(product.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>

                    <div className="product-info">
                        {product.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {product.quantity}
                    </div>

                    <img className="product-image" src={product.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${isPreparing && 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${isShipped && 'current-status'}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${isDelivered && 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: `${progressPercent}%`}}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrackingPage;