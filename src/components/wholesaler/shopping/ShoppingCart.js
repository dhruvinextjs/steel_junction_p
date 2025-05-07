"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems, updateCartQuantity } from "@/redux/CartSlice";
import { fetchOrderSummary } from "@/redux/OrderSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((state) => state.getCart);
  const { totalQty, subTotal, gstAmount, loadingCharge, insurance, tcsAmount, orderTotal, roundOff, grossTotal, loading } = useSelector((state) => state.order);
  const [editableQty, setEditableQty] = useState({});
  const [isUpdating, setIsUpdating] = useState({}); // Track updates for each product/variant
  const router = useRouter();

  const formatNumber = (number) => {
    return number !== undefined && number !== null ? number.toFixed(1) : "0.0";
  };

  useEffect(() => {
    if (cart && cart.length === 0) {
      dispatch(fetchCartItems());
    }
    dispatch(fetchOrderSummary());
  }, [dispatch, cart]);

  const cartItems = Array.isArray(cart) ? cart : [];

  const formatPrice = (price) => {
    return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
  };

  const handleQuantityChange = async (productId, variantId, newQty) => {
    if (newQty < 0) return; // Prevent negative quantities
    newQty = parseFloat(newQty.toFixed(1)); // Round to 1 decimal place

    setIsUpdating((prev) => ({
      ...prev,
      [variantId]: true, // Set the updating state to true for this variant
    }));

    // Optimistic UI Update: Immediately reflect the new quantity in the UI
    setEditableQty((prev) => ({
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

    try {
      // Call API to update the quantity in the cart
      const result = await dispatch(updateCartQuantity({ productId, variants: updatedVariants }));

      if (!updateCartQuantity.fulfilled.match(result)) {
        throw new Error("Failed to update quantity");
      }

      // Re-fetch the updated cart and order summary after successful update
      dispatch(fetchCartItems());
      dispatch(fetchOrderSummary());
    } catch (error) {
      // Rollback optimistic update if API fails
      setEditableQty((prev) => ({
        ...prev,
        [variantId]: cartItem.variants.find((variant) => variant.variantId === variantId)?.qty || 0,
      }));
      toast.error("Failed to update quantity");
    } finally {
      setIsUpdating((prev) => ({
        ...prev,
        [variantId]: false, // Reset the updating state once done
      }));
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

  const calculateAmount = (price, qty) => {
    // Calculate the amount by multiplying price and quantity
    return (price * qty).toFixed(2);
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

      <div className="container flex flex-col gap-5 px-4 mx-auto md:px-6 xl:flex-row">
        {/* LEFT COLUMN */}
        <div className="w-full h-full bg-white border xl:w-9/12">
        <div className="w-full overflow-x-auto">
        <table className="min-w-[700px] w-full text-sm">
              <thead className="text-white bg-black">
                <tr>
                  <th className="w-2/5 p-3 text-left">Product</th>
                  <th className="w-1/5 p-3 text-center">Rate PMT</th>
                  <th className="w-1/5 p-3 text-center">Quantity</th>
                  <th className="w-1/5 p-3 text-center">Subtotal</th>
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
                                  variant.qty - 0.1 // Decrement by 0.1
                                )
                              }
                              disabled={isUpdating[variant.variantId]} // Disable the button if updating
                            >
                              -
                            </button>
                            <input
                              type="text"
                              step="0.1"
                              value={editableQty[variant.variantId] ?? variant.qty}
                              onChange={(e) =>
                                handleInputChange(e, item.productId, variant.variantId)
                              }
                              min="0.1"
                              className="w-16 text-center border-0 focus:outline-none"
                              disabled={isUpdating[variant.variantId]} // Disable input during update
                            />
                            <button
                              className="px-2 py-1 hover:bg-gray-200"
                              onClick={() =>
                                handleQuantityChange(
                                  item.productId,
                                  variant.variantId,
                                  variant.qty + 0.1 // Increment by 0.1
                                )
                              }
                              disabled={isUpdating[variant.variantId]} // Disable the button if updating
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-3 font-medium text-center">
                          ₹ {formatPrice(calculateAmount(variant.price, variant.qty))}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
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
              <span className="text-right min-w-[180px]">{formatPrice(subTotal)}</span> {/* Fixed width */}
            </div>
            {subTotal > 0 && (
              <>
                <div className="flex justify-between text-sm">
                  <span>GST (18%)</span>
                  <span className="text-right min-w-[150px]">{formatPrice(gstAmount)}</span>
                </div>
              </>
            )}
            <div className="flex justify-between text-sm font-semibold text-black">
              <span>Order Total</span>
              <span className="text-right">{formatPrice(grossTotal)}</span>
            </div>
            <button
                 className={`w-full mt-5 px-4 py-2 text-white rounded ${totalQty >= 25
                  ? "bg-black hover:bg-gray-800"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
              onClick={handleProceedToBuy}
              disabled={totalQty < 25 || loading} // Disable if totalQty < 25 or loading
            >
              {loading ? "Proceed to Buy" : "Proceed to Buy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
