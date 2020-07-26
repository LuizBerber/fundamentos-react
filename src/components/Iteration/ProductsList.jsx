import React from 'react'
import products from '../../data/products'
import './ProductsList.css'
export default props => {

    function getLines(){
        return products.map((product, i) => {
            return (
                <tr key={product.id} className={i % 2 ===  0 ? 'Even' : 'Odd'}>   
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>R$ {product.preco.toFixed(2).replace('.', ',')}</th>
                </tr>
            )

        })
    }

    return (
        <div className='ProductsTable'>
            <table>
                <thead>
                    <tr style={{color:'white'}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    )
}