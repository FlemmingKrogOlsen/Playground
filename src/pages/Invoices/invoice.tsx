import { useParams, useNavigate  } from "react-router-dom";
import { getInvoice, deleteInvoice  } from "../../data";
import { Main } from '../styled'

const Invoice = () => {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId || "0", 10));
  
  return (
    <Main>
      {!invoice ? (
        <div>Invoice Not found</div>
      ) : (
        <>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
          <p>
            <button
              onClick={() => {
                deleteInvoice(invoice ? invoice.number : 0);
                navigate("/invoices");
              }}
            >
              Delete
            </button>
          </p>
        </>
      )}
    </Main>
  );
}

export default Invoice;