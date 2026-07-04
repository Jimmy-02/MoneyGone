import React from 'react'
import useCartPage from '../hooks/useCartPage';
import { ShoppingCartIcon } from 'lucide-react';
import EmptyCart from '../components/EmptyCart';

function CartPage () {
    const {
    items,
  } = useCartPage();

  return (
    <div className="text-left">
      <h1 className="mb-8 flex items-center gap-2 text-3xl font-bold text-base-content">
        <ShoppingCartIcon className="size-8 text-primary" aria-hidden />
        Cart
      </h1>
      {items.length === 0 ? (
        <EmptyCart/>
      ) : null}
    </div>
  )
}

export default CartPage