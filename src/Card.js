function Card(props) {
  return (
    <section className="card">
      <h2>{props.name}</h2>
      {props.children}
    </section>
  );
}

export default Card;
