import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CLIENT_ID } from "../../../config/config";
import { useState } from "react";

export default function PayPalApis({ totalPrice }) {
  const [orderID, setOrderID] = useState('');
  console.log(orderID)

  const createOrder = (data, actions) => {
    try {
      console.log(data)
      return actions.order
        .create({
          purchase_units: [
            {
              description: "Sunflower",
              amount: {
                currency_code: "USD",
                value: totalPrice,
              },
            },
          ],
        }).then((orderID) => {
          setOrderID(orderID);
          return orderID;
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onApprove = async (data, actions) => {
    try {
      return actions.order.capture().then(function (details) {
        console.log(details)
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <PayPalButtons
        style={{
          layout: "vertical",
          color: 'silver',
          shape: 'pill',
        }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}