import {createContext, ReactNode, useContext, useState} from "react"
import {ShoppingCart} from "../components/ShoppingCart.tsx"
//todo типизировать начальное состояние контекста
type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCarContext = {
    //ToDo типизировать наш контекст (функции, состояния)
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: CartItem[]
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
}

type CartItem = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCarContext) // Todo начальное состояние

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    //все хранится здесь, состояния и функции
    //getItemQuantity: (id:number) => number
    // increaseCartQuantity:(id:number) => void

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    // decreaseCartQuantity:(id:number) => void

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })


            }
        })
    }

    // removeFromCart:(id:number) => void

    function removeFromCart(id:number) {
        setCartItems(currItems => {
            return  currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                openCart,
                closeCart,
                cartQuantity

            }}
        >
            {children}
            <ShoppingCart isOpen = {isOpen}/>
        </ShoppingCartContext.Provider>
    )
}
