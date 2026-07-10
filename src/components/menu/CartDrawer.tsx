"use client";

import Image from "next/image";
import clsx from "clsx";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    total,
    clearCart,
  } = useCart();

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-[9200] bg-black/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closeCart}
        aria-hidden
      />
      <aside
        data-lenis-prevent
        className={clsx(
          "fixed top-0 right-0 z-[9300] flex h-full w-full max-w-md flex-col bg-beige shadow-2xl transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Your cart"
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-5">
          <h3 className="font-mouse text-2xl uppercase tracking-wide">
            Your cart
          </h3>
          <button
            type="button"
            onClick={closeCart}
            className="font-mouse text-lg uppercase"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="font-modak text-4xl text-red">Hungry?</p>
              <p className="font-mouse text-lg text-black/70">
                Add items to start your order.
              </p>
              <p className="font-mouse text-sm uppercase tracking-wide text-black/40">
                No items yet
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((line) => (
                <li
                  key={line.item.id}
                  className="flex gap-3 rounded-2xl bg-white/50 p-3"
                >
                  <Image
                    src={line.item.image}
                    alt={line.item.name}
                    width={80}
                    height={80}
                    className="size-20 rounded-xl object-contain"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-mouse text-lg leading-tight uppercase">
                        {line.item.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(line.item.id)}
                        className="text-sm text-black/50 hover:text-red"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="font-mouse text-base text-red">
                      ${line.item.price}
                    </p>
                    <div className="mt-auto flex items-center gap-3">
                      <button
                        type="button"
                        className="size-8 rounded-full bg-black text-white"
                        onClick={() =>
                          updateQuantity(line.item.id, line.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className="font-mouse text-lg">{line.quantity}</span>
                      <button
                        type="button"
                        className="size-8 rounded-full bg-black text-white"
                        onClick={() =>
                          updateQuantity(line.item.id, line.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-black/10 px-5 py-5">
          <div className="flex items-center justify-between font-mouse text-xl uppercase">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            className="mt-4 w-full rounded-full bg-red py-3 font-mouse text-xl uppercase text-white transition enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => {
              alert("Checkout is conceptual — Capitolium craft demo.");
              clearCart();
              closeCart();
            }}
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
