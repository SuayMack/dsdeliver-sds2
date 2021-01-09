import { ReactComponent as Pizza } from './pizza.svg';

function ProductCard() {
    return (
        <header className="order-card-container">
            <div className="order-card-content">
                <h3 className="order-card-title">
                    Pizza Calabresa
                </h3>
                <Pizza className="order-card-image"/>
                <h3 className="order-card-price">
                    R$ 35,90
                </h3>
                <div className="order-card-description">
                    Descrição
                    <p>
                    Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default ProductCard;