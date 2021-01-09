import StepsHeader from './StepsHeader';
import './styles.css';
import ProductList from './ProductList';

function Orders() {
    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductList />
        </div>
    )
}

export default Orders;