import "../styles/form.scss";

const Form = () => {
  return (
    <div className="form">
      <label className="form-label">Name: </label>
      <input type="text" placeholder="Product Name" className="form-input" />
      <label className="form-label">Opened On: </label>
      <input type="date" className="form-input" />
      <label className="form-label">Use By: </label>
      <input type="month" className="form-input" />
    </div>
  );
}
export default Form;