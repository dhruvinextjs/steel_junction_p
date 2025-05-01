"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems, updateCartQuantity } from "@/redux/CartSlice";
import { fetchOrderSummary } from "@/redux/OrderSlice"; // Import fetchOrderSummary
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((state) => state.getCart);
  const { totalQty, subTotal, gstAmount, loadingCharge, insurance, tcsAmount, orderTotal, roundOff, grossTotal, loading } = useSelector((state) => state.order); // Order summary from Redux
  const [editableQty, setEditableQty] = useState({});
  const router = useRouter();
  
  const formatNumber = (number) => {
    return number !== undefined && number !== null ? number.toFixed(1) : "0.0";
  };
  

  // Fetch cart items and order summary on component mount
  useEffect(() => {
    dispatch(fetchCartItems()); // Fetch cart items
    dispatch(fetchOrderSummary()); // Fetch order summary
  }, [dispatch]);

  const cartItems = Array.isArray(cart) ? cart : [];

  const formatPrice = (price) => {
    return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
  };

  const handleQuantityChange = async (productId, variantId, newQty) => {
    if (newQty <= 0) return;
  
    // Update locally first for immediate UI feedback
    setEditableQty(prev => ({
      ...prev,
      [variantId]: newQty,
    }));
  
    const cartItem = cart.find((item) => item.productId === productId);
    if (!cartItem) return;
  
    const updatedVariants = cartItem.variants.map((variant) => {
      if (variant.variantId === variantId) {
        return { ...variant, qty: newQty };
      }
      return variant;
    });
  
    const result = await dispatch(
      updateCartQuantity({ productId, variants: updatedVariants })
    );
  
    // If update fails, revert the local update and show an error
    if (!updateCartQuantity.fulfilled.match(result)) {
      setEditableQty(prev => ({
        ...prev,
        [variantId]: cartItem.variants.find(variant => variant.variantId === variantId)?.qty || 0
      }));
      toast.error("Failed to update quantity");
    } else {
      // Re-sync cart and order summary after a successful update
      dispatch(fetchCartItems()); // Re-fetch cart items
      dispatch(fetchOrderSummary()); // Re-fetch order summary
    }
  };
  
  

  const handleProceedToBuy = () => {
    if (totalQty < 25) {
      toast.warning("Minimum order quantity is 25 MT.");
      return;
    }

    const orderDetails = {
      cartItems,
      subtotal: subTotal,
      totalQty,
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    toast.success("Order ready to proceed");

    router.push("/OrderSummary");
  };

  const handleInputChange = (e, productId, variantId) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value <= 0) return;
  
    handleQuantityChange(productId, variantId, value);
  };
  

  return (
    <div className="w-full space-y-5 md:space-y-10">
      <div
        className="relative bg-no-repeat md:h-60 h-60"
        style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
      >
        <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
          Shopping Cart
        </h1>
      </div>

      <div className="container flex flex-col items-start w-full h-full gap-5 mx-auto xl:flex-row">
        {/* LEFT COLUMN */}
        <div className="w-full h-full bg-white border xl:w-9/12">
          {isLoading ? (
            <p className="p-4">Loading...</p>
          ) : cartItems.length === 0 ? (
            <p className="p-4 text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[768px] text-sm">
                <thead className="text-white bg-black">
                  <tr>
                    <th className="p-3 text-left">Product</th>
                    <th className="p-3 text-center">Rate PMT</th>
                    <th className="p-3 text-center">Quantity</th>
                    <th className="p-3 text-center">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <React.Fragment key={item.productId}>
                      <tr className="bg-gray-100">
                        <td colSpan="4" className="p-3 font-semibold">
                          {item.productName}
                        </td>
                      </tr>
                      {item.variants?.map((variant) => (
                        <tr
                          key={variant.variantId}
                          className="border-b border-gray-200 bg-[#F3F6FA]"
                        >
                          <td className="p-3">
                            <p>Section: {variant.section}</p>
                            <p>Length: {variant.length}</p>
                            <p>Gauge Diff: {variant.gDiff}</p>
                          </td>
                          <td className="p-3 text-center">
                            ₹ {formatPrice(variant.price)}
                          </td>
                          <td className="p-3 text-center">
                            <div className="inline-flex items-center border border-gray-300 rounded">
                              <button
                                className="px-2 py-1 hover:bg-gray-200"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.productId,
                                    variant.variantId,
                                    variant.qty - 1
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={editableQty[variant.variantId] ?? variant.qty}
                                onChange={(e) =>
                                  handleInputChange(
                                    e,
                                    item.productId,
                                    variant.variantId
                                  )
                                }
                                min="1"
                                className="w-16 text-center border-0 focus:outline-none"
                              />
                              <button
                                className="px-2 py-1 hover:bg-gray-200"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.productId,
                                    variant.variantId,
                                    variant.qty + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="p-3 font-medium text-center">
                            ₹ {formatPrice(variant.price * variant.qty)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full space-y-4 bg-white border xl:w-3/12">
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-black">
                Order Summary
              </h3>
              {totalQty < 25 && (
                <p className="text-xs font-medium text-red-600">
                  *Min. order: 25 tons
                </p>
              )}
            </div>
            <div className="flex justify-between text-sm">
              <span>Total Qty</span>
              <span>{formatNumber(totalQty)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹ {formatPrice(subTotal)}</span>
            </div>
            {subTotal > 0 && (
              <>
                <div className="flex justify-between text-sm">
                  <span>GST (18%)</span>
                  <span>₹ {formatPrice(gstAmount)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span>Order Total</span>
                  <span>₹ {formatPrice(orderTotal)}</span>
                </div>
              </>
            )}
            <button
              className={`w-full mt-5 px-4 py-2 text-white rounded ${
                totalQty >= 25
                  ? "bg-black hover:bg-gray-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleProceedToBuy}
              disabled={totalQty < 25}
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
