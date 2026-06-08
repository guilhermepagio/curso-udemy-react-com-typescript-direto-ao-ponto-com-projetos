type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <div>Greeting, {name}!</div>;
};

export default Greeting;
