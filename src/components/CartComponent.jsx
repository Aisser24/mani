import React from 'react'
import content from '../../content'

function CartComponent({cartItems}) {


    return cartItems === [] ? (
        <h2>Cart is empty</h2>
    ) : (
        <section className='flex justify-center align-top'>
            <div className=' bg-gray-200 max-w-[90vwd]'>
                <table className=' border-spacing-[50px] border-separate'>
                    {
                        cartItems?.map(id => {
                            const item = content.games.find(item => item.id === id)
                            return (
                                <tr>
                                    <td>
                                        <img src={item.imageUrl} alt={item.alt} className='max-h-[200px]' />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price} eur
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </section>
    )
}

export default CartComponent