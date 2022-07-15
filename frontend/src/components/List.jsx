import "../styles/list.scss";

const List = () => {
  return (
    <div className="list">
      <table>
        <tr>
          <th>Serial No</th>
          <th>Product Name</th>
          <th>Opened On</th>
          <th>Use By</th>
          <th>Expired?</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Face Cream</td>
          <td>2022-01-01</td>
          <td>2023-01-01</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Body Cream</td>
          <td>2022-02-02</td>
          <td>2023-02-02</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Face Cream</td>
          <td>2022-01-01</td>
          <td>2023-01-01</td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Body Cream</td>
          <td>2022-02-02</td>
          <td>2023-02-02</td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default List;