import StripeCheckout, {Token} from 'react-stripe-checkout';
interface Props {
  price: number;
}
const StripeCheckoutButton:React.FC<Props>= ({ price }: Props) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY ? process.env.REACT_APP_STRIPE_KEY : "";

  const onToken = (token:Token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='/favicon.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
